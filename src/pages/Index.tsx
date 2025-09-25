import { Navbar } from "@/components/navigation/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Portfolio } from "@/components/sections/portfolio";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
