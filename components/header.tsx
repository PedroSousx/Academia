import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Dumbbell className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">POWER GYM</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Funcionalidades
          </a>
          <a
            href="#plans"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Planos
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Entrar
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Começar Agora</Button>
        </div>
      </div>
    </header>
  )
}
