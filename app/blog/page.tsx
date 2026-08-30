"use client";

export default function BlogPage() {
  
  // Simulamos los artículos estratégicos que definimos en nuestra reunión
  const posts = [
    {
      id: 1,
      category: "Tributario / SUNAT",
      title: "¿Recibiste una esquela de SUNAT por diferencias de IGV? Pasos para responder sin multas",
      excerpt: "El miedo a las multas es real. Descubre cómo sustentar correctamente tus compras y evitar que una fiscalización congele tus cuentas.",
      date: "30 Agosto, 2026",
      readTime: "5 min de lectura",
      author: "Ricardo Cervantes"
    },
    {
      id: 2,
      category: "Laboral / SUNAFIL",
      title: "Contratos de trabajo en Perú: El error de la 'quinta categoría' que SUNAFIL siempre multa",
      excerpt: "Camuflar trabajadores en recibos por honorarios es el riesgo más caro para una MYPE. Conoce cómo estructurar tu planilla legalmente.",
      date: "25 Agosto, 2026",
      readTime: "4 min de lectura",
      author: "Sheila Pucho"
    },
    {
      id: 3,
      category: "Tecnología & ERPs",
      title: "¿Por qué el Excel ya no sirve para tu contabilidad? Señales de que necesitas un ERP",
      excerpt: "Tomar decisiones basándote en hojas de cálculo desactualizadas te está costando rentabilidad. Así es como la automatización cambia el juego.",
      date: "18 Agosto, 2026",
      readTime: "6 min de lectura",
      author: "Ricardo Cervantes"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      
      {/* HEADER DEL BLOG */}
      <header className="bg-slate-950 py-16 px-6 border-b border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-bold tracking-widest text-sm mb-4 uppercase">
            Recursos y Actualidad Empresarial
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            El Blog de S&R Contadores
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Guías tácticas sobre tributación, finanzas y normativa laboral para proteger y escalar tu MYPE en Perú.
          </p>
        </div>
      </header>

      {/* LISTA DE ARTÍCULOS */}
      <main className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {posts.map((post) => (
            <article key={post.id} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all group flex flex-col">
              
              {/* Imagen simulada del artículo */}
              <div className="h-48 bg-slate-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-600 group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>

              {/* Contenido del artículo */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Meta datos del artículo */}
                <div className="border-t border-slate-700 pt-4 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center text-white">
                      {post.author.charAt(0)}
                    </span>
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}

        </div>

        {/* LEAD MAGNET INYECTADO EN EL BLOG (Para captar clientes que leen) */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">¿No tienes tiempo para leer sobre leyes?</h3>
          <p className="text-slate-300 max-w-2xl mb-8">
            Déjanos la carga pesada a nosotros. Descarga nuestro Checklist de Alertas Rojas o contacta a nuestros especialistas para una auditoría rápida de tu negocio.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg"
          >
            Ir a la página principal
          </button>
        </div>
      </main>

    </div>
  );
}