
export const MechanicsSlide = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Mecanică
      </h2>
      
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Camera System */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/3bad8bb0-64c7-477f-86b4-0739cec453ca.png" 
              alt="Camera Pan-Tilt System 3D Design" 
              className="w-full h-48 object-contain bg-gray-900 rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Sistem Cameră Pan-Tilt</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-lg">▸</span>
              <span>Braț mobil pe două axe</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-lg">▸</span>
              <span>Servomotoare de precizie</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 text-lg">▸</span>
              <span>Design 3D în Fusion360</span>
            </li>
          </ul>
        </div>

        {/* Chassis Frame */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/5ac054fb-8bf4-41f9-9de5-cae917d4324b.png" 
              alt="Chassis Frame 3D Design" 
              className="w-full h-48 object-contain bg-gray-900 rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Șasiu & Structură</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3 text-lg">▸</span>
              <span>Șasiu din aluminiu rezistent</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3 text-lg">▸</span>
              <span>Carcasă din bond reciclat</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-3 text-lg">▸</span>
              <span>Design sustenabil</span>
            </li>
          </ul>
        </div>

        {/* Complete Assembly */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 hover:border-orange-500/50 transition-all duration-300">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/e9792911-b7f7-4f29-a69a-d513963a0523.png" 
              alt="Complete Robot Assembly 3D Design" 
              className="w-full h-48 object-contain bg-gray-900 rounded-lg"
            />
          </div>
          <h3 className="text-2xl font-bold text-orange-400 mb-4">Ansamblu Complet</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-lg">▸</span>
              <span>Integrare completă Pi + Arduino</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-lg">▸</span>
              <span>Baterii și electronică integrată</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-3 text-lg">▸</span>
              <span>Design compact și eficient</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border border-blue-500/40">
          <h3 className="text-3xl font-bold text-blue-400 mb-6">Sistem de Tracțiune</h3>
          <div className="space-y-4 text-lg text-gray-300">
            <div className="flex justify-between">
              <span>Motoare:</span>
              <span className="text-blue-400 font-semibold">2 × 152 rpm</span>
            </div>
            <div className="flex justify-between">
              <span>Reducție:</span>
              <span className="text-blue-400 font-semibold">2:1</span>
            </div>
            <div className="flex justify-between">
              <span>Viteză finală:</span>
              <span className="text-blue-400 font-semibold">304 rpm</span>
            </div>
            <div className="flex justify-between">
              <span>Tip mișcare:</span>
              <span className="text-blue-400 font-semibold">Diferențială</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 p-8 rounded-2xl border border-orange-500/40">
          <h3 className="text-3xl font-bold text-orange-400 mb-6">Proces de Fabricație</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Montarea componentelor folosind <span className="text-orange-400 font-semibold">sablon printat 3D</span> 
            pentru perforarea precisă. Proiectarea completă realizată în 
            <span className="text-orange-400 font-semibold"> Fusion360</span>, cu componente personalizate 
            create la imprimante 3D pentru un design <span className="text-orange-400 font-semibold">compact și robust</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
