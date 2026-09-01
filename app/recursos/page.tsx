import { client } from '@/sanity/lib/client'

// Esta función busca los archivos en tu base de datos de Sanity
async function getRecursos() {
  const query = `*[_type == "recurso"]{
    _id,
    titulo,
    autor,
    descripcion,
    icono,
    "archivoUrl": archivo.asset->url,
    "nombreOriginal": archivo.asset->originalFilename
  }`
  return client.fetch(query)
}

export default async function RecursosPage() {
  const recursos = await getRecursos()

  return (
    <main className="max-w-6xl mx-auto p-8 pt-20">
      <h1 className="text-4xl font-bold text-center mb-4">Recursos y Descargas</h1>
      <p className="text-center text-slate-400 mb-12">
        Descarga plantillas, macros y documentos útiles diseñados para optimizar la gestión de tu empresa.
      </p>

      {recursos.length === 0 ? (
        <p className="text-center text-slate-500">Pronto subiremos nuevos recursos. ¡Mantente atento!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((recurso: any) => {
            const linkDescarga = recurso.archivoUrl 
              ? `${recurso.archivoUrl}?dl=${recurso.nombreOriginal || 'SyR-Documento.pdf'}`
              : '#';

            return (
              <div key={recurso._id} className="border border-slate-800 bg-slate-900/50 p-6 rounded-lg hover:border-cyan-500 transition-colors flex flex-col h-full">
                <div className="text-4xl mb-4">{recurso.icono || '📄'}</div>
                <h2 className="text-xl font-bold mb-1 text-white">{recurso.titulo}</h2>
                
                {/* Aquí mostramos el nombre del autor */}
                {recurso.autor && (
                  <p className="text-sm text-cyan-400 font-semibold mb-3">
                    Por: {recurso.autor}
                  </p>
                )}

                <p className="text-slate-400 mb-6 flex-grow">{recurso.descripcion}</p>
                
                {recurso.archivoUrl ? (
                  <a 
                    href={linkDescarga} 
                    className="block text-center bg-cyan-600 text-white px-4 py-2 rounded font-bold hover:bg-cyan-500 transition-colors"
                  >
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