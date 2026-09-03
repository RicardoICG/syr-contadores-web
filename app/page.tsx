import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 bg-slate-950">
      
      {/* 1. SECCIÓN PRINCIPAL (HERO) */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-cyan-950 text-cyan-400 border border-cyan-800 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-sm">
            ✦ Especialistas en normativa SUNAT
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Contabilidad para <span className="text-cyan-400">empresas que buscan crecer.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Blindamos tu empresa contra multas y contingencias. Nos encargamos del Outsourcing Contable, Tributario, Laboral y Gestión de Costos para que te enfoques en operar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contacto" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-cyan-900/30 transition-all text-center flex items-center justify-center gap-2 text-lg"
            >
              ✉️ Solicitar Asesoría
            </Link>
          </div>
        </div>

        {/* Tarjeta Visual del Hero */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center justify-center text-center py-12">
            <div className="text-6xl mb-4">📈💼</div>
            <h3 className="text-xl font-bold text-white mb-2">Tranquilidad Financiera</h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Decisiones basadas en datos reales. Deja la carga operativa y tributaria en manos de expertos.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE SERVICIOS PRINCIPALES */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Nuestras Soluciones Corporativas</h2>
          <p className="text-slate-400">Diseñadas a la medida para mantener tu negocio en orden y libre de riesgos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="text-3xl mb-4 bg-slate-800 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">📋</div>
              <h3 className="text-xl font-bold text-white mb-3">Outsourcing Tributario</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Liquidación de impuestos, declaraciones mensuales y planeamiento fiscal estratégico para optimizar la carga tributaria de tu empresa.
              </p>
            </div>
            <Link href="/contacto" className="text-cyan-400 text-sm font-semibold hover:underline flex items-center gap-2">
              Cotizar servicio →
            </Link>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="text-3xl mb-4 bg-slate-800 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">👥</div>
              <h3 className="text-xl font-bold text-white mb-3">Gestión Laboral Integral</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Cálculo de planillas, declaraciones PLAME, AFP y contratos acorde al marco normativo vigente y normativas de SUNAFIL.
              </p>
            </div>
            <Link href="/contacto" className="text-cyan-400 text-sm font-semibold hover:underline flex items-center gap-2">
              Cotizar servicio →
            </Link>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="text-3xl mb-4 bg-slate-800 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Costos y Presupuestos</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Análisis profundo de la estructura de costos de tu empresa para identificar fugas de capital y proyectar un crecimiento financiero sano.
              </p>
            </div>
            <Link href="/contacto" className="text-cyan-400 text-sm font-semibold hover:underline flex items-center gap-2">
              Cotizar servicio →
            </Link>
          </div>

        </div>
      </section>

      {/* 3. GRID DE ESTADÍSTICAS Y BENEFICIOS */}
      <section className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl shadow-sm">
            <p className="text-3xl font-extrabold text-cyan-400 mb-1">100%</p>
            <p className="text-slate-400 text-sm font-medium">Cumplimiento SUNAT</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl shadow-sm">
            <p className="text-3xl font-extrabold text-cyan-400 mb-1">Cero</p>
            <p className="text-slate-400 text-sm font-medium">Multas Laborales</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl shadow-sm">
            <p className="text-3xl font-extrabold text-cyan-400 mb-1">MYPE</p>
            <p className="text-slate-400 text-sm font-medium">Y Régimen General</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl shadow-sm">
            <p className="text-3xl font-extrabold text-cyan-400 mb-1">24/7</p>
            <p className="text-slate-400 text-sm font-medium">Soporte Estratégico</p>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN DE SOCIOS FUNDADORES (CON ÍCONOS CORPORATIVOS) */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Dirigidos por talento joven y <span className="text-cyan-400">tecnología de punta</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              S&R Contadores nace con la visión de modernizar la contabilidad en el Perú. Con más de 7 años de experiencia práctica combinada, unimos el rigor del análisis financiero con la innovación tecnológica para ofrecer a tu empresa un servicio ágil, transparente y libre de errores manuales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Tarjeta de Ricardo (Ícono Financiero/Tech) */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xl backdrop-blur-sm">
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-cyan-950/50 border-2 border-cyan-900 flex items-center justify-center relative group-hover:border-cyan-500 group-hover:bg-cyan-900/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-cyan-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">Ricardo Cervantes G.</h3>
                <p className="text-cyan-400 font-semibold text-sm mb-4">Socio Fundador | Especialista Tributario</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Contador Público Colegiado con sólida formación en Ingeniería de Sistemas. Especialista en estructuración de costos, presupuestos y análisis de datos financieros mediante plataformas avanzadas (Power BI, ecosistemas nube y ERPs como SAP). Su enfoque es blindar fiscalmente a la empresa mientras escala su rentabilidad operativa.
                </p>
              </div>
            </div>

            {/* Tarjeta de Sheila (Ícono Laboral/Normativo) */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xl backdrop-blur-sm">
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-blue-950/50 border-2 border-blue-900 flex items-center justify-center relative group-hover:border-blue-500 group-hover:bg-blue-900/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">Sheila Puchoc T.</h3>
                <p className="text-blue-400 font-semibold text-sm mb-4">Socia Fundadora | Especialista Laboral</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Experta en el marco normativo contable, derecho laboral y gestión integral de planillas. Se encarga de la dirección operativa y el cumplimiento estricto ante SUNAT y MTPE, garantizando que el capital humano y las obligaciones legales de tu empresa operen en un entorno de orden impecable y cero contingencias.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}