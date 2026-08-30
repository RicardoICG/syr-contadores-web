"use client"; // Esta línea es obligatoria para dar interactividad a la App Web

import { useState } from "react";

export default function Home() {
  // LÓGICA DE LA APLICACIÓN WEB (Estados)
  const [step, setStep] = useState(0); // 0 = Inicio, 1-4 = Preguntas, 5 = Formulario Final
  const [riskScore, setRiskScore] = useState(0);

  const questions = [
    {
      question: "¿Cuentas con personal que emite recibos por honorarios todos los meses cumpliendo un horario fijo?",
      riskIfYes: 30, // Riesgo alto laboral (SUNAFIL)
    },
    {
      question: "¿Tus compras y gastos declarados mensualmente suelen ser mayores a tus ventas facturadas?",
      riskIfYes: 30, // Riesgo de inconsistencia (SUNAT)
    },
    {
      question: "¿Tienes notificaciones o esquelas sin responder en tu buzón electrónico SOL?",
      riskIfYes: 20, // Riesgo tributario inminente
    },
    {
      question: "¿Proyectas mensualmente el costo real de tu planilla (CTS, gratificaciones, EsSalud) en tus flujos de caja?",
      riskIfNo: 20, // Riesgo financiero (Especialidad de Sheila)
    }
  ];

  // Función para avanzar en el test
  const handleAnswer = (answerIsYes: boolean) => {
    const currentQ = questions[step - 1];
    
    // Sumar riesgo según la respuesta
    if (answerIsYes && currentQ.riskIfYes) setRiskScore(riskScore + currentQ.riskIfYes);
    if (!answerIsYes && currentQ.riskIfNo) setRiskScore(riskScore + currentQ.riskIfNo);

    // Pasar a la siguiente fase
    setStep(step + 1);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans relative pb-20 md:pb-0">
      
      {/* SECCIÓN 1: HERO */}
      <section className="flex flex-col items-center justify-center text-center p-6 min-h-[80vh]">
        <div className="max-w-4xl space-y-8 mt-12">
          <p className="text-blue-400 font-bold tracking-widest text-sm md:text-base uppercase">
            S&R Contadores | Outsourcing Contable, Tributario y Laboral
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            Crece tu negocio. <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Nosotros nos encargamos de SUNAT y tus planillas.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Blindamos tu empresa contra multas y contingencias. Mantenemos tu contabilidad al día, optimizamos tu carga fiscal y gestionamos tus recursos humanos sin errores para que tú te enfoques en operar.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => {
                document.getElementById('test-riesgo')?.scrollIntoView({ behavior: 'smooth' });
                setStep(1);
              }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all text-lg shadow-lg shadow-blue-500/30"
            >
              Auditar mi empresa gratis
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: NUESTROS PILARES (Ocultamos el código aquí por brevedad, es el mismo de antes) */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluciones Integrales para MYPES</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Combinamos tecnología de punta con experiencia financiera y laboral para que tu empresa opere como una gran corporación.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="text-blue-400 text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Defensa Tributaria</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Prevención de auditorías, atención de esquelas de SUNAT, planeamiento fiscal para evitar contingencias.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors">
              <div className="text-cyan-400 text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-3">Contabilidad & ERPs</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Libros electrónicos, estados financieros e integración con software de gestión para que tu data fluya sin errores.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-purple-400 transition-colors">
              <div className="text-purple-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Laboral & Finanzas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Elaboración de planillas, PLAME, prevención ante SUNAFIL y reportes financieros exactos para decisiones rentables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: LA APP WEB (Termómetro Interactivo) */}
      <section id="test-riesgo" className="py-24 px-6 bg-slate-900 relative">
        <div className="max-w-3xl mx-auto bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>
          
          {/* ESTADO 0: INVITACIÓN */}
          {step === 0 && (
            <div className="relative z-10 text-center animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Termómetro de Riesgo Empresarial</h2>
              <p className="text-slate-300 mb-8 text-lg">
                ¿Estás en la mira de SUNAT o SUNAFIL? Responde 4 preguntas y descubre el nivel de riesgo real de tu MYPE.
              </p>
              <button 
                onClick={() => setStep(1)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25"
              >
                Iniciar Diagnóstico Gratuito
              </button>
            </div>
          )}

          {/* ESTADOS 1 al 4: PREGUNTAS INTERACTIVAS */}
          {step > 0 && step <= questions.length && (
            <div className="relative z-10 text-center animate-fade-in">
              <p className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm">
                Pregunta {step} de {questions.length}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-10 min-h-[80px]">
                {questions[step - 1].question}
              </h3>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => handleAnswer(true)}
                  className="px-10 py-4 bg-slate-700 hover:bg-red-500/20 hover:border-red-500 border border-transparent rounded-xl transition-all font-bold text-lg"
                >
                  Sí
                </button>
                <button 
                  onClick={() => handleAnswer(false)}
                  className="px-10 py-4 bg-slate-700 hover:bg-green-500/20 hover:border-green-500 border border-transparent rounded-xl transition-all font-bold text-lg"
                >
                  No
                </button>
              </div>
            </div>
          )}

          {/* ESTADO 5: RESULTADO Y CAPTURA DE DATOS */}
          {step > questions.length && (
            <div className="relative z-10 text-center animate-fade-in">
              <h3 className="text-3xl font-bold mb-2">Diagnóstico Completado</h3>
              
              {/* Barra de progreso visual del riesgo */}
              <div className="w-full bg-slate-700 h-4 rounded-full mt-6 mb-2 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${riskScore > 50 ? 'bg-red-500' : riskScore > 20 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{ width: `${Math.max(riskScore, 10)}%` }}
                ></div>
              </div>
              <p className="text-slate-400 text-sm mb-8">Nivel de contingencia detectado: {riskScore > 50 ? 'ALTO' : riskScore > 20 ? 'MEDIO' : 'BAJO'}</p>
              
              <p className="text-slate-200 mb-6 text-lg max-w-xl mx-auto">
                Hemos preparado un reporte detallado con las acciones preventivas que debes tomar para blindar tu negocio. Ingresa tus datos para desbloquearlo al instante.
              </p>
              
              <form className="max-w-md mx-auto space-y-4">
                <input type="text" placeholder="Tu Nombre o Empresa" className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-slate-600 focus:border-blue-500 outline-none" required />
                <input type="email" placeholder="Correo electrónico" className="w-full px-5 py-3 rounded-xl bg-slate-900 border border-slate-600 focus:border-blue-500 outline-none" required />
                <button type="button" className="w-full py-4 mt-2 bg-blue-600 hover:bg-blue-500 font-bold rounded-xl transition-all">
                  Desbloquear mi reporte
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 px-6 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 S&R Contadores. Ricardo Cervantes & Sheila Pucho. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}