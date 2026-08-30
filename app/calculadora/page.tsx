"use client";
import { useState } from "react";

export default function CalculadoraPage() {
  // Estados de entrada
  const [ventas, setVentas] = useState<string>("");
  const [costosVariables, setCostosVariables] = useState<string>("");
  const [costosFijos, setCostosFijos] = useState<string>("");
  const [sueldoBase, setSueldoBase] = useState<string>("");
  
  // Nuevas variables estratégicas
  const [regimenLaboral, setRegimenLaboral] = useState<string>("general");
  const [regimenTributario, setRegimenTributario] = useState<string>("mype");
  const [asignacionFamiliar, setAsignacionFamiliar] = useState<boolean>(false);

  // Sanitización de datos (evita que la app se congele si hay comas o letras)
  const numVentas = Number(ventas.replace(/,/g, '')) || 0;
  const numCostosVar = Number(costosVariables.replace(/,/g, '')) || 0;
  const numCostosFijos = Number(costosFijos.replace(/,/g, '')) || 0;
  let baseSueldo = Number(sueldoBase.replace(/,/g, '')) || 0;

  // 1. CÁLCULO DE ASIGNACIÓN FAMILIAR (10% de la RMV actual en Perú: S/ 102.50)
  if (asignacionFamiliar && baseSueldo > 0) {
    baseSueldo += 102.50; 
  }

  // 2. LÓGICA LABORAL PERÚ (Multi-Régimen)
  const essalud = baseSueldo > 0 ? baseSueldo * 0.09 : 0; 
  let gratificaciones = 0;
  let cts = 0;
  let vacaciones = 0;

  if (baseSueldo > 0) {
    if (regimenLaboral === "general") {
      gratificaciones = baseSueldo * 0.1667; 
      cts = baseSueldo * 0.0972; 
      vacaciones = baseSueldo * 0.0833; 
    } else if (regimenLaboral === "pequena") {
      gratificaciones = baseSueldo * 0.0833; 
      cts = baseSueldo * 0.0417; 
      vacaciones = baseSueldo * 0.0417; 
    } else if (regimenLaboral === "micro") {
      vacaciones = baseSueldo * 0.0417; 
    }
  }
  
  const cargaSocial = essalud + gratificaciones + cts + vacaciones;
  const costoRealPlanilla = baseSueldo > 0 ? baseSueldo + cargaSocial : 0;
  
  // 3. UTILIDAD OPERATIVA
  const utilidadOperativa = numVentas - numCostosVar - numCostosFijos - costoRealPlanilla;

  // 4. LÓGICA TRIBUTARIA (Impuesto a la Renta Mensualizado Simplificado)
  let impuestoRenta = 0;
  if (utilidadOperativa > 0 && numVentas > 0) {
    if (regimenTributario === "mype") {
      impuestoRenta = utilidadOperativa * 0.10; // 10% tramo inicial
    } else if (regimenTributario === "general") {
      impuestoRenta = utilidadOperativa * 0.295; // 29.5% 
    } else if (regimenTributario === "especial") {
      impuestoRenta = numVentas * 0.015; // 1.5% de ingresos netos (RER)
    }
  }

  // 5. RESULTADO FINAL
  // Si es RER, el impuesto se resta de la utilidad operativa directamente.
  const utilidadNeta = utilidadOperativa - impuestoRenta;
  const margenNeto = numVentas > 0 ? (utilidadNeta / numVentas) * 100 : 0;

  // Validación robusta para mostrar resultados (si hay ventas o si hay planilla)
  const hasData = numVentas > 0 || baseSueldo > 0;

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
          Simula tus márgenes reales incluyendo el costo laboral exacto y el Impuesto a la Renta.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* PANEL DE INGRESO DE DATOS */}
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl space-y-6">
          <h2 className="text-2xl font-bold border-b border-slate-700 pb-4">Tus Números</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Ventas sin IGV (S/)</label>
              <input 
                type="text" 
                placeholder="Ej. 150000"
                value={ventas} 
                onChange={(e) => setVentas(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Costo de Ventas (S/)</label>
              <input 
                type="text" 
                placeholder="Ej. 7500"
                value={costosVariables} 
                onChange={(e) => setCostosVariables(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">Costos Fijos (Alquiler, luz) (S/)</label>
            <input 
              type="text" 
              placeholder="Ej. 2000"
              value={costosFijos} 
              onChange={(e) => setCostosFijos(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="pt-4 border-t border-slate-700">
            <h3 className="font-bold text-cyan-400 mb-4">Configuración Tributaria y Laboral</h3>
            
            <label className="block text-sm font-bold text-slate-300 mb-2">Régimen Tributario (Impuesto a la Renta)</label>
            <select 
              value={regimenTributario}
              onChange={(e) => setRegimenTributario(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold mb-4 focus:outline-none focus:border-cyan-400"
            >
              <option value="mype">MYPE Tributario (10% tramo inicial)</option>
              <option value="especial">Régimen Especial - RER (1.5% de Ingresos)</option>
              <option value="general">Régimen General (29.5%)</option>
            </select>

            <label className="block text-sm font-bold text-slate-300 mb-2">Sueldo Base de Planilla (S/)</label>
            <input 
              type="text" 
              placeholder="Ej. 1500"
              value={sueldoBase} 
              onChange={(e) => setSueldoBase(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold mb-4 focus:outline-none focus:border-blue-500"
            />
            
            <label className="block text-sm font-bold text-slate-300 mb-2">Régimen Laboral</label>
            <select 
              value={regimenLaboral}
              onChange={(e) => setRegimenLaboral(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950 border border-slate-600 rounded-xl text-white font-bold mb-4 focus:outline-none focus:border-blue-500"
            >
              <option value="general">General (CTS, Grati, Vacaciones, EsSalud)</option>
              <option value="pequena">Pequeña Empresa (50% beneficios)</option>
              <option value="micro">Microempresa (Solo vacaciones + EsSalud)</option>
            </select>

            <div className="flex items-center gap-3 bg-slate-950 p-4 rounded-xl border border-slate-600">
              <input 
                type="checkbox" 
                id="hijos"
                checked={asignacionFamiliar}
                onChange={(e) => setAsignacionFamiliar(e.target.checked)}
                className="w-5 h-5 accent-blue-500"
              />
              <label htmlFor="hijos" className="text-sm font-bold text-slate-300 cursor-pointer">
                El personal tiene hijos (Suma 10% RMV de Asignación Familiar)
              </label>
            </div>
          </div>
        </div>

        {/* PANEL DE RESULTADOS */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden flex flex-col justify-center">
          
          {!hasData ? (
            <div className="text-center opacity-50 relative z-10">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Esperando tus números...</h3>
              <p className="text-sm">Ingresa las ventas o los sueldos para comenzar el cálculo.</p>
            </div>
          ) : (
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Auditoría Financiera</h2>
              
              {/* Desglose Laboral */}
              {baseSueldo > 0 && (
                <div className="bg-slate-950 border border-blue-500/30 p-5 rounded-xl mb-4">
                  <h3 className="text-blue-400 text-sm font-bold mb-3 flex items-center justify-between">
                    <span>👥 Costo Real de Planilla</span>
                    <span className="text-white">S/ {costoRealPlanilla.toFixed(2)}</span>
                  </h3>
                  <div className="space-y-1 text-xs text-slate-400">
                    <p className="flex justify-between"><span>Sueldo Base computable:</span> <span>S/ {baseSueldo.toFixed(2)}</span></p>
                    <p className="flex justify-between"><span>EsSalud (9%):</span> <span>S/ {essalud.toFixed(2)}</span></p>
                    <p className="flex justify-between"><span>Provisión CTS:</span> <span>S/ {cts.toFixed(2)}</span></p>
                    <p className="flex justify-between"><span>Provisión Gratificaciones:</span> <span>S/ {gratificaciones.toFixed(2)}</span></p>
                    <p className="flex justify-between"><span>Provisión Vacaciones:</span> <span>S/ {vacaciones.toFixed(2)}</span></p>
                  </div>
                </div>
              )}

              {/* Desglose Tributario */}
              {numVentas > 0 && (
                <div className="bg-slate-950 border border-yellow-500/30 p-5 rounded-xl mb-6">
                  <h3 className="text-yellow-400 text-sm font-bold mb-2 flex items-center justify-between">
                    <span>🏛️ Impuesto a la Renta Proyectado</span>
                    <span className="text-white">- S/ {impuestoRenta.toFixed(2)}</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Cálculo basado en el Régimen {regimenTributario === 'mype' ? 'MYPE' : regimenTributario === 'especial' ? 'RER (1.5% Ventas)' : 'General (29.5%)'}.
                  </p>
                </div>
              )}

              {/* Utilidad Neta Final */}
              <div className="bg-green-500/10 p-6 rounded-xl border border-green-500/30 mb-8 text-center">
                <h3 className="text-green-400 text-sm font-bold mb-2">Utilidad Neta Real</h3>
                <p className={`text-4xl font-black mb-2 ${utilidadNeta > 0 ? 'text-white' : 'text-red-400'}`}>
                  S/ {utilidadNeta.toFixed(2)}
                </p>
                <div className="inline-block px-3 py-1 bg-slate-950 rounded-full text-xs font-bold text-slate-300">
                  Margen: {margenNeto.toFixed(2)}%
                </div>
              </div>

              <div className="text-center">
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg">
                  Agendar Asesoría con S&R
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}