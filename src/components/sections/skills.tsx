import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain } from "lucide-react";

export function Skills() {
  const hardSkills = [
    "Data Analysis",
    "Cyber Security", 
    "SEO (Optimasi Mesin Pencari)",
    "IT Support",
    "Prompt Engineering"
  ];

  const softSkills = [
    "Problem-Solving",
    "Pemikiran Analitis",
    "Pemikiran Kritis", 
    "Komunikasi Teknis",
    "Adaptabilitas"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cyber-glow">Keahlian</span> & Kompetensi
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <Card className="card-cyber">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Code className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl text-cyber-glow">Hard Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hardSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 text-sm font-medium px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="card-cyber">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Brain className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl text-neon-glow">Soft Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <Badge 
                        variant="secondary" 
                        className="bg-accent/10 text-accent border-accent/20 text-sm font-medium px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}