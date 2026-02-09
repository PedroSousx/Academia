import { Dumbbell, Instagram, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Dumbbell className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">POWER GYM</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sua academia completa para alcançar resultados extraordinários.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="transition-colors hover:text-foreground">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#plans" className="transition-colors hover:text-foreground">
                  Planos
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-foreground">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Horários</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 6h - 23h</li>
              <li>Sábado: 8h - 20h</li>
              <li>Domingo: 8h - 18h</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 Power Gym. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
