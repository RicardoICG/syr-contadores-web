import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
        <Link href="/" className="text-blue-400 text-sm font-bold mb-8 inline-block hover:text-blue-300">← Volver al inicio</Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2">Políticas de Privacidad</h1>
        <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-700">Cumplimiento de la Ley N° 29733 - Ley de Protección de Datos Personales (Perú)</p>
        
        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Compromiso de Privacidad</h2>
            <p>En S&R Contadores, valoramos y respetamos la privacidad de la información corporativa y personal de nuestros clientes. El presente documento establece los lineamientos bajo los cuales recopilamos, utilizamos, almacenamos y protegemos sus datos, en estricto cumplimiento con la legislación peruana vigente.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Recopilación de Datos</h2>
            <p>Para la correcta ejecución de nuestros servicios de Outsourcing, recopilamos datos identificativos, económicos, financieros, fiscales y sociolaborales, los cuales incluyen, pero no se limitan a: Fichas RUC, claves SOL, planillas de remuneraciones, información bancaria, contratos de personal e historial tributario.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Finalidad del Tratamiento</h2>
            <p>La información recopilada se utiliza exclusivamente para: la elaboración y presentación de declaraciones juradas ante la SUNAT, gestión de planillas PLAME, cálculos laborales, estructuración de estados financieros, auditorías internas y comunicación directa para fines contractuales y de consultoría.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Almacenamiento y Seguridad</h2>
            <p>Los datos personales y financieros son almacenados en bases de datos con altos estándares de seguridad tecnológica y cifrado. Implementamos protocolos de acceso restringido para evitar alteraciones, pérdidas, tratamientos o accesos no autorizados por parte de terceros.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Ejercicio de Derechos ARCO</h2>
            <p>De conformidad con la Ley N° 29733, usted o su representante legal pueden ejercer en cualquier momento los derechos de Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO). Para ello, deberá enviar una solicitud formal a nuestros correos electrónicos de contacto corporativo: <strong>Ricardoiscervantesg@gmail.com</strong> o <strong>s5hyla14@gmail.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}