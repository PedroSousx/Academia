import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-linear-to-br from-primary/20 via-background to-background p-12 md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent opacity-50" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Pronto para começar sua <span className="text-primary">transformação?</span>
            </h2>
            <p className="mb-8 text-balance text-lg leading-relaxed text-muted-foreground">
              Agende sua aula experimental gratuita e conheça nossa estrutura. Sem compromisso, sem taxas escondidas.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
                Agendar Agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-border bg-secondary hover:bg-secondary/80">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
