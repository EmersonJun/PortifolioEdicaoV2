"use client"

import { Button } from "@/components/ui/button"
import { Play, Download } from "lucide-react"

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Editor de Vídeo
            <span className="gradient-text block">Criativo</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Transformo ideias em histórias visuais envolventes. Especializado em edição de vídeos para diversas
            plataformas e tipos de conteúdo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToPortfolio}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Portfólio
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToContact}>
              <Download className="mr-2 h-5 w-5" />
              Contratar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
