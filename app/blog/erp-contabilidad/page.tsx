import Link from "next/link";

export default function ArticuloTecnologia() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-emerald-400 text-sm font-bold mb-8 inline-block hover:text-emerald-300">← Volver al Blog</Link>
        
        <span className="inline-block px-3 py-1 bg-emerald-900/50 text-emerald-400 text-xs font-bold rounded-full mb-4">Tecnología & ERPs</span>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">¿Por qué el Excel ya no sirve para tu contabilidad? Señales de que necesitas un ERP</h1>
        
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-800">
          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-bold">RC</div>
          <div>
            <p className="text-white font-bold text-sm">Ricardo Ismael Cervantes Gutierrez</p>
            <p className="text-xs text-slate-500">Consultor Tributario y Financiero</p>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>Excel es una herramienta fantástica para empezar un negocio. Pero cuando tu empresa empieza a facturar más, procesar múltiples planillas y manejar inventarios complejos, una hoja de cálculo se convierte en tu peor enemigo financiero.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3 Señales Críticas de que debes migrar a un ERP:</h2>
          
          <p><strong>1. Tienes "Islas de Información":</strong> Tu contador tiene un Excel, tu jefe de ventas otro, y el de almacén otro distinto. A fin de mes, los números nunca cuadran y pierdes días tratando de conciliar la información.</p>
          <p><strong>2. Errores Humanos Costosos:</strong> Borrar una fórmula accidentalmente o copiar mal un DNI puede desencadenar declaraciones erróneas ante la SUNAT, resultando en multas inevitables.</p>
          <p><strong>3. Tomas decisiones "a ciegas":</strong> No sabes cuál es tu rentabilidad real hoy, martes a las 3:00 PM. Tienes que esperar al cierre de mes para que tu contador te envíe el reporte.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">La solución: Outsourcing Tecnológico</h2>
          <p>En la actualidad, no necesitas comprar un software carísimo. Un buen estudio contable ya trae consigo su propio ecosistema de ERP en la nube (Software as a Service) conectado directamente con los servidores de SUNAT para emisión electrónica y SIRE.</p>

          <div className="bg-emerald-900/20 border border-emerald-800 p-6 rounded-xl mt-10">
            <h3 className="text-xl font-bold text-white mb-2">Moderniza tus finanzas con S&R</h3>
            <p className="text-sm mb-4">Llevamos tu contabilidad al siguiente nivel utilizando las mejores herramientas tecnológicas del mercado.</p>
            <Link href="/calculadora" className="inline-block px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg text-sm hover:bg-emerald-500">Prueba nuestra tecnología gratis</Link>
          </div>
        </div>
      </div>
    </div>
  );
}