
export const Electronics = () => {
  return (
    <section id="electronics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Electronică
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Arhitectură duală pentru performanță optimă și control precis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Raspberry Pi 4</h3>
            <p className="text-gray-300 mb-4">Unitatea principală de control</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Web server pentru interfață
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Gestionarea camerei video
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Control direct motoare prin GPIO
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Interfață utilizator responsive
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Arduino Uno</h3>
            <p className="text-gray-300 mb-4">Control servomotoare</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Motor & servo shield integrat
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Control precis al camerei
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Alimentare prin USB de la Pi
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">▸</span>
                Comunicare serială bidirecțională
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 p-8 rounded-xl border border-green-500/30">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6">Sistem de Alimentare</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-green-500/20 p-4 rounded-lg mb-4">
                <p className="text-green-400 font-bold text-lg">Raspberry Pi</p>
              </div>
              <p className="text-gray-300 text-sm">Baterie externă dedicată</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 p-4 rounded-lg mb-4">
                <p className="text-green-400 font-bold text-lg">Motor Controller</p>
              </div>
              <p className="text-gray-300 text-sm">12V direct (8x baterii AA)</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 p-4 rounded-lg mb-4">
                <p className="text-green-400 font-bold text-lg">Servomotoare</p>
              </div>
              <p className="text-gray-300 text-sm">5V prin regulator Pololu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
