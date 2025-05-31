
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TitleSlide } from "./slides/TitleSlide";
import { AboutSlide } from "./slides/AboutSlide";
import { MechanicsSlide } from "./slides/MechanicsSlide";
import { ElectronicsSlide } from "./slides/ElectronicsSlide";
import { SoftwareSlide } from "./slides/SoftwareSlide";
import { ContactSlide } from "./slides/ContactSlide";

export const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: TitleSlide, title: "Crawler Robot" },
    { component: AboutSlide, title: "Despre Proiect" },
    { component: MechanicsSlide, title: "Mecanică" },
    { component: ElectronicsSlide, title: "Electronică" },
    { component: SoftwareSlide, title: "Software" },
    { component: ContactSlide, title: "Contact" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Slide Content */}
      <div className="h-screen flex items-center justify-center p-8">
        <CurrentSlideComponent />
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-orange-500 scale-125" 
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 text-gray-400 text-lg font-semibold">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Keyboard Navigation */}
      <div className="absolute inset-0" tabIndex={0} onKeyDown={(e) => {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
      }} />
    </div>
  );
};
