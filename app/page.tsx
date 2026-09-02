import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* SECCIÓN HERO (CON IMAGEN PRINCIPAL) */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Texto */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs md:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Especialistas en normativa SUNAT
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Contabilidad para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                empresas que buscan crecer.
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
              Blindamos tu empresa contra multas y contingencias. Nos encargamos del Outsourcing Contable, Tributario, Laboral y Gestión de Costos para que tú te enfoques en operar tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/calculadora" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/30 text-center">
                Calculadora de Rentabilidad
              </Link>
              <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all text-center">
                Portal VIP
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Imagen Principal */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80" 
              alt="Consultoría Contable" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* BARRA DE CONFIANZA */}
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

      {/* SECCIÓN DE SERVICIOS CON IMÁGENES Y ENLACES ACTIVOS */}
      <section className="py-20 md:py-28 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios Especializados</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Soluciones integrales diseñadas para optimizar tu carga fiscal, proteger a tus colaboradores y maximizar tu rentabilidad operativa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Servicio 1: Tributario */}
            <div className="bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80" alt="Tributario" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-xl font-bold mb-3 text-white">Outsourcing Tributario</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Elaboración de estados financieros, liquidación de impuestos y planeamiento tributario riguroso para pagar lo justo por ley.
                </p>
                <Link href="/tributario" className="text-blue-400 text-sm font-bold flex items-center gap-1 hover:text-blue-300">
                  Ver detalles →
                </Link>
              </div>
            </div>

            {/* Servicio 2: Laboral */}
            <div className="bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 transition-all hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=600&q=80" alt="Laboral" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-xl font-bold mb-3 text-white">Gestión Laboral Integral</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Cálculo de nóminas, declaraciones PLAME, AFP, liquidaciones y contratos. Evita demandas y multas con la SUNAFIL.
                </p>
                <Link href="/laboral" className="text-cyan-400 text-sm font-bold flex items-center gap-1 hover:text-cyan-300">
                  Ver detalles →
                </Link>
              </div>
            </div>

            {/* Servicio 3: Costos */}
            <div className="bg-slate-800/40 rounded-3xl border border-slate-700 overflow-hidden hover:border-emerald-500/50 transition-all hover:-translate-y-2">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Costos" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              <div className="p-8 pt-2">
                <h3 className="text-xl font-bold mb-3 text-white">Costos y Presupuestos</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Análisis profundo de la estructura de costos de tu empresa para identificar fugas de capital y proyectar un crecimiento sano.
                </p>
                <Link href="/costos" className="text-emerald-400 text-sm font-bold flex items-center gap-1 hover:text-emerald-300">
                  Ver detalles →
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* INICIO DE LA SECCIÓN DE SOCIOS FUNDADORES */}
      <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
        {/* Decoración de fondo */}
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
                {/* NOTA PARA RICARDO: Cuando tengas tu foto, borra el <span> de abajo y descomenta la etiqueta <img> */}
                <span className="text-4xl text-cyan-400 font-bold tracking-widest">RC</span>
                {/* <img src="/foto-ricardo.jpg" alt="Ricardo Cervantes" className="w-full h-full object-cover" /> */}
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
                {/* NOTA PARA RICARDO: Cuando tengas la foto de Sheila, borra el <span> de abajo y descomenta la etiqueta <img> */}
                <span className="text-4xl text-blue-400 font-bold tracking-widest">SP</span>
                {/* <img src="/foto-sheila.jpg" alt="Sheila Puchoc" className="w-full h-full object-cover" /> */}
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
      {/* FIN DE LA SECCIÓN DE SOCIOS FUNDADORES */}

    </div>
  );
}