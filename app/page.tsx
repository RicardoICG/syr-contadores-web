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
          {/* NUEVO LLAMADO A LA ACCIÓN ENFOCADO EN VENTAS */}
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

      {/* 4. SECCIÓN DE SOCIOS FUNDADORES */}
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
            
            {/* Tarjeta de Ricardo */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all group flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xl backdrop-blur-sm">
              <div className="w-32 h-32 shrink-0 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center overflow-hidden relative group-hover:border-cyan-500 transition-colors">
                <span className="text-4xl text-cyan-400 font-bold tracking-widest">RC</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-1">Ricardo Cervantes G.</h3>
                <p className="text-cyan-400 font-semibold text-sm mb-4">Socio Fundador | Especialista Tributario</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Contador Público Colegiado con sólida formación en Ingeniería de Sistemas. Especialista en estructuración de costos, presupuestos y análisis de datos financieros mediante plataformas avanzadas (Power BI, ecosistemas nube y ERPs como SAP). Su enfoque es blindar fiscalmente a la empresa mientras escala su rentabilidad operativa.
                </p>
              </div>
            </div>

            {/* Tarjeta de Sheila */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all group flex flex-col md:flex-row items-center md:items-start gap-6 shadow-xl backdrop-blur-sm">
              <div className="w-32 h-32 shrink-0 rounded-full bg-slate-800 border-4 border-slate-700 flex items-center justify-center overflow-hidden relative group-hover:border-blue-500 transition-colors">
                <span className="text-4xl text-blue-400 font-bold tracking-widest">SP</span>
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