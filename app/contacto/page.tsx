'use client';

import { useState } from 'react';

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviando(true);

    // 1. Recolectamos toda la información que el cliente escribió
    const formData = new FormData(e.currentTarget);
    
    // 2. Aquí está tu llave exacta de Web3Forms
    formData.append("access_key", "65918121-dc19-4ff7-899c-a0ca1abeeaa2");

    try {
      // 3. El "cartero" hace el envío a tu Gmail
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setEnviado(true);
        // Limpiamos el formulario después de enviar
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setEnviado(false), 5000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un problema enviando el mensaje. Inténtalo de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto p-8 pt-20 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Inicia tu <span className="text-cyan-400">Transformación Financiera</span></h1>
        <p className="text-slate-400 text-lg">
          Detalla los requerimientos de tu empresa y uno de nuestros socios se comunicará contigo para una evaluación confidencial.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

        {enviado ? (
          <div className="text-center py-16 relative z-10">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-2xl font-bold text-white mb-2">Solicitud Recibida Exitosamente</h2>
            <p className="text-slate-400">Hemos recibido los datos de tu empresa. Uno de nuestros socios te contactará pronto.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            {/* Campo oculto para que el asunto del correo se vea profesional en tu Gmail */}
            <input type="hidden" name="subject" value="NUEVO CLIENTE POTENCIAL - S&R Contadores" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Nombre Completo</label>
                <input required type="text" name="Nombre" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Ej: Carlos Mendoza" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Empresa / Razón Social</label>
                <input required type="text" name="Empresa" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Ej: Inversiones SAC" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Correo Electrónico</label>
                <input required type="email" name="Correo" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="gerencia@empresa.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">Teléfono / Celular</label>
                <input required type="tel" name="Telefono" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="+51 999 999 999" />
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-800/50">
              <label className="text-sm font-semibold text-slate-300">¿En qué área requiere asistencia?</label>
              <select required defaultValue="" name="Servicio_Solicitado" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer">
                <option value="" disabled>Seleccione el servicio principal...</option>
                <option value="Outsourcing Contable Integral">Outsourcing Contable Integral</option>
                <option value="Gestión y Planeamiento Tributario">Gestión y Planeamiento Tributario</option>
                <option value="Asesoría Laboral y Planillas">Asesoría Laboral y Planillas</option>
                <option value="Regularización y Libros Contables">Regularización y Libros Contables</option>
                <option value="Consulta Específica / Auditoría">Consulta Específica / Auditoría</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">Detalles de su requerimiento</label>
              <textarea required rows={4} name="Mensaje" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Cuéntenos brevemente sobre la situación actual de su empresa..."></textarea>
            </div>

            <button type="submit" disabled={enviando} className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-cyan-900/30 transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed">
              {enviando ? 'Enviando solicitud...' : 'Enviar Solicitud de Asesoría'}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}