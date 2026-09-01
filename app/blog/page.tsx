import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6">El Blog de S&R Contadores</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Guías tácticas sobre tributación, finanzas y normativa laboral para proteger y escalar tu MYPE en Perú.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Artículo 1 */}
          <Link href="/blog/esquela-sunat" className="bg-slate-800/50 rounded-3xl border border-slate-700 p-6 hover:border-blue-500/50 transition-all hover:-translate-y-2 group flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 text-xs font-bold rounded-full mb-4">Tributario / SUNAT</span>
              <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">¿Recibiste una esquela de SUNAT por diferencias de IGV? Pasos para responder sin multas</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">El miedo a las multas es real. Descubre cómo sustentar correctamente tus compras y evitar que una fiscalización congele tus cuentas.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">R</div>
                <span>Ricardo Cervantes</span>
              </div>
              <span>5 min de lectura</span>
            </div>
          </Link>

          {/* Artículo 2 */}
          <Link href="/blog/sunafil-contratos" className="bg-slate-800/50 rounded-3xl border border-slate-700 p-6 hover:border-cyan-500/50 transition-all hover:-translate-y-2 group flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-cyan-900/50 text-cyan-400 text-xs font-bold rounded-full mb-4">Laboral / SUNAFIL</span>
              <h2 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">Contratos de trabajo en Perú: El error de la 'quinta categoría' que SUNAFIL siempre multa</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Camuflar trabajadores en recibos por honorarios es el riesgo más caro para una MYPE. Conoce cómo estructurar tu planilla legalmente.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">S</div>
                <span>Sheila Puchoc</span>
              </div>
              <span>4 min de lectura</span>
            </div>
          </Link>

          {/* Artículo 3 */}
          <Link href="/blog/erp-contabilidad" className="bg-slate-800/50 rounded-3xl border border-slate-700 p-6 hover:border-emerald-500/50 transition-all hover:-translate-y-2 group flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-xs font-bold rounded-full mb-4">Tecnología & ERPs</span>
              <h2 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">¿Por qué el Excel ya no sirve para tu contabilidad? Señales de que necesitas un ERP</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Tomar decisiones basándote en hojas de cálculo desactualizadas te está costando rentabilidad. Así es como la automatización cambia el juego.</p>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">R</div>
                <span>Ricardo Cervantes</span>
              </div>
              <span>6 min de lectura</span>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}