import { client } from '@/sanity/lib/client'
import { PortableText } from 'next-sanity'
import Link from 'next/link'

export const revalidate = 0;

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
        asset->{
          _id,
          url
        }
      }
    }
  }`
  return client.fetch(query, { slug })
}

// AQUÍ ESTÁ LA CORRECCIÓN: text-left para celulares, md:text-justify para laptops
const componentesPortables = {
  block: {
    normal: ({ children }: any) => <p className="mb-5 text-slate-300 leading-relaxed text-base md:text-lg text-left md:text-justify">{children}</p>,
    h2: ({ children }: any) => <h2 className="text-xl md:text-2xl font-bold mt-8 md:mt-10 mb-4 text-cyan-400 uppercase leading-snug">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-lg md:text-xl font-bold mt-6 md:mt-8 mb-3 text-white leading-snug">{children}</h3>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-slate-400 my-6 text-sm md:text-base">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-5 md:pl-6 mb-6 text-slate-300 space-y-2 text-base md:text-lg">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-5 md:pl-6 mb-6 text-slate-300 space-y-2 text-base md:text-lg">{children}</ol>,
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?.url) return null;
      return (
        <div className="my-8 md:my-10 flex justify-center w-full">
          <img src={value.asset.url} alt="Imagen adjunta" className="rounded-lg shadow-xl w-full md:max-w-full border border-slate-700 object-contain" />
        </div>
      )
    }
  }
}

export default async function ArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articulo = await getArticulo(slug);

  if (!articulo) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8 pt-20 text-center">
        <h1 className="text-xl md:text-2xl text-white mb-4">Artículo no encontrado</h1>
        <Link href="/blog" className="text-cyan-500 hover:underline">← Volver al blog</Link>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 pt-20 md:p-8 md:pt-24 w-full overflow-hidden">
      <Link href="/blog" className="text-cyan-500 hover:text-cyan-400 mb-6 md:mb-8 inline-block font-semibold text-sm md:text-base">
        ← Volver a todos los artículos
      </Link>

      <article className="w-full">
        {articulo.imagenPrincipal && (
          <img 
            src={articulo.imagenPrincipal} 
            alt={articulo.titulo} 
            className="w-full h-[200px] sm:h-[250px] md:h-[400px] object-cover rounded-xl mb-6 md:mb-10 border border-slate-800 shadow-2xl"
          />
        )}
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight break-words">
          {articulo.titulo}
        </h1>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-slate-400 mb-8 md:mb-10 pb-6 md:pb-8 border-b border-slate-800">
          {articulo.autor && (
            <span className="bg-cyan-900/50 text-cyan-400 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-bold border border-cyan-800 inline-block w-fit">
              Por: {articulo.autor}
            </span>
          )}
          {articulo.fecha && (
            <span className="text-xs md:text-sm font-medium">
              Publicado el: {new Date(articulo.fecha).toLocaleDateString('es-PE')}
            </span>
          )}
        </div>

        <div className="mt-6 md:mt-8 w-full prose-invert max-w-none">
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