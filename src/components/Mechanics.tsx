
export const Mechanics = () => {
  return (
    <section id="mechanics" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-slate-700/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mecanică
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Șasiu robust pe șenile cu design optimizat pentru manevrabilitate și durabilitate
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Sistem de Tracțiune</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Două motoare de 152 rpm
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Reductorare 2:1 pentru optimizare
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                304 rpm la roata de tracțiune
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Mișcare diferențială pentru rotire pe loc
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Structură</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Șasiu din aluminiu rezistent
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Carcasă din bond reciclat
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Design sustenabil și durabil
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Manevrabilitate ridicată
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Sistem Cameră</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Braț mobil pe două axe (pan/tilt)
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Servomotoare de precizie
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Suport articulat personalizat
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">▸</span>
                Design 3D în Fusion360
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-8 rounded-xl border border-blue-500/30">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Proces de Fabricație</h3>
          <p className="text-gray-300 leading-relaxed">
            Montarea componentelor interne pe placa inferioară s-a realizat folosind un sablon printat 3D 
            de 1 mm grosime, facilitând perforarea precisă a punctelor de montare. Proiectarea completă 
            a fost realizată 3D în Fusion360, iar componentele personalizate au fost create la imprimante 
            3D pentru un design compact și robust.
          </p>
        </div>
      </div>
    </section>
  );
};
