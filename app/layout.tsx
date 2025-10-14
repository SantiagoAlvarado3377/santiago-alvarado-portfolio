import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Santiago Alvarado - CS Student & Software Developer",
  description:
    "Personal portfolio of Santiago Alvarado, a CS student at Sacramento State building practical software for data, automation, and human-centered experiences.",
  generator: "v0.app",
  keywords: [
    "Santiago Alvarado",
    "Software Developer",
    "CS Student",
    "Sacramento State",
    "Portfolio",
    "Web Development",
    "AI/ML",
  ],
  authors: [{ name: "Santiago Alvarado" }],
  openGraph: {
    title: "Santiago Alvarado - CS Student & Software Developer",
    description: "Personal portfolio showcasing projects in web development, data automation, and AI/ML",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
