"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Download, BookOpen, GraduationCap, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AcademicProfile() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="author-profile hidden space-y-12">
      <section className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Academic Profile"
              fill
              className="rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 space-y-4">
          <h1 className="text-4xl font-semibold">Basanta Shrestha</h1>
          <h2 className="text-2xl font-light text-muted-foreground">Author & Researcher</h2>
          <p className="text-lg">
            Researcher with a focus on Machine Learnining and electronics. Passionate about teaching and sharing
            knowledge in AI, Robotics, and Microcontroller programming.
          </p>
          <div className="flex gap-4 mt-6">
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      <section id="education" className="py-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <GraduationCap className="mr-3 h-6 w-6" />
          Education
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Bachelor's in Electronics, Communication adn Information Engineering</CardTitle>
            <CardDescription>IOE, Purwanchal Campus, Dharan</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Graduated with honors, focusing on communication systems and information technology.</p>
          </CardContent>
        </Card>
      </section>

      <section id="research" className="py-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <BookOpen className="mr-3 h-6 w-6" />
          Research
        </h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Published Research</CardTitle>
            <CardDescription>Machine Learning, Communication Systems</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Published research paper on Navigation of Mobile Robot with Nav2 and SLAM Using LiDAR.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a 
                href="https://ieeexplore.ieee.org/document/10933029" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Publication
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section id="projects" className="py-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <FileText className="mr-3 h-6 w-6" />
          Academic Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Major Project: GNN-based Recommendation System</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["GNN", "PyTorch", "Machine Learning"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Developed a recommendation system using Graph Neural Networks that analyzes user behavior and content
                relationships to provide personalized recommendations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Minor Project: Navigation of Mobile Robot with Nav2 and SLAM Using LiDAR</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["IoT", "Arduino", "Sensors", "Data Analysis"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
             we explored ROS2, AI and Behavior Trees, Nav2, and SLAM, diving deep into how robots autonomously navigate and map unexplored environments. From assembling the hardware to programming its intelligence, we built our robot entirely from scratch, making the experience even more rewarding.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="teaching" className="py-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Users className="mr-3 h-6 w-6" />
          Teaching & Training
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Conducted workshops and courses on artificial intelligence fundamentals, machine learning algorithms,
                and practical applications.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Robotics Trainer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Conducted hands-on training sessions on robotics programming, sensor integration, and autonomous systems</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Microcontroller Trainer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Taught programming and interfacing of microcontrollers for embedded systems and IoT applications.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

