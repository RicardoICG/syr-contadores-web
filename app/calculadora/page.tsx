"use client";
import { useState } from "react";

export default function CalculadoraPage() {
  const [ventas, setVentas] = useState<string>("");
  const [costosVariables, setCostosVariables] = useState<string>("");
  const [costosFijos, setCostosFijos] = useState<string>("");
  const [sueldoBase, setSueldoBase] = useState<string>("");
  // NUEVO ESTADO: Selector de Régimen Laboral
  const [regimen, setRegimen] = useState<string>("general"); 

  const numVentas = parseFloat(ventas) || 0;
  const numCostosVar = parseFloat(costosVariables) || 0;
  const numCostosFijos = parseFloat(costosFijos) || 0;
  const numSueldoBase = parseFloat(sueldoBase) || 0;

  // --- LÓGICA FINANCIERA PERÚ (Multi-Régimen) ---
  const essalud = numSueldoBase * 0.09; // Se mantiene 9% como estándar general de salud
  let gratificaciones = 0;
  let cts = 0;
  let vacaciones = 0;

  // Condicionales según la ley laboral peruana
  if (regimen === "general") {
    gratificaciones = numSueldoBase * 0.1667; // 2 sueldos al año
    cts = numSueldoBase * 0.0972; // 1 sueldo + 1/6 grati
    vacaciones = numSueldoBase * 0.0833; // 30 días
  } else if (regimen === "pequena") {
    gratificaciones = numSueldoBase * 0.0833; // 2 medias gratificaciones
    cts = numSueldoBase * 0.0417; // 15 días de remuneración
    vacaciones = numSueldoBase * 0.0417; // 15 días de vacaciones
  } else if (regimen === "micro") {
    gratificaciones = 0; // No aplica
    cts = 0; // No aplica
    vacaciones = numSueldoBase * 0.0417; // 15 días de vacaciones
  }
  
  const cargaSocial = essalud + gratificaciones + cts + vacaciones;
  const costoRealPlanilla = numSueldoBase + cargaSocial;
  
  const utilidadReal = numVentas - numCostosVar - numCostosFijos - costoRealPlanilla;
  const margenNeto = numVentas > 0 ? (utilidadReal / numVentas) * 100 : 0;

  const hasData = numVentas > 0;

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans py-16 px-6">
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-cyan-400 font-bold tracking-widest text-sm mb-4 uppercase">
          Herramienta Exclusiva de S&R Contadores
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
          Calculadora de Rentabilidad Real
        </h1>
        <p className="text-slate-400 text-lg">
          Ingresa tus datos reales. Descubre tu costo laboral oculto y tu margen de ganancia en 30 segundos según tu régimen actual.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* PANEL DE INGRESO DE DATOS */}
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Ingresa Tus Números</h2>
          
          <div className="space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Ventas Mensuales (S/)</label>
              <input 
                type="number" 
                placeholder="Ej. 50000"
                value={ventas} 
                onChange={(e) => setVentas(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold text-lg focus:outline-none focus:border-cyan-400 placeholder-slate-600"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Costo de Ventas (S/)</label>
                <input 
                  type="number" 
                  placeholder="Ej. 15000"
                  value={costosVariables} 
                  onChange={(e) => setCostosVariables(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-400 placeholder-slate-600"
                />
                <p className="text-[11px] text-slate-400 mt-2 leading-tight">Insumos o mercadería para vender.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Costos Fijos (S/)</label>
                <input 
                  type="number" 
                  placeholder="Ej. 5000"
                  value={costosFijos} 
                  onChange={(e) => setCostosFijos(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-400 placeholder-slate-600"
                />
                <p className="text-[11px] text-slate-400 mt-2 leading-tight">Alquiler, luz, internet, etc.</p>
              </div>
            </div>

            {/* SECCIÓN LABORAL (Sueldo + Selector de Régimen) */}
            <div className="pt-4 border-t border-slate-700">
              <label className="block text-sm font-bold text-slate-300 mb-2">Sueldo Base de Planilla (S/)</label>
              <input 
                type="number" 
                placeholder="Ej. 10000"
                value={sueldoBase} 
                onChange={(e) => setSueldoBase(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold text-lg focus:outline-none focus:border-blue-500 placeholder-slate-600 mb-4"
              />
              
              <label className="block text-sm font-bold text-slate-300 mb-2">¿En qué régimen laboral estás?</label>
              <select 
                value={regimen}
                onChange={(e) => setRegimen(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold focus:outline-none focus:border-blue-500 cursor-pointer"
              >
                <option value="general">Régimen General (100% beneficios)</option>
                <option value="pequena">Pequeña Empresa (50% beneficios)</option>
                <option value="micro">Microempresa (Solo vacaciones)</option>
              </select>
              <p className="text-xs text-blue-400 mt-2 font-medium">
                Calcularemos automáticamente tu provisión de EsSalud, CTS, Grati y Vacaciones según la ley aplicable.
              </p>
            </div>
          </div>
        </div>

        {/* PANEL DE RESULTADOS */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden flex flex-col justify-center">
          
          {!hasData ? (
            <div className="text-center opacity-50 relative z-10">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Esperando tus números...</h3>
              <p className="text-sm">Llena el panel de la izquierda para descubrir tu rentabilidad real.</p>
            </div>
          ) : (
            <>
              <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-blue-600 rounded-full mix-blend-screen filter blur-[60px] opacity-20 z-0"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-end mb-6 border-b border-slate-700 pb-4">
                  <h2 className="text-2xl font-bold">Resultados Financieros</h2>
                  <span className="text-xs bg-blue-600 px-3 py-1 rounded-full font-bold">
                    {regimen === 'general' ? 'General' : regimen === 'pequena' ? 'Pequeña Empresa' : 'Microempresa'}
                  </span>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-6">
                  <h3 className="text-red-400 text-sm font-bold mb-1">⚠️ Costo Laboral Oculto Mensualizado</h3>
                  <div className="flex justify-between items-end">
                    <div className="text-slate-300 text-xs">
                      {regimen === 'general' && "Provisión completa (CTS, Grati, EsSalud, Vac.)"}
                      {regimen === 'pequena' && "Provisión parcial (1/2 CTS, 1/2 Grati, EsSalud, 15d Vac.)"}
                      {regimen === 'micro' && "Provisión mínima (EsSalud, 15d Vac.)"}
                    </div>
                    <p className="text-xl font-bold text-white whitespace-nowrap ml-4">+ S/ {cargaSocial.toFixed(2)}</p>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 pt-2 border-t border-red-500/10">
                    Costo Real de Planilla: <strong className="text-white">S/ {costoRealPlanilla.toFixed(2)}</strong>
                  </p>
                </div>

                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 mb-8">
                  <h3 className="text-slate-400 text-sm font-medium mb-2">Utilidad Neta Real</h3>
                  <p className={`text-4xl font-black mb-2 ${utilidadReal > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    S/ {utilidadReal.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${margenNeto > 15 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {margenNeto.toFixed(1)}% Margen
                    </span>
                    <span className="text-xs text-slate-500">después de provisiones</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-slate-300 text-sm mb-4">
                    ¿Te sorprende el costo de tu planilla? Contáctanos para evaluar si calificas a un régimen laboral más económico y blindar tus finanzas.
                  </p>
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg">
                    Contactar a S&R Contadores
                  </button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}