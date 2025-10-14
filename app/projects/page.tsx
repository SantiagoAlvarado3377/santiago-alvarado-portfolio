import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"

export const metadata = {
  title: "Projects - Santiago Alvarado",
  description: "A collection of my software development projects including web apps, games, and AI/ML applications.",
}

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((p) => p.category)))

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of my work spanning web development, game design, and AI/ML applications.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
          All Projects
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.slug} className="group flex flex-col transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-2">
                <Badge variant="secondary">{project.category}</Badge>
              </div>
              <CardTitle className="text-2xl">
                <Link href={`/projects/${project.slug}`} className="hover:text-primary">
                  {project.title}
                </Link>
              </CardTitle>
              <CardDescription className="text-pretty leading-relaxed">{project.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.stack.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.stack.length - 4} more
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild size="sm" variant="default" className="flex-1">
                <Link href={`/projects/${project.slug}`}>View Details</Link>
              </Button>
              {project.demoUrl && (
                <Button asChild size="sm" variant="outline">
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.repoUrl && (
                <Button asChild size="sm" variant="outline">
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
