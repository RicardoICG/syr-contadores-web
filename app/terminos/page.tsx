import Link from "next/link";

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700 shadow-2xl">
        <Link href="/" className="text-blue-400 text-sm font-bold mb-8 inline-block hover:text-blue-300">← Volver al inicio</Link>
        
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2">Términos y Condiciones de Servicio</h1>
        <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-slate-700">Última actualización: {new Date().toLocaleDateString('es-PE')}</p>
        
        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Naturaleza de los Servicios</h2>
            <p>S&R Contadores actúa como una firma consultora externa encargada de proveer servicios de Outsourcing Contable, Tributario, Laboral y Financiero. Nuestras obligaciones son de medio y no de resultado frente a fiscalizaciones de terceros, basando nuestro trabajo estrictamente en la documentación e información proporcionada por EL CLIENTE.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Responsabilidades del Cliente</h2>
            <p>El cliente se obliga a entregar la totalidad de la información contable, financiera, laboral y comercial (facturas, boletas, extractos bancarios, contratos, etc.) de forma veraz, completa y dentro de los plazos establecidos en el cronograma mensual de la firma. S&R Contadores no asume responsabilidad alguna por multas, recargos o intereses impuestos por SUNAT, SUNAFIL u otras entidades derivados de la entrega tardía, omisión o falsedad de la información por parte del cliente.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Confidencialidad y Secreto Profesional</h2>
            <p>Toda la información operativa, financiera y estratégica compartida por el cliente será tratada con el más estricto secreto profesional. Los socios fundadores y el equipo de S&R Contadores suscriben acuerdos de confidencialidad (NDA) para garantizar que los datos no sean divulgados a terceros sin autorización expresa, salvo requerimiento por mandato judicial o legal.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Limitación de Responsabilidad</h2>
            <p>Los cálculos de impuestos, planillas y proyecciones financieras realizados mediante nuestras herramientas (incluida la Calculadora de Rentabilidad) y reportes mensuales se basan en la normativa vigente al momento de su emisión. Las decisiones de inversión o gestión que el cliente tome basándose en nuestros reportes son de su entera responsabilidad empresarial.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Jurisdicción y Ley Aplicable</h2>
            <p>Estos términos se rigen e interpretan de acuerdo con las leyes de la República del Perú. Cualquier controversia derivada de la prestación de nuestros servicios será sometida a la jurisdicción de los jueces y tribunales del Distrito Judicial de Lima.</p>
          </section>
        </div>
      </div>
    </div>
  );
}