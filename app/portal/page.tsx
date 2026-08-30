"use client";

export default function PortalDashboard() {
  return (
    <div className="min-h-screen bg-slate-900 flex text-white font-sans">
      
      {/* BARRA LATERAL (SIDEBAR) */}
      <aside className="w-64 bg-slate-950 border-r border-slate-800 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            S&R Portal VIP
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full text-left px-4 py-3 bg-blue-600/10 text-blue-400 rounded-lg border border-blue-500/20 font-medium transition-all">
            📊 Resumen Financiero
          </button>
          <button className="w-full text-left px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-all">
            🛡️ Bóveda Tributaria
          </button>
          <button className="w-full text-left px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-all">
            👥 Planillas y RRHH
          </button>
          <button className="w-full text-left px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-lg transition-all">
            💻 Conexión ERP
          </button>
        </nav>
        <div className="p-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 mb-2">Conectado como:</p>
          <p className="text-sm font-bold">Gerencia MYPE S.A.C.</p>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">Hola, Juan Pérez</h1>
            <p className="text-slate-400">Aquí está el estado actual de tu empresa al cierre de este mes.</p>
          </div>
          <button className="px-5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm font-bold transition-all">
            Cerrar Sesión
          </button>
        </header>

        {/* TARJETAS DE INDICADORES (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-slate-400 text-sm font-bold mb-2">Impuestos por Pagar (IGV/Renta)</h3>
            <p className="text-3xl font-bold text-white">S/ 4,250.00</p>
            <p className="text-green-400 text-xs mt-2">✓ Vence en 5 días (Declarado)</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-slate-400 text-sm font-bold mb-2">Costo Total de Planilla</h3>
            <p className="text-3xl font-bold text-white">S/ 12,400.00</p>
            <p className="text-blue-400 text-xs mt-2">Gestionado por S&R Laboral</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-slate-400 text-sm font-bold mb-2">Alerta SUNAT/SUNAFIL</h3>
            <p className="text-3xl font-bold text-green-400">0 Riesgos</p>
            <p className="text-slate-500 text-xs mt-2">Empresa blindada</p>
          </div>
        </div>

        {/* SECCIÓN DE DOCUMENTOS RECIENTES */}
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-6">Documentos Listos para Descargar</h2>
          <div className="space-y-4">
            
            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-700">
              <div className="flex items-center gap-4">
                <div className="text-red-400 text-2xl">📄</div>
                <div>
                  <p className="font-bold">Constancia PDT 621 - Periodo Anterior</p>
                  <p className="text-xs text-slate-400">Subido por Ricardo Cervantes</p>
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-bold">Descargar PDF</button>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-xl border border-slate-700">
              <div className="flex items-center gap-4">
                <div className="text-green-400 text-2xl">📊</div>
                <div>
                  <p className="font-bold">Boletas de Pago Firmadas - Personal</p>
                  <p className="text-xs text-slate-400">Subido por Sheila Pucho</p>
                </div>
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-bold">Descargar ZIP</button>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}