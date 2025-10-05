"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("Todos")

  const projects = [
    {
      title: "Gameplay ",
      description: "Gameplay dinamica do jogo Peak feita pelo capcut.",
      category: "Gameplay",
      tools: ["CapCut", "Photoshop"],
      duration: "17min",
      thumbnail: "/marketing-campaign-video-thumbnail.jpg",
      link: "https://youtu.be/U9Jixy58boY",
    },
    {
      title: "Gameplay",
      description: "Gameplay dinamica do jogo Peak feita pelo premiere.",
      category: "Vlog",
      tools: ["Premiere Pro", "After Photoshop"],
      duration: "17min",
      thumbnail: "/travel-vlog-thumbnail.png",
      link: "https://youtu.be/5BIRlJO5tKg?si=vLf63itXMF2ctH_y",
    },
    {
      title: "Gameplay",
      description: "Gameplay dinamica do jogo Peak feita pelo premiere.",
      category: "Educação",
      tools: ["CapCut", "Photoshop"],
      duration: "6min",
      thumbnail: "/educational-tutorial-video-thumbnail.jpg",
      link: "https://youtu.be/uQWsNP_7kQQ?si=AhLVUDWfs57lszbE",
    },
    {
      title: "Apresentação Corporativa",
      description: "Vídeo institucional com motion graphics e identidade visual profissional.",
      category: "Corporativo",
      tools: ["Premiere Pro", "After Effects"],
      duration: "3min",
      thumbnail: "/corporate-presentation-video-thumbnail.jpg",
      link: "https://youtu.be/U9Jixy58boY",
    },
  ]

  const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))]

  const filteredProjects = selectedFilter === "Todos" ? projects : projects.filter((p) => p.category === selectedFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Portfólio de Projetos</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                setSelectedFilter(category)
                setShowAll(false)
              }}
              variant={selectedFilter === category ? "default" : "outline"}
              className={
                selectedFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-primary/10 hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary rounded-full p-3">
                    <Play className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-balance">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="flex justify-center mt-12">
            <Button onClick={() => setShowAll(!showAll)} size="lg" className="bg-primary hover:bg-primary/90">
              {showAll ? "Ler Menos" : "Mostrar Mais Projetos"}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
