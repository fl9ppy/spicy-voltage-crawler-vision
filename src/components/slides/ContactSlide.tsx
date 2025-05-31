
export const ContactSlide = () => {
  return (
    <div className="max-w-4xl mx-auto text-center animate-fade-in">
      <h2 className="text-6xl font-bold mb-12 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
        SpicyVoltage
      </h2>
      
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-12 rounded-3xl border border-orange-500/30 mb-12">
        <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
          Robotul Crawler reprezintă viitorul tehnologiei de cercetare și intervenție, 
          oferind soluții inovatoare pentru provocările moderne.
        </p>
        
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
        
        <a 
          href="https://github.com/fl9ppy/crawler.git" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-gray-500/25"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
          <span>Vezi Codul pe GitHub</span>
        </a>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-slate-800/30 p-6 rounded-2xl border border-blue-500/20">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-blue-400 mb-2">Misiune</h3>
          <p className="text-gray-400">Inovație în robotică pentru siguranța echipelor</p>
        </div>
        <div className="bg-slate-800/30 p-6 rounded-2xl border border-green-500/20">
          <div className="text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-bold text-green-400 mb-2">Tehnologie</h3>
          <p className="text-gray-400">Integrare avansată hardware & software</p>
        </div>
        <div className="bg-slate-800/30 p-6 rounded-2xl border border-orange-500/20">
          <div className="text-4xl mb-4">🏆</div>
          <h3 className="text-xl font-bold text-orange-400 mb-2">Viitor</h3>
          <p className="text-gray-400">Soluții pentru provocările de mâine</p>
        </div>
      </div>
      
      <div className="mt-12 text-gray-500 text-lg">
        © 2024 SpicyVoltage - Crawler Robot Project
      </div>
    </div>
  );
};
