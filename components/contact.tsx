import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Instagram, Youtube } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Vamos Trabalhar Juntos?</h2>

        <p className="text-xl text-muted-foreground mb-12 text-balance">
          Estou sempre aberto a novos projetos e colaborações. Entre em contato para discutirmos sua próxima produção
          audiovisual.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Para orçamentos e projetos profissionais</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="mailto:contato@videoeditor.com">emersonnjunior2006@gmail.com.com</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Para conversas rápidas e dúvidas</p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  +55 (41) 98728-3543
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Instagram className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Youtube className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Mail className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 VideoEditor. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  )
}
