import { MobileNav } from "@/components/mobile-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"

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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <MobileNav />

      {/* Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">All Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive collection of my aerospace engineering projects, research, and technical achievements.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300">
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
                  <CardTitle className="text-lg font-bold text-balance group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4 text-pretty">{project.description}</CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/projects/${project.slug}`}>View Details</Link>
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
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
