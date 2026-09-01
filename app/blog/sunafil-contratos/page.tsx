import Link from "next/link";

export default function ArticuloLaboral() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-cyan-400 text-sm font-bold mb-8 inline-block hover:text-cyan-300">← Volver al Blog</Link>
        
        <span className="inline-block px-3 py-1 bg-cyan-900/50 text-cyan-400 text-xs font-bold rounded-full mb-4">Laboral / SUNAFIL</span>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Contratos de trabajo en Perú: El error que SUNAFIL siempre multa</h1>
        
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-800">
          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold">SP</div>
          <div>
            <p className="text-white font-bold text-sm">Sheila Puchoc Tejeda</p>
            <p className="text-xs text-slate-500">Especialista Laboral</p>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>Muchos empresarios peruanos intentan "ahorrar" costos laborales exigiendo a sus trabajadores que emitan Recibos por Honorarios (Renta de 4ta Categoría) cuando en realidad cumplen funciones de un trabajador en planilla (Renta de 5ta Categoría).</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">El Principio de Primacía de la Realidad</h2>
          <p>A SUNAFIL no le importa lo que diga el contrato escrito. Si en la práctica el trabajador cumple con tres requisitos, se considera relación laboral obligatoria:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Prestación Personal:</strong> El servicio lo realiza la persona directamente, no puede mandar a un reemplazo.</li>
            <li><strong>Remuneración:</strong> Recibe un pago fijo y periódico.</li>
            <li><strong>Subordinación:</strong> Cumple un horario, recibe órdenes directas y usa equipos de la empresa.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Las Consecuencias (Las Multas)</h2>
          <p>Si un inspector de SUNAFIL detecta esto, aplicará la desnaturalización del contrato. Esto significa que la empresa tendrá que pagar de golpe todos los beneficios sociales omitidos (CTS, Gratificaciones, Vacaciones, EsSalud) más una multa que, dependiendo del tamaño de la empresa, puede quebrar a una MYPE.</p>
          
          <div className="bg-cyan-900/20 border border-cyan-800 p-6 rounded-xl mt-10">
            <h3 className="text-xl font-bold text-white mb-2">Audita tu Planilla Hoy</h3>
            <p className="text-sm mb-4">No esperes a la notificación. En S&R Contadores analizamos tus contratos y estructuramos tu planilla para evitar contingencias laborales.</p>
            <Link href="https://wa.me/51974684397" className="inline-block px-6 py-2 bg-cyan-600 text-white font-bold rounded-lg text-sm hover:bg-cyan-500">Solicitar Auditoría Laboral</Link>
          </div>
        </div>
      </div>
    </div>
  );
}