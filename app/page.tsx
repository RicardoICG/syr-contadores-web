import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* SECCIÓN HERO (CABECERA PRINCIPAL) */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 px-6 overflow-hidden">
        {/* Efecto de luz de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs md:text-sm font-semibold mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Especialistas en normativa SUNAT y laboral
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Contabilidad inteligente para <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              empresas que buscan crecer.
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            Blindamos tu empresa contra multas y contingencias. Nos encargamos del Outsourcing Contable, Tributario, Laboral y Gestión de Costos para que tú te enfoques en operar y escalar tu negocio con total tranquilidad.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
            <Link href="/calculadora" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] text-center">
              Probar Calculadora de Rentabilidad
            </Link>
            <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all text-center">
              Acceso Portal Clientes
            </Link>
          </div>
        </div>
      </section>

      {/* BARRA DE CONFIANZA / INDICADORES */}
      <section className="border-y border-slate-800 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <h3 className="text-3xl font-black text-white mb-1">100%</h3>
              <p className="text-sm text-slate-400">Cumplimiento SUNAT</p>
            </div>
            <div className="pt-4 md:pt-0 border-t border-slate-800 md:border-t-0">
              <h3 className="text-3xl font-black text-white mb-1">Cero</h3>
              <p className="text-sm text-slate-400">Multas Laborales</p>
            </div>
            <div className="pt-4 md:pt-0 border-t border-slate-800 md:border-t-0 md:border-l">
              <h3 className="text-3xl font-black text-white mb-1">MYPE</h3>
              <p className="text-sm text-slate-400">Y Régimen General</p>
            </div>
            <div className="pt-4 md:pt-0 border-t border-slate-800 md:border-t-0 md:border-l">
              <h3 className="text-3xl font-black text-white mb-1">24/7</h3>
              <p className="text-sm text-slate-400">Soporte Estratégico</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS ESTRATÉGICOS */}
      <section className="py-20 md:py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios Especializados</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Soluciones integrales diseñadas para optimizar tu carga fiscal, proteger a tus colaboradores y maximizar tu rentabilidad operativa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Tarjeta 1 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <div className="w-14 h-14 bg-blue-900/50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                🏛️
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Outsourcing Tributario</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Elaboración de estados financieros, liquidación de impuestos y planeamiento tributario riguroso para pagar lo justo por ley y sin contingencias.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-cyan-500/50 transition-colors group">
              <div className="w-14 h-14 bg-cyan-900/50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Gestión Laboral Integral</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Cálculo de nóminas, declaraciones PLAME, AFP, liquidaciones y contratos. Evita demandas y multas con la SUNAFIL y el Ministerio de Trabajo.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500/50 transition-colors group">
              <div className="w-14 h-14 bg-emerald-900/50 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                📈
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Costos y Presupuestos</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Análisis profundo de la estructura de costos operativos de tu empresa para identificar fugas de capital y proyectar un crecimiento financiero sano.
              </p>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}