import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "R$ 99",
    period: "/mês",
    description: "Ideal para quem está começando",
    features: ["Acesso à musculação", "Acesso em horários livres", "Avaliação física inicial", "App de treinos"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "R$ 179",
    period: "/mês",
    description: "O mais completo para resultados máximos",
    features: [
      "Tudo do plano Básico",
      "Personal trainer 2x/semana",
      "Todas as aulas coletivas",
      "Nutricionista incluso",
      "Acesso prioritário",
      "Área VIP",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "R$ 299",
    period: "/mês",
    description: "Experiência exclusiva e personalizada",
    features: [
      "Tudo do plano Premium",
      "Personal trainer ilimitado",
      "Fisioterapeuta incluso",
      "Acesso 24h",
      "Treino outdoor",
      "Suplementação personalizada",
    ],
    highlighted: false,
  },
]

export function PlansSection() {
  return (
    <section id="plans" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Escolha seu <span className="text-primary">plano ideal</span>
          </h2>
          <p className="text-balance text-lg text-muted-foreground">
            Flexibilidade e benefícios para todos os perfis e objetivos
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border p-8 transition-all hover:shadow-2xl ${
                plan.highlighted
                  ? "border-primary bg-card shadow-xl shadow-primary/20 scale-105"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-primary px-4 py-1 text-xs font-bold text-primary-foreground rounded-bl-lg">
                  MAIS POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                Escolher Plano
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
