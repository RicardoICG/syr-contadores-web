import Link from "next/link";

export default function TributarioPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-blue-400 text-sm font-bold mb-8 inline-block hover:text-blue-300">← Volver al inicio</Link>
        
        <h1 className="text-4xl md:text-5xl font-black mb-6">Outsourcing Tributario Estratégico</h1>
        <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1000&q=80" alt="Tributario" className="w-full h-64 object-cover rounded-2xl mb-10 shadow-lg border border-slate-700" />
        
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>Un error en la declaración de impuestos puede costar miles de soles en multas. Nuestro servicio de Outsourcing Tributario está diseñado para blindar a tu empresa frente a requerimientos y fiscalizaciones de la SUNAT.</p>
          
          <h3 className="text-2xl font-bold text-white mt-8 mb-4">¿Qué incluye nuestro servicio?</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Elaboración y presentación oportuna de liquidaciones mensuales de impuestos (PDT 621, Plame, etc.).</li>
            <li>Planeamiento tributario anual para optimizar la carga fiscal de acuerdo al marco legal.</li>
            <li>Reconstrucción contable y regularización de periodos atrasados.</li>
            <li>Auditoría preventiva de comprobantes electrónicos (SIRE).</li>
            <li>Elaboración de Estados Financieros bajo normativas vigentes.</li>
          </ul>
          
          <div className="mt-12 bg-slate-800 p-8 rounded-2xl border border-blue-500/30 text-center">
            <h4 className="text-xl font-bold text-white mb-4">¿Listo para ordenar tu contabilidad?</h4>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">Contactar a un asesor</button>
          </div>
        </div>
      </div>
    </div>
  );
}