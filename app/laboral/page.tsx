import Link from "next/link";

export default function LaboralPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-cyan-400 text-sm font-bold mb-8 inline-block hover:text-cyan-300">← Volver al inicio</Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-6">Consultoría y Gestión Laboral Integral</h1>
        <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1000&q=80" alt="Laboral" className="w-full h-64 object-cover rounded-2xl mb-10 shadow-lg border border-slate-700" />
        
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>La gestión del capital humano requiere precisión absoluta. Desarrollamos propuestas de consultoría laboral y contable a medida para garantizar el cumplimiento normativo y evitar contingencias con la SUNAFIL y el Ministerio de Trabajo.</p>
          
          <h3 className="text-2xl font-bold text-white mt-8 mb-4">Nuestras Soluciones Laborales:</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Cálculo preciso de planillas, horas extras, gratificaciones, CTS y utilidades.</li>
            <li>Presentación mensual de AFP Net y PLAME.</li>
            <li>Redacción y registro de contratos laborales según regímenes MYPE y General.</li>
            <li>Auditoría de obligaciones laborales y cálculos de liquidaciones de beneficios sociales.</li>
            <li>Asesoría frente a inspecciones laborales.</li>
          </ul>
          
          <div className="mt-12 bg-slate-800 p-8 rounded-2xl border border-cyan-500/30 text-center">
            <h4 className="text-xl font-bold text-white mb-4">Protege a tu empresa y a tu equipo</h4>
            <button className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all">Solicitar propuesta</button>
          </div>
        </div>
      </div>
    </div>
  );
}