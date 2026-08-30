"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* Efectos de fondo para darle profundidad tecnológica */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>

      {/* Contenedor principal del Login */}
      <div className="w-full max-w-md relative z-10">
        
        {/* Cabecera del Login */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2 tracking-widest uppercase">
            S&R Contadores
          </h1>
          <h2 className="text-3xl font-extrabold text-white mb-3">Acceso VIP</h2>
          <p className="text-slate-400 text-sm">
            Ingresa tus credenciales para acceder a tu área financiera segura.
          </p>
        </div>

        {/* Caja del Formulario */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
          <form className="space-y-6">
            
            {/* Campo Correo */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">
                Correo Corporativo
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="gerencia@tuempresa.com"
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
                {/* Ícono decorativo */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                  ✉️
                </div>
              </div>
            </div>

            {/* Campo Contraseña */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-slate-400">
                  Contraseña
                </label>
                <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
                  ¿Olvidaste tu clave?
                </a>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-5 py-4 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                  🔒
                </div>
              </div>
            </div>

            {/* Botón de Acceso */}
            <button 
              type="button"
              onClick={() => window.location.href = '/portal'}
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 mt-4"
            >
              Ingresar al Portal Seguro
            </button>
            
          </form>

          {/* Sello de seguridad */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
              <span className="text-green-500">🛡️</span> Conexión cifrada de extremo a extremo
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}