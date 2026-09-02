import { client } from '@/sanity/lib/client'
import Link from 'next/link'

export const revalidate = 0;

async function getRecursos(categoria?: string) {
  const filtroCategoria = categoria && categoria !== 'Todas' ? `&& categoria == $categoria` : '';
  const query = `*[_type == "recurso" ${filtroCategoria}] {
    _id,
    titulo,
    autor,
    categoria,
    descripcion,
    icono,
    "archivoUrl": archivo.asset->url,
    "nombreOriginal": archivo.asset->originalFilename
  }`
  return client.fetch(query, { categoria })
}

export default async function RecursosPage({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const sp = await searchParams;
  const categoriaSeleccionada = sp.categoria || 'Todas';
  const recursos = await getRecursos(categoriaSeleccionada);
  
  const categorias = ['Todas', 'Tributaria', 'Laboral', 'Contable'];

  return (
    <main className="max-w-6xl mx-auto p-8 pt-20">
      <h1 className="text-4xl font-bold text-center mb-4">Recursos y Descargas</h1>
      <p className="text-center text-slate-400 mb-8">
        Descarga plantillas, macros y documentos útiles diseñados para optimizar la gestión de tu empresa.
      </p>

      {/* Barra de Botones Filtradores */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categorias.map(cat => (
          <Link 
            key={cat}
            href={cat === 'Todas' ? '/recursos' : `/recursos?categoria=${cat}`}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${
              categoriaSeleccionada === cat 
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/50' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {recursos.length === 0 ? (
        <p className="text-center text-slate-500 bg-slate-900/50 p-8 rounded-lg border border-slate-800">
          Aún no hay recursos disponibles en la categoría <strong>{categoriaSeleccionada}</strong>.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((recurso: any) => {
            const linkDescarga = recurso.archivoUrl ? `${recurso.archivoUrl}?dl=${recurso.nombreOriginal || 'SyR-Documento.pdf'}` : '#';

            return (
              <div key={recurso._id} className="border border-slate-800 bg-slate-900/50 p-6 rounded-lg hover:border-cyan-500 transition-colors flex flex-col h-full relative">
                
                {recurso.categoria && (
                  <span className="absolute top-4 right-4 bg-slate-800 text-cyan-400 px-2 py-1 rounded text-xs font-bold border border-cyan-900">
                    {recurso.categoria}
                  </span>
                )}

                <div className="text-4xl mb-4">{recurso.icono || '📄'}</div>
                <h2 className="text-xl font-bold mb-1 text-white pr-16">{recurso.titulo}</h2>
                
                {recurso.autor && (
                  <p className="text-sm text-cyan-400 font-semibold mb-3">
                    Por: {recurso.autor}
                  </p>
                )}

                <p className="text-slate-400 mb-6 flex-grow">{recurso.descripcion}</p>
                
                {recurso.archivoUrl ? (
                  <a href={linkDescarga} className="block text-center bg-cyan-600 text-white px-4 py-2 rounded font-bold hover:bg-cyan-500 transition-colors">
                    Descargar Archivo
                  </a>
                ) : (
                  <span className="block text-center bg-slate-800 text-slate-400 px-4 py-2 rounded cursor-not-allowed">
                    Archivo no disponible
                  </span>
                )}
              </div>
            )
          })}
        </div>
      )}
    </main>
  )
}