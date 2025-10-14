import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import { getProject, projects } from "@/lib/projects"
import Image from "next/image"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} - Santiago Alvarado`,
    description: project.excerpt,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Button */}
      <Button asChild variant="ghost" className="mb-8">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      {/* Project Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          <span className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            Last updated:{" "}
            {new Date(project.lastUpdated).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-xl text-muted-foreground">{project.excerpt}</p>
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex flex-wrap gap-4">
        {project.demoUrl && (
          <Button asChild size="lg">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Demo
            </Link>
          </Button>
        )}
        {project.repoUrl && (
          <Button asChild variant="outline" size="lg">
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View Source
            </Link>
          </Button>
        )}
      </div>

      {/* Project Image */}
      {project.images.length > 0 && (
        <div className="mb-8 overflow-hidden rounded-lg border border-border">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {/* Project Description */}
      <div className="prose prose-invert mb-8 max-w-none">
        {project.description.split("\n\n").map((paragraph, index) => (
          <p key={index} className="mb-4 leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-xl font-bold">Project Links</h2>
        <div className="flex flex-col gap-3">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-primary hover:underline"
            >
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
