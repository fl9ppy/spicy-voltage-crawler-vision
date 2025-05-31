
export const ElectronicsSlide = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
        Electronică
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Hardware Components */}
        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
            <h3 className="text-3xl font-bold text-green-400 mb-6">Raspberry Pi 4</h3>
            <ul className="space-y-3 text-xl text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-4">▸</span>
                Unitate principală de control
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-4">▸</span>
                Camera Pi pentru video live
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-4">▸</span>
                Web server Flask integrat
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-4">▸</span>
                Recunoaștere facială OpenCV
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-3xl font-bold text-blue-400 mb-6">Arduino Uno</h3>
            <ul className="space-y-3 text-xl text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-4">▸</span>
                Control servomotoare precise
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-4">▸</span>
                Motor & Servo Shield
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-4">▸</span>
                Interfață cu motoarele DC
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-4">▸</span>
                Comunicare USB cu Pi
              </li>
            </ul>
          </div>
        </div>

        {/* System Architecture */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-12 rounded-2xl border border-purple-500/30">
          <h3 className="text-4xl font-bold text-purple-400 mb-8 text-center">Arhitectura Sistemului</h3>
          
          <div className="space-y-6">
            <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/40">
              <h4 className="text-2xl font-bold text-green-400 mb-3">Raspberry Pi</h4>
              <div className="text-lg text-gray-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Web Server + Video Stream</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Interfață de Control</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-px h-8 bg-gray-500 mx-auto mb-2"></div>
              <span className="text-gray-400 text-lg">USB Communication</span>
              <div className="w-px h-8 bg-gray-500 mx-auto mt-2"></div>
            </div>
            
            <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/40">
              <h4 className="text-2xl font-bold text-blue-400 mb-3">Arduino Uno</h4>
              <div className="text-lg text-gray-300">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span>Motor Control</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span>Servo Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-2xl border border-orange-500/30">
        <h3 className="text-3xl font-bold text-orange-400 mb-6 text-center">Alimentare și Autonomie</h3>
        <div className="grid md:grid-cols-3 gap-6 text-xl text-gray-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">⚡</span>
            </div>
            <p>Baterii reîncărcabile Li-Ion</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">🔋</span>
            </div>
            <p>Autonomie extinsă pentru misiuni</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">⚙️</span>
            </div>
            <p>Management inteligent al energiei</p>
          </div>
        </div>
      </div>
    </div>
  );
};
