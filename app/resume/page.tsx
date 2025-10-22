import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, MapPin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Resume - Santiago Alvarado",
  description: "Professional resume and experience of Santiago Alvarado, CS student and software developer.",
}

const experience = [
  {
    company: "Symbotic",
    role: "Software Engineering Intern",
    location: "Remote",
    period: "Summer 2023",
    description:
      "Worked on warehouse automation systems, developing real-time coordination software for robotic systems. Implemented fault-tolerant design patterns and improved system observability.",
    technologies: ["Java", "Microservices", "Kubernetes", "Real-time Systems"],
  },
  {
    company: "Disney",
    role: "Software Development Intern",
    location: "Orlando, FL",
    period: "Summer 2025",
    description:
      "Supported safe daily operation of 12 monorail trains across 7 stations, managing automated power systems and reducing startup time by 15% through improved procedural sequencing. Collaborated with maintenance and control engineers to monitor real-time system diagnostics, identifying and reporting irregularities that improved uptime reliability by ~10%. Designed and implemented data logging scripts (Python) to track operational efficiency and flag anomalies during station power cycles.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },
  {
    company: "World Relief",
    role: "IT Intern",
    location: "Sacramento, CA",
    period: "2024 - 2025",
    description:
      "Developed an inventory management program that improved tracking efficiency for company assets, reducing manual entry time by 30%. Designed a password-recovery tool to securely regain access to locked systems, cutting downtime for affected employees by 40%. Imaged, wiped, and configured 25+ computers for new and existing employees, ensuring quick and secure onboarding. Troubleshot and resolved 50+ IT support tickets, ranging from hardware malfunctions to software issues, improving overall technical support response.",
    technologies: ["Python", "Django", "PostgreSQL", "React"],
  },
]

const education = {
  school: "California State University, Sacramento",
  degree: "Bachelor of Science in Computer Science",
  period: "2022 - Present",
  gpa: "3.5 / 4.0",
  relevant: ["Data Structures & Algorithms", "Machine Learning", "Software Engineering", "Database Systems"],
}

const skills = {
  "Web Development": ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
  "AI/ML": ["Python", "PyTorch", "TensorFlow", "spaCy", "BERT", "scikit-learn", "OpenCV"],
  "Game Development": ["Unity", "C#", "Game Design"],
  Tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
}

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="mb-2 text-4xl font-bold tracking-tight">Santiago Alvarado</h1>
            <p className="text-lg text-muted-foreground">Computer Science Student & Software Developer</p>
          </div>
          <Button size="lg" asChild>
            <Link href="/santiago-alvarado-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            Sacramento, CA
          </span>
          <span className="flex items-center">
            <Mail className="mr-1 h-4 w-4" />
            santiago@example.com
          </span>
          <span className="flex items-center">
            <Phone className="mr-1 h-4 w-4" />
            (555) 123-4567
          </span>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-muted-foreground">
              CS student at Sacramento State with experience building practical software for data automation, web
              applications, and AI/ML. Previously worked at Symbotic, Disney, and World Relief, developing systems that
              prioritize scalability, accessibility, and user experience. Passionate about creating technology that
              solves real problems and makes a positive impact.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Experience</h2>
        <div className="space-y-6">
          {experience.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <CardTitle className="text-xl">{job.role}</CardTitle>
                    <CardDescription className="mt-1 text-base">
                      {job.company} • {job.location}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 leading-relaxed text-muted-foreground">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Education</h2>
        <Card>
          <CardHeader>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <CardTitle className="text-xl">{education.degree}</CardTitle>
                <CardDescription className="mt-1 text-base">{education.school}</CardDescription>
              </div>
              <Badge variant="secondary" className="w-fit">
                {education.period}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">GPA: {education.gpa}</p>
            <div>
              <p className="mb-2 text-sm font-medium">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {education.relevant.map((course) => (
                  <Badge key={course} variant="outline" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Link */}
      <section>
        <Card className="bg-card/50">
          <CardContent className="flex flex-col items-center justify-between gap-4 p-6 sm:flex-row">
            <div>
              <h3 className="mb-1 text-lg font-semibold">View My Projects</h3>
              <p className="text-sm text-muted-foreground">
                Check out my portfolio to see detailed project descriptions and live demos.
              </p>
            </div>
            <Button asChild>
              <Link href="/projects">
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
