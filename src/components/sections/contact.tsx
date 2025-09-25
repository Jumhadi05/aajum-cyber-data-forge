import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mari <span className="text-neon-glow">Terhubung</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Saya terbuka untuk diskusi, kolaborasi, atau peluang baru. Silakan hubungi saya.
            </p>
          </div>

          {/* Contact Card */}
          <Card className="card-cyber text-center">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8">Hubungi Saya</h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Email Button */}
                <Button 
                  className="btn-cyber text-base px-6 py-3 flex items-center gap-3"
                  onClick={() => window.open('mailto:ahmadjumhadi05@gmail.com')}
                >
                  <Mail className="w-5 h-5" />
                  Email
                </Button>

                {/* LinkedIn Button */}
                <Button 
                  className="btn-neon text-base px-6 py-3 flex items-center gap-3"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>

                {/* GitHub Button */}
                <Button 
                  variant="outline"
                  className="border-muted-foreground text-muted-foreground hover:border-primary hover:text-primary text-base px-6 py-3 flex items-center gap-3 transition-all duration-300 hover:shadow-cyber"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </div>

              {/* Direct Email Display */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground mb-2">Atau hubungi langsung ke:</p>
                <a 
                  href="mailto:ahmadjumhadi05@gmail.com"
                  className="text-primary hover:text-cyber-glow text-lg font-medium transition-colors"
                >
                  ahmadjumhadi05@gmail.com
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}