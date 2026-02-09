import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">✨ Sua transformação começa aqui</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Transforme seu corpo. <span className="text-primary">Supere seus limites.</span>
          </h1>

          <p className="mb-10 text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Academia completa com equipamentos de última geração, treinos personalizados e profissionais especializados
            prontos para guiar sua jornada fitness.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
              Agendar Aula Experimental
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-border bg-secondary hover:bg-secondary/80">
              Ver Planos
            </Button>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl">
          <img src="/modern-gym-interior.jpg" alt="Interior da academia" className="h-1/2 w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
