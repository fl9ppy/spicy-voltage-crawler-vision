
export const TitleSlide = () => {
  return (
    <div className="text-center max-w-6xl mx-auto animate-fade-in">
      <div className="mb-12">
        <h1 className="text-8xl md:text-9xl font-bold mb-8">
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
            Crawler
          </span>
        </h1>
        <h2 className="text-4xl md:text-5xl text-gray-300 mb-12 font-light">
          Robot de Cercetare și Intervenție
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-12"></div>
        <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          Conceput pentru asistența echipelor în zone periculoase sau greu accesibile
        </p>
      </div>
      
      <div className="text-xl text-orange-400 font-semibold animate-pulse">
        SpicyVoltage Team
      </div>
    </div>
  );
};
