
export const SoftwareSlide = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        Software
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Left Column - Architecture & Features */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-4 rounded-2xl border border-orange-500/40">
            <h3 className="text-xl font-bold text-orange-400 mb-3">Arhitectura Duală</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-orange-500 pl-3">
                <h4 className="text-base font-semibold text-gray-200 mb-1">Raspberry Pi 4</h4>
                <p className="text-gray-400 text-xs">Unitate principală - web server, cameră, interfață</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3">
                <h4 className="text-base font-semibold text-gray-200 mb-1">Arduino Uno</h4>
                <p className="text-gray-400 text-xs">Control servomotoare prin motor & servo shield</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-4 rounded-2xl border border-blue-500/40">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Funcționalități Web</h3>
            <ul className="space-y-1 text-xs text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-sm">▸</span>
                <span>Control robot prin W/A/S/D sau butoane tactile</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-sm">▸</span>
                <span>Control cameră prin săgeți (tastatură/butoane)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-sm">▸</span>
                <span>Transmisie flux video în timp real</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 text-sm">▸</span>
                <span>Recunoaștere facială pentru identificare</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Code Examples Side by Side */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-xl border border-orange-500/30">
              <h3 className="text-sm font-bold text-orange-400 mb-2">Flask Server</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/6931a9b2-a67b-475e-8dc9-522ab13a847c.png" 
                  alt="Python Flask Server Code" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-3 rounded-xl border border-purple-500/30">
              <h3 className="text-sm font-bold text-purple-400 mb-2">VideoCamera Class</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/f81493e6-e6e5-437d-ba0a-78bda76da9e9.png" 
                  alt="Python VideoCamera Class Code" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Communication */}
      <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-3 rounded-2xl border border-green-500/30">
        <h3 className="text-lg font-bold text-green-400 mb-3 text-center">Comunicare & Tehnologii</h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="space-y-1">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-lg">🔗</span>
            </div>
            <h4 className="text-xs font-bold text-green-400">Comunicare</h4>
            <p className="text-gray-300 text-xs">Pi-Arduino prin USB</p>
          </div>
          <div className="space-y-1">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-lg">📱</span>
            </div>
            <h4 className="text-xs font-bold text-blue-400">Interfață</h4>
            <p className="text-gray-300 text-xs">Responsivă (desktop & mobile)</p>
          </div>
          <div className="space-y-1">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-lg">🏗️</span>
            </div>
            <h4 className="text-xs font-bold text-orange-400">Structură</h4>
            <p className="text-gray-300 text-xs">Python (Pi) & C++ (Arduino)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
