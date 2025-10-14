"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Github, Linkedin, FileText } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/SantiagoAlvarado3377", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/salvarado3377", icon: Linkedin },
  { name: "Resume", href: "/resume", icon: FileText },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-colors hover:text-primary"
          aria-label="Santiago Alvarado - Home"
        >
          Santiago Alvarado
        </Link>

        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <div className="hidden items-center gap-6 sm:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={item.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
