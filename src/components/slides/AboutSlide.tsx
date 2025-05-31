
export const AboutSlide = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Despre Proiect
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">Misiunea</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Crawler-ul oferă control de la distanță și flux video live pentru explorarea 
              în siguranță a zonelor periculoase sau greu accesibile.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/30">
            <h3 className="text-3xl font-bold text-orange-400 mb-6">Aplicații</h3>
            <ul className="space-y-3 text-xl text-gray-300">
              <li className="flex items-center">
                <span className="text-orange-500 mr-4 text-2xl">•</span>
                Cercetare și salvare
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-4 text-2xl">•</span>
                Inspecții în spații înguste
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-4 text-2xl">•</span>
                Monitorizare zone periculoase
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-12 rounded-2xl border border-cyan-500/30">
          <h3 className="text-4xl font-bold text-cyan-400 mb-8 text-center">Caracteristici Cheie</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
              <span className="text-xl text-gray-200">Control remot prin interfață web</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-xl text-gray-200">Transmisie video în timp real</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-xl text-gray-200">Recunoaștere facială integrată</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-xl text-gray-200">Design robust și modular</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
