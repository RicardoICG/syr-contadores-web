import Link from "next/link";

export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-cyan-900/50 text-cyan-400 text-xs font-bold rounded-full mb-4">Descargas Gratuitas</span>
          <h1 className="text-4xl md:text-5xl font-black mb-6">Herramientas y Plantillas</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Optimiza la gestión de tu empresa con nuestras macros de Excel y guías tributarias en PDF. Material exclusivo desarrollado por S&R Contadores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Tarjeta de Descarga 1: MACRO EXCEL */}
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700 p-8 hover:border-green-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-green-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📊
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">Macro Simulador de Planillas MYPE</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Plantilla en Excel automatizada para calcular costos laborales, EsSalud, gratificaciones y vacaciones de forma rápida.
              </p>
            </div>
            
            {/* NOTA PARA RICARDO: Aquí debes poner el nombre exacto de tu archivo después de /descargas/ */}
            <a 
              href="/descargas/macro-planillas.xlsm" 
              download
              className="w-full block text-center px-6 py-3 bg-green-700/20 text-green-400 border border-green-700/50 hover:bg-green-600 hover:text-white font-bold rounded-xl transition-all"
            >
              ↓ Descargar Archivo Excel
            </a>
          </div>

          {/* Tarjeta de Descarga 2: GUÍA PDF */}
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700 p-8 hover:border-red-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-red-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📄
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">Guía: Cómo afrontar una fiscalización</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Manual en PDF con el paso a paso documentado para responder esquelas de SUNAT sin caer en multas ni infracciones.
              </p>
            </div>
            
            {/* NOTA PARA RICARDO: Aquí debes poner el nombre exacto de tu archivo PDF */}
            <a 
              href="/descargas/guia-sunat.pdf" 
              download
              className="w-full block text-center px-6 py-3 bg-red-700/20 text-red-400 border border-red-700/50 hover:bg-red-600 hover:text-white font-bold rounded-xl transition-all"
            >
              ↓ Descargar Guía PDF
            </a>
          </div>

          {/* Tarjeta de Descarga 3: FORMATO WORD/EXCEL */}
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700 p-8 hover:border-blue-500/50 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📝
              </div>
              <h2 className="text-xl font-bold mb-3 text-white">Modelos de Contratos Laborales</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Formatos pre-aprobados para contratos a plazo fijo e indeterminado, adaptados a la normativa peruana actual.
              </p>
            </div>
            
            <a 
              href="/descargas/modelos-contratos.zip" 
              download
              className="w-full block text-center px-6 py-3 bg-blue-700/20 text-blue-400 border border-blue-700/50 hover:bg-blue-600 hover:text-white font-bold rounded-xl transition-all"
            >
              ↓ Descargar Formatos
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}