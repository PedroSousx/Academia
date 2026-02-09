import { Dumbbell, Users, Clock, Trophy, Heart, Zap } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Equipamentos Modernos",
    description: "Aparelhos de última geração para todos os tipos de treino",
  },
  {
    icon: Users,
    title: "Personal Trainers",
    description: "Profissionais certificados para orientar sua evolução",
  },
  {
    icon: Clock,
    title: "Horário Flexível",
    description: "Aberto das 6h às 23h todos os dias da semana",
  },
  {
    icon: Trophy,
    title: "Resultados Garantidos",
    description: "Metodologia comprovada com acompanhamento constante",
  },
  {
    icon: Heart,
    title: "Avaliação Física",
    description: "Análise completa e personalizada do seu progresso",
  },
  {
    icon: Zap,
    title: "Treinos Intensivos",
    description: "HIIT, funcional, musculação e muito mais",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Por que escolher a <span className="text-primary">Power Gym?</span>
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            Tudo o que você precisa para alcançar seus objetivos fitness em um só lugar
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
