import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    {
      category: "Software de Edição",
      items: [
        { name: "CapCut", level: "Avançado" },
        { name: "Adobe Premiere Pro", level: "Intermediário" },
        { name: "After Effects", level: "Aprendendo" },
        { name: "Photoshop", level: "Intermediário" },
      ],
    },
    {
      category: "Especialidades",
      items: [
        { name: "Edição de Ritmo", level: "Avançado" },
        { name: "Correção de Cor", level: "Intermediário" },
        { name: "Motion Graphics", level: "Básico" },
        { name: "Áudio Sync", level: "Avançado" },
      ],
    },
    {
      category: "Tipos de Conteúdo",
      items: [
        { name: "Redes Sociais", level: "Avançado" },
        { name: "Vídeos Corporativos", level: "Intermediário" },
        { name: "Vlogs", level: "Avançado" },
        { name: "Tutoriais", level: "Intermediário" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avançado":
        return "bg-primary text-primary-foreground"
      case "Intermediário":
        return "bg-primary/70 text-primary-foreground"
      case "Básico":
      case "Aprendendo":
        return "bg-primary/40 text-primary-foreground"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Habilidades & Ferramentas</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 gradient-text">{skillGroup.category}</h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-foreground">{skill.name}</span>
                      <Badge className={getLevelColor(skill.level)}>{skill.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
