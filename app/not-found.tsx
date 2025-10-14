"use client"

import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-4 text-6xl font-bold tracking-tight">404</h1>
        <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">Sorry, the page you're looking for doesn't exist or has been moved.</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
          <span>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </span>
        </Button>
      </div>

      <div className="mt-12">
        <p className="mb-4 text-sm text-muted-foreground">You might be interested in:</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">Blog</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/resume">Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
