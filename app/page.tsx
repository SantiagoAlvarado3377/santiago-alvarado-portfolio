import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { AskGeminiButton } from "@/components/ask-gemini-button"

const featuredProjects = [
  {
    title: "Roomies",
    slug: "roomies",
    excerpt: "Roommate-matching and blog platform for Sacramento State students",
    stack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    category: "Web App",
    repoUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
  {
    title: "Professor Toad",
    slug: "professor-toad",
    excerpt: "Educational game for City of Davis teaching environmental concepts",
    stack: ["Unity", "C#", "Game Design"],
    category: "Game Development",
    repoUrl: "https://github.com",
  },
  {
    title: "Resume Screener",
    slug: "resume-screener",
    excerpt: "AI-powered resume triage system using NLP and machine learning",
    stack: ["Python", "spaCy", "BERT", "FastAPI"],
    category: "AI/ML",
    repoUrl: "https://github.com",
    demoUrl: "https://demo.com",
  },
]

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-20 flex min-h-[60vh] flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Santiago Alvarado
            </span>
          </h1>
          <p className="mb-4 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A CS student at Sacramento State building practical software for data, automation, and human-centered
            experiences.
          </p>
          <p className="mb-8 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I've worked on web apps, data automation, game/edtech, and applied AI/ML. Previously at Symbotic, World
            Relief, and Disney.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume">Download Resume</Link>
            </Button>
          </div>
        </div>

        {/* Ask Gemini Button - Floating */}
        <div className="mt-12">
          <AskGeminiButton />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-muted-foreground">A selection of my recent work</p>
          </div>
          <Button asChild variant="ghost">
            <Link href="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="group flex flex-col transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">{project.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.demoUrl && (
                  <Button asChild size="sm" variant="default" className="flex-1">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section>
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Want to learn more?</h2>
          <p className="mb-6 text-muted-foreground">
            Explore my blog posts, check out all my projects, or get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/blog">Read Blog</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">All Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/resume">View Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
