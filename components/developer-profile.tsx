"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProfileModeToggle } from "@/components/profile-mode-toggle"

export function DeveloperProfile() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="developer-profile space-y-12">
      {/* Introduction section */}
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/placeholder.jpeg"
              alt="Profile"
              fill
              priority
              className="rounded-full object-cover object-center shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="text-4xl font-semibold">Basanta Shrestha</h1>
          <h2 className="text-2xl font-light text-muted-foreground">AI/ML Developer & Python Programmer</h2>
          <div className="flex flex-wrap gap-2 my-4">
            {[
              "Python",
              "Machine Learning",
              "Deep Learning",
              "GNN",
              "PyTorch",
              "Scikit-learn",
              "Data Analysis",
              "Git",
            ].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-sm py-1">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-lg">
            Passionate AI/ML developer with expertise in building intelligent systems and data-driven solutions.
            Specialized in Graph Neural Networks and recommendation systems.
          </p>
          <div className="flex gap-4 mt-6">
            <Button variant="outline" size="icon">
              <a 
                href="https://github.com/basan-ta" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <a 
                href="https://np.linkedin.com/in/basanta-shrestha-144a43317" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-5 w-5" />
              <a href="mailto:basanta.shrestha008@gmail.com">
                <span className="sr-only">Email</span>
              </a>
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Mode Toggle - Added here */}
      <div className="flex justify-center">
        <ProfileModeToggle />
      </div>

      {/* Projects section */}
      <section id="projects" className="py-8">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="Movie Recommendation System"
            description="A recommendation system built using Graph Neural Networks (GNN) that provides personalized movie suggestions based on user preferences and behavior patterns."
            technologies={["PyTorch", "GNN", "SentenceTransformer", "Python"]}
            githubLink="#"
            paperLink="#"
          />
          <ProjectCard
            title="Sentiment Analysis Tool"
            description="An NLP-based tool that analyzes customer reviews and feedback to determine sentiment and extract key insights for business intelligence."
            technologies={["BERT", "Hugging Face", "Python", "Flask"]}
            githubLink="#"
          />
        </div>
      </section>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubLink?: string
  paperLink?: string
}

function ProjectCard({ title, description, technologies, githubLink, paperLink }: ProjectCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex gap-4">
        {githubLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        )}
        {paperLink && (
          <Button variant="outline" size="sm" asChild>
            <a href={paperLink} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Paper
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

