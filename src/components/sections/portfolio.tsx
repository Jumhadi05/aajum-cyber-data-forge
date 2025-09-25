import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Search, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

function ProjectCard({ title, description, skills, icon }: ProjectCardProps) {
  return (
    <Card className="card-cyber group">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <CardTitle className="text-xl group-hover:text-cyber-glow transition-colors">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Portfolio() {
  const projects = [
    {
      title: "Ethical Hacking & Penetration Testing",
      description: "Simulasi pengujian keamanan pada sistem untuk mengidentifikasi dan menambal kerentanan. Berdasarkan sertifikasi dari Course net.",
      skills: ["Cybersecurity", "Penetration Testing", "Vulnerability Assessment"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Membangun Aset Digital melalui SEO",
      description: "Studi kasus tentang bagaimana riset kata kunci dan optimasi SEO digunakan untuk membangun dan meningkatkan visibilitas aset digital. Berdasarkan sertifikasi dari Niagahoster.",
      skills: ["SEO", "Digital Marketing", "Content Strategy"],
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Analisis Data untuk Visualisasi Insight",
      description: "Proyek analisis kumpulan data untuk menemukan pola dan tren, kemudian mengubahnya menjadi visualisasi yang mudah dipahami. Berdasarkan sertifikasi dari karier.mu.",
      skills: ["Data Analysis", "Data Visualization", "Critical Thinking"],
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proyek <span className="text-neon-glow">Portofolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
              Eksplorasi mendalam dalam dunia keamanan siber, analisis data, dan optimasi digital
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`fade-in delay-${(index + 1) * 100}`}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}