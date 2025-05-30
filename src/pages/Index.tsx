
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Mechanics } from "@/components/Mechanics";
import { Electronics } from "@/components/Electronics";
import { Software } from "@/components/Software";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Mechanics />
      <Electronics />
      <Software />
      <Footer />
    </div>
  );
};

export default Index;
