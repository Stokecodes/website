"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Autonomous Drone Navigation System",
    description:
      "Developed an AI-powered navigation system for autonomous drones using computer vision and machine learning algorithms.",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"],
    date: "2024",
    category: "Autonomous Systems",
    image: "/autonomous-drone-flying-over-landscape.jpg",
    slug: "autonomous-drone-navigation",
  },
  {
    id: 2,
    title: "Rocket Engine Performance Analyzer",
    description:
      "Built a comprehensive analysis tool for rocket engine performance optimization using computational fluid dynamics.",
    technologies: ["MATLAB", "ANSYS Fluent", "Python", "CFD"],
    date: "2024",
    category: "Propulsion",
    image: "/rocket-engine-test-firing-with-flames.jpg",
    slug: "rocket-engine-analyzer",
  },
  {
    id: 3,
    title: "Satellite Orbit Prediction Model",
    description:
      "Created a machine learning model to predict satellite orbital decay and collision probability with space debris.",
    technologies: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
    date: "2023",
    category: "Orbital Mechanics",
    image: "/satellite-orbiting-earth-with-space-debris.jpg",
    slug: "satellite-orbit-prediction",
  },
  {
    id: 4,
    title: "Wind Tunnel Data Visualization",
    description:
      "Developed an interactive dashboard for analyzing and visualizing wind tunnel test data for aircraft design optimization.",
    technologies: ["React", "D3.js", "Python", "Flask"],
    date: "2023",
    category: "Aerodynamics",
    image: "/wind-tunnel-testing-aircraft-model-with-airflow-vi.jpg",
    slug: "wind-tunnel-visualization",
  },
  {
    id: 5,
    title: "Mars Rover Path Planning Algorithm",
    description:
      "Implemented advanced pathfinding algorithms for Mars rover navigation considering terrain difficulty and energy efficiency.",
    technologies: ["C++", "ROS", "Gazebo", "OpenCV"],
    date: "2023",
    category: "Robotics",
    image: "/mars-rover-on-red-planet-surface-with-rocky-terrai.jpg",
    slug: "mars-rover-pathfinding",
  },
  {
    id: 6,
    title: "Aircraft Wing Stress Analysis",
    description:
      "Performed finite element analysis on aircraft wing structures to optimize weight while maintaining structural integrity.",
    technologies: ["ANSYS", "SolidWorks", "MATLAB", "FEA"],
    date: "2022",
    category: "Structural Analysis",
    image: "/aircraft-wing-structural-analysis-with-stress-visu.jpg",
    slug: "wing-stress-analysis",
  },
  {
    id: 7,
    title: "Hypersonic Vehicle Heat Shield Design",
    description:
      "Designed and simulated thermal protection systems for hypersonic vehicles using advanced materials and cooling techniques.",
    technologies: ["ANSYS Thermal", "Python", "CAD", "Materials Science"],
    date: "2022",
    category: "Thermal Systems",
    image: "/hypersonic-vehicle-with-glowing-heat-shield-during.jpg",
    slug: "hypersonic-heat-shield",
  },
  {
    id: 8,
    title: "Space Debris Tracking System",
    description:
      "Built a real-time tracking system for space debris using radar data and predictive algorithms to prevent satellite collisions.",
    technologies: ["Python", "TensorFlow", "Radar Processing", "Real-time Systems"],
    date: "2022",
    category: "Space Situational Awareness",
    image: "/space-debris-tracking-visualization-with-satellite.jpg",
    slug: "space-debris-tracking",
  },
]

export function ProjectTimeline() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my aerospace engineering projects spanning autonomous systems, propulsion, orbital mechanics, and
            more.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5" />

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 md:transform md:-translate-x-2" />

                {/* Project Card */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <Card
                    className={`transition-all duration-300 hover:shadow-lg ${
                      hoveredProject === project.id ? "scale-105 shadow-xl" : ""
                    }`}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-balance">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4 text-pretty">{project.description}</CardDescription>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/projects/${project.slug}`}>
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Year Label for larger screens */}
                <div
                  className={`hidden md:block absolute top-0 ${
                    index % 2 === 0 ? "right-0 pr-4" : "left-0 pl-4"
                  } text-6xl font-bold text-muted/20`}
                >
                  {project.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
