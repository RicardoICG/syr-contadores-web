import { client } from '@/sanity/lib/client'
import Link from 'next/link'

export const revalidate = 0;

// La función ahora recibe la categoría y filtra la base de datos
async function getArticulos(categoria?: string) {
  const filtroCategoria = categoria && categoria !== 'Todas' ? `&& categoria == $categoria` : '';
  const query = `*[_type == "articulo" ${filtroCategoria}] | order(fecha desc) {
    _id,
    titulo,
    autor,
    categoria,
    "slug": slug.current,
    fecha,
    "imagenUrl": imagen.asset->url
  }`
  return client.fetch(query, { categoria })
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ categoria?: string }> }) {
  const sp = await searchParams;
  const categoriaSeleccionada = sp.categoria || 'Todas';
  const articulos = await getArticulos(categoriaSeleccionada);
  
  const categorias = ['Todas', 'Tributaria', 'Laboral', 'Contable'];

  return (
    <main className="max-w-6xl mx-auto p-8 pt-20">
      <h1 className="text-4xl font-bold text-center mb-4">Actualidad Contable y Tributaria</h1>
      <p className="text-center text-slate-400 mb-8">
        Noticias, análisis y consejos estratégicos redactados por los expertos de S&R Contadores.
      </p>

      {/* Barra de Botones Filtradores */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categorias.map(cat => (
          <Link 
            key={cat}
            href={cat === 'Todas' ? '/blog' : `/blog?categoria=${cat}`}
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

      {articulos.length === 0 ? (
        <p className="text-center text-slate-500 bg-slate-900/50 p-8 rounded-lg border border-slate-800">
          Aún no hay artículos publicados en la categoría <strong>{categoriaSeleccionada}</strong>.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.map((articulo: any) => (
            <div key={articulo._id} className="border border-slate-800 bg-slate-900/50 rounded-lg overflow-hidden hover:border-cyan-500 transition-colors flex flex-col relative">
              
              {/* Etiqueta de Categoría Flotante */}
              {articulo.categoria && (
                <span className="absolute top-4 right-4 bg-slate-900/90 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-900 z-10 backdrop-blur-sm">
                  {articulo.categoria}
                </span>
              )}

              {articulo.imagenUrl ? (
                <img src={articulo.imagenUrl} alt={articulo.titulo} className="w-full h-48 object-cover border-b border-slate-800" />
              ) : (
                <div className="w-full h-48 bg-slate-800 flex items-center justify-center border-b border-slate-800"><span className="text-4xl">📰</span></div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-xs text-cyan-500 font-semibold">
                    {articulo.fecha ? new Date(articulo.fecha).toLocaleDateString('es-PE') : 'Reciente'}
                  </p>
                  {articulo.autor && (
                    <span className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">Por: {articulo.autor}</span>
                  )}
                </div>
                
                <h2 className="text-xl font-bold mb-4 text-white line-clamp-2">{articulo.titulo}</h2>
                
                <div className="mt-auto pt-4 border-t border-slate-800/50">
                  <Link href={`/blog/${articulo.slug}`} className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center">
                    Leer artículo completo <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}