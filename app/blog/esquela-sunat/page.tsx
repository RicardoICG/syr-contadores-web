import Link from "next/link";

export default function ArticuloSunat() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-blue-400 text-sm font-bold mb-8 inline-block hover:text-blue-300">← Volver al Blog</Link>
        
        <span className="inline-block px-3 py-1 bg-blue-900/50 text-blue-400 text-xs font-bold rounded-full mb-4">Tributario / SUNAT</span>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">¿Recibiste una esquela de SUNAT por diferencias de IGV? Pasos para responder sin multas</h1>
        
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-800">
          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold">RC</div>
          <div>
            <p className="text-white font-bold text-sm">Ricardo Ismael Cervantes Gutierrez</p>
            <p className="text-xs text-slate-500">Consultor Tributario</p>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>Uno de los dolores de cabeza más comunes para las MYPE en el Perú es recibir una notificación en su Buzón Electrónico SOL indicando "Inconsistencias en la declaración de IGV". Con la implementación del SIRE (Sistema Integrado de Registros Electrónicos), la SUNAT cruza información en tiempo real.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">¿Por qué ocurre esta diferencia?</h2>
          <p>Principalmente sucede por tres razones:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Declaraste comprobantes físicos que tu proveedor no informó.</li>
            <li>Existen notas de crédito aplicadas en destiempo.</li>
            <li>Error de digitación o uso de Excel desactualizado al consolidar las compras.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Pasos para responder a la esquela:</h2>
          <p><strong>1. No ignores la notificación:</strong> Tienes un plazo perentorio (usualmente 5 a 10 días hábiles). Ignorarlo es aceptar la multa automáticamente.</p>
          <p><strong>2. Descarga el reporte de inconsistencias:</strong> Entra con tu Clave SOL, revisa el archivo Excel anexo a la esquela e identifica qué comprobante exacto está observando SUNAT.</p>
          <p><strong>3. Presenta tu descargo:</strong> A través de la Mesa de Partes Virtual, adjunta los archivos XML, CDR y PDF del comprobante observado, junto con un escrito de descargo firmado por tu representante legal y tu contador.</p>
          
          <div className="bg-blue-900/20 border border-blue-800 p-6 rounded-xl mt-10">
            <h3 className="text-xl font-bold text-white mb-2">¿Necesitas ayuda con tu esquela?</h3>
            <p className="text-sm mb-4">En S&R Contadores somos especialistas en responder requerimientos de SUNAT y regularizar contabilidades atrasadas.</p>
            <Link href="https://wa.me/51974684397" className="inline-block px-6 py-2 bg-blue-600 text-white font-bold rounded-lg text-sm hover:bg-blue-500">Contactar a S&R Contadores</Link>
          </div>
        </div>
      </div>
    </div>
  );
}