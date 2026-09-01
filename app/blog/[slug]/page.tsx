import { client } from '@/sanity/lib/client'
import { PortableText } from 'next-sanity'
import Link from 'next/link'

// Búsqueda del artículo específico y expansión de imágenes internas
async function getArticulo(slug: string) {
  const query = `*[_type == "articulo" && slug.current == $slug][0]{
    titulo,
    autor,
    fecha,
    "imagenPrincipal": imagen.asset->url,
    contenido[]{
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }`
  return client.fetch(query, { slug })
}

// Diseños de texto para que parezca una revista corporativa
const componentesPortables = {
  block: {
    normal: ({ children }: any) => <p className="mb-5 text-slate-300 leading-relaxed text-lg text-justify">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-10 mb-4 text-cyan-400 uppercase">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold mt-8 mb-3 text-white">{children}</h3>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-slate-400 my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-slate-300 space-y-2 text-lg">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-slate-300 space-y-2 text-lg">{children}</ol>,
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-10 flex justify-center">
        <img src={value.url} alt="Cuadro o tabla adjunta" className="rounded-lg shadow-xl max-w-full border border-slate-700" />
      </div>
    )
  }
}

export default async function ArticuloPage({ params }: { params: { slug: string } }) {
  const articulo = await getArticulo(params.slug)

  if (!articulo) {
    return (
      <main className="max-w-4xl mx-auto p-8 pt-20 text-center">
        <h1 className="text-2xl text-white mb-4">Artículo no encontrado</h1>
        <Link href="/blog" className="text-cyan-500 hover:underline">← Volver al blog</Link>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto p-8 pt-24">
      <Link href="/blog" className="text-cyan-500 hover:text-cyan-400 mb-8 inline-block font-semibold">
        ← Volver a todos los artículos
      </Link>

      <article>
        {articulo.imagenPrincipal && (
          <img 
            src={articulo.imagenPrincipal} 
            alt={articulo.titulo} 
            className="w-full h-[400px] object-cover rounded-xl mb-10 border border-slate-800 shadow-2xl"
          />
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {articulo.titulo}
        </h1>
        
        <div className="flex items-center gap-4 text-slate-400 mb-10 pb-8 border-b border-slate-800">
          {articulo.autor && (
            <span className="bg-cyan-900/50 text-cyan-400 px-4 py-1.5 rounded-full text-sm font-bold border border-cyan-800">
              Por: {articulo.autor}
            </span>
          )}
          {articulo.fecha && (
            <span className="text-sm font-medium">
              Publicado el: {new Date(articulo.fecha).toLocaleDateString('es-PE')}
            </span>
          )}
        </div>

        {/* Aquí se inyecta el contenido con formato */}
        <div className="mt-8">
          {articulo.contenido ? (
            <PortableText value={articulo.contenido} components={componentesPortables} />
          ) : (
            <p className="text-slate-500">Este artículo aún no tiene contenido.</p>
          )}
        </div>
      </article>
    </main>
  )
}