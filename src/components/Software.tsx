
export const Software = () => {
  return (
    <section id="software" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Software
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Arhitectură modulară cu interfață web avansată și recunoaștere facială
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Python (Raspberry Pi)</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                Web server Flask pentru interfață
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                Streaming video în timp real
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                Algoritmi de recunoaștere facială
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                API pentru controlul robotului
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">C++ (Arduino)</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                Control în timp real al servomotoarelor
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                Comunicare serială cu Raspberry Pi
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                Algoritmi de poziționare precisă
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3">▸</span>
                Feedback în timp real
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-bold text-pink-400 mb-6">Interfață Web Avansată</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Control Robot</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Taste W/A/S/D pentru mișcare</li>
                  <li>• Butoane tactile pentru mobile</li>
                  <li>• Control în timp real</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Control Cameră</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Săgeți pentru orientare</li>
                  <li>• Butoane pan/tilt</li>
                  <li>• Flux video live HD</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 p-8 rounded-xl border border-pink-500/30">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">Recunoaștere Facială</h3>
            <p className="text-gray-300 leading-relaxed">
              Sistemul include algoritmi avansați de recunoaștere facială pentru identificarea persoanelor 
              aflate în medii cu vizibilitate scăzută sau risc major. Comunicarea dintre Raspberry Pi și 
              Arduino se realizează prin USB, asincron și bidirecțional, iar interfața este optimizată 
              pentru utilizare pe desktop și dispozitive mobile (responsive UI).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
