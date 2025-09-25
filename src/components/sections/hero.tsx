import { TypingText } from "@/components/ui/typing-text";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles background */}
      <div className="particles-bg" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 fade-in">
            <div className="relative inline-block">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-cyber">
                <img 
                  src={profilePhoto} 
                  alt="Ahmad Jumhadi Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in delay-200">
            <span className="text-cyber-glow">Ahmad</span>{" "}
            <span className="text-neon-glow">Jumhadi</span>
          </h1>

          {/* Typing Title */}
          <div className="text-2xl md:text-3xl mb-8 fade-in delay-300">
            <TypingText 
              text="Prompt Engineer | Cyber & Data Analyst"
              speed={80}
              className="text-muted-foreground"
            />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 fade-in delay-400">
            Merancang prompt cerdas dan mengamankan lanskap digital melalui analisis data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in delay-500">
            <Button className="btn-cyber text-lg px-8 py-4">
              Lihat Portfolio
            </Button>
            <Button className="btn-neon text-lg px-8 py-4">
              Hubungi Saya
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}