
export const About = () => {
  const applications = [
    "Explorarea spațiilor afectate de dezastre naturale",
    "Inspecții industriale în locuri periculoase",
    "Cercetare științifică de teren",
    "Identificarea victimelor prin recunoaștere facială"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Utilitate Practică
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Robotul "Crawler" este conceput pentru a asista echipele de cercetare și intervenție 
            în zone periculoase sau greu accesibile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Caracteristici Cheie</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">▸</span>
                  Control de la distanță pentru siguranța operatorilor
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">▸</span>
                  Flux video live pentru inspecție în timp real
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">▸</span>
                  Acces în zone inaccesibile pentru oameni
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">▸</span>
                  Recunoaștere facială avansată
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Aplicații</h3>
            {applications.map((app, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 p-6 rounded-lg border-l-4 border-blue-500 hover:border-blue-400 transition-all duration-300 hover:bg-slate-800/50"
              >
                <p className="text-gray-300 font-medium">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
