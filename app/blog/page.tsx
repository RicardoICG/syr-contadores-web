import { client } from '@/sanity/lib/client'
import Link from 'next/link'

async function getArticulos() {
  const query = `*[_type == "articulo"] | order(fecha desc) {
    _id,
    titulo,
    autor,
    "slug": slug.current,
    fecha,
    "imagenUrl": imagen.asset->url
  }`
  return client.fetch(query)
}

export default async function BlogPage() {
  const articulos = await getArticulos()

  return (
    <main className="max-w-6xl mx-auto p-8 pt-20">
      <h1 className="text-4xl font-bold text-center mb-4">Actualidad Contable y Tributaria</h1>
      <p className="text-center text-slate-400 mb-12">
        Noticias, análisis y consejos estratégicos redactados por los expertos de S&R Contadores.
      </p>

      {articulos.length === 0 ? (
        <p className="text-center text-slate-500">Pronto publicaremos nuestro primer artículo.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articulos.map((articulo: any) => (
            <div key={articulo._id} className="border border-slate-800 bg-slate-900/50 rounded-lg overflow-hidden hover:border-cyan-500 transition-colors flex flex-col">
              
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