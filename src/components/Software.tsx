
export const Software = () => {
  return (
    <section id="software" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Software
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Arhitectură modulară în Python și C++ pentru control complet și performanță optimă
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Arhitectura Duală</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Raspberry Pi 4</h4>
                  <p className="text-gray-400">Unitate principală de control - web server, cameră, interfață</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-200 mb-2">Arduino Uno</h4>
                  <p className="text-gray-400">Control servomotoare prin motor & servo shield</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Flask Web Server</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">▸</span>
                  Control robot prin taste (W/A/S/D) sau butoane tactile
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">▸</span>
                  Control cameră prin săgeți (tastatură/butoane)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">▸</span>
                  Transmisie flux video în timp real
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">▸</span>
                  Recunoaștere facială pentru identificare persoane
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Codul Python - Flask Server</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/6931a9b2-a67b-475e-8dc9-522ab13a847c.png" 
                  alt="Python Flask Server Code" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Codul Python - VideoCamera Class</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/f81493e6-e6e5-437d-ba0a-78bda76da9e9.png" 
                  alt="Python VideoCamera Class Code" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Comunicare & Interfață</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Comunicare Pi-Arduino prin USB (asincron, bidirecțional)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Interfață responsivă (desktop & mobile)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Structură modulară Python (Pi) & C++ (Arduino)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
