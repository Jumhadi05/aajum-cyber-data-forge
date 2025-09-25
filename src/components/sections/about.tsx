import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang <span className="text-cyber-glow">Saya</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <Card className="card-cyber">
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Selamat datang di portofolio digital saya. Nama saya <span className="text-primary font-semibold">Ahmad Jumhadi</span>, 
                seorang profesional teknologi dengan minat mendalam pada persimpangan antara rekayasa prompt, 
                analisis data, dan keamanan siber.
              </p>
              
              <p className="text-muted-foreground">
                Perjalanan saya di dunia informatika, dari dukungan IT hingga sertifikasi di bidang ethical hacking dan SEO, 
                telah membentuk saya menjadi seorang pemecah masalah yang analitis dan kritis. Saya percaya bahwa 
                <span className="text-accent font-semibold"> data adalah kunci untuk membuka wawasan</span>, 
                sementara <span className="text-primary font-semibold">keamanan adalah fondasi yang melindunginya</span>.
              </p>
              
              <p className="text-muted-foreground">
                Saya bersemangat untuk mengeksplorasi bagaimana interaksi cerdas (prompting) dapat memaksimalkan 
                potensi keduanya untuk menciptakan solusi digital yang aman dan inovatif.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}