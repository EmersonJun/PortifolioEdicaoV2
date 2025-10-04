export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Mim</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou um editor de vídeo apaixonado por contar histórias através de imagens em movimento. Com experiência
                crescente na área, trabalho com diversos tipos de conteúdo, desde vídeos corporativos até conteúdo para
                redes sociais.
              </p>
              <p>
                Minha jornada começou com curiosidade e evoluiu para uma paixão genuína pela arte da edição. Estou
                sempre buscando aprender novas técnicas e me manter atualizado com as últimas tendências do mercado
                audiovisual.
              </p>
              <p>
                Acredito que cada projeto é único e merece uma abordagem personalizada para transmitir a mensagem
                desejada de forma impactante e memorável.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">🎬</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
