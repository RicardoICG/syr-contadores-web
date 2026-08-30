import Link from "next/link";

export default function CostosPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-emerald-400 text-sm font-bold mb-8 inline-block hover:text-emerald-300">← Volver al inicio</Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-6">Gestión de Costos y Presupuestos</h1>
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" alt="Costos" className="w-full h-64 object-cover rounded-2xl mb-10 shadow-lg border border-slate-700" />
        
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>Vender más no siempre significa ganar más. Implementamos sistemas de gestión de costos y elaboración de presupuestos con rigor analítico, diseñados para gerencias que requieren información precisa para la toma de decisiones estratégicas.</p>
          
          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Nuestra Metodología Financiera:</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Estructuración de centros de costos y análisis de punto de equilibrio.</li>
            <li>Formulación y control de presupuestos operativos y de capital (CAPEX/OPEX).</li>
            <li>Análisis de desviaciones presupuestales y rentabilidad por línea de negocio.</li>
            <li>Proyección de flujos de caja y escenarios financieros.</li>
            <li>Optimización de políticas de fijación de precios (Pricing).</li>
          </ul>
          
          <div className="mt-12 bg-slate-800 p-8 rounded-2xl border border-emerald-500/30 text-center">
            <h4 className="text-xl font-bold text-white mb-4">Maximiza tu rentabilidad real</h4>
            <Link href="/calculadora" className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all">Usar Calculadora de Rentabilidad</Link>
          </div>
        </div>
      </div>
    </div>
  );
}