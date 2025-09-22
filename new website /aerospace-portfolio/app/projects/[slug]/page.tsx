import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Calendar, User, Target, Lightbulb, Cog, BarChart3 } from "lucide-react"

const projectsData = {
  "autonomous-drone-navigation": {
    title: "Autonomous Drone Navigation System",
    description:
      "Developed an AI-powered navigation system for autonomous drones using computer vision and machine learning algorithms.",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS"],
    date: "2024",
    category: "Autonomous Systems",
    image: "/autonomous-drone-flying-over-landscape.jpg",
    duration: "6 months",
    team: "Solo Project",
    overview:
      "This project focused on creating a fully autonomous navigation system for drones capable of real-time obstacle avoidance and path planning. The system integrates computer vision algorithms with machine learning models to enable drones to navigate complex environments without human intervention.",
    objectives: [
      "Develop real-time obstacle detection and avoidance algorithms",
      "Implement machine learning models for path optimization",
      "Create a robust navigation system for various weather conditions",
      "Achieve 95% navigation accuracy in complex environments",
    ],
    methodology:
      "The project utilized a combination of computer vision techniques and reinforcement learning. OpenCV was used for real-time image processing and obstacle detection, while TensorFlow provided the machine learning framework for path planning algorithms. The Robot Operating System (ROS) served as the middleware for integrating various components.",
    results: [
      "Achieved 97% obstacle avoidance accuracy in testing",
      "Reduced navigation time by 35% compared to traditional methods",
      "Successfully tested in various weather conditions",
      "Implemented real-time processing at 30 FPS",
    ],
    challenges:
      "The main challenges included optimizing algorithms for real-time processing, handling varying lighting conditions, and ensuring reliable performance in adverse weather. These were addressed through extensive testing and algorithm refinement.",
    futureWork:
      "Future improvements include implementing swarm intelligence for multi-drone coordination, enhancing weather resistance, and expanding the system to work with different drone platforms.",
  },
  "rocket-engine-analyzer": {
    title: "Rocket Engine Performance Analyzer",
    description:
      "Built a comprehensive analysis tool for rocket engine performance optimization using computational fluid dynamics.",
    technologies: ["MATLAB", "ANSYS Fluent", "Python", "CFD"],
    date: "2024",
    category: "Propulsion",
    image: "/rocket-engine-test-firing-with-flames.jpg",
    duration: "8 months",
    team: "Team of 4",
    overview:
      "This project involved developing a sophisticated analysis tool for optimizing rocket engine performance through computational fluid dynamics simulations. The tool provides engineers with detailed insights into combustion efficiency, thrust optimization, and thermal management.",
    objectives: [
      "Create accurate CFD models for rocket engine combustion",
      "Develop optimization algorithms for thrust-to-weight ratio",
      "Implement thermal analysis for engine cooling systems",
      "Build user-friendly interface for engineers",
    ],
    methodology:
      "The project combined ANSYS Fluent for CFD simulations with MATLAB for data analysis and optimization algorithms. Python was used to create the user interface and integrate various analysis modules. The tool processes engine geometry, fuel properties, and operating conditions to provide comprehensive performance metrics.",
    results: [
      "Improved engine efficiency predictions by 15%",
      "Reduced analysis time from weeks to hours",
      "Successfully validated against real engine test data",
      "Identified optimal nozzle geometries for different applications",
    ],
    challenges:
      "Key challenges included managing computational complexity, ensuring simulation accuracy, and creating intuitive visualization of complex fluid dynamics data. These were overcome through algorithm optimization and extensive validation.",
    futureWork:
      "Future enhancements include adding multi-phase flow analysis, implementing machine learning for predictive maintenance, and expanding support for hybrid rocket engines.",
  },
  "satellite-orbit-prediction": {
    title: "Satellite Orbit Prediction Model",
    description:
      "Created a machine learning model to predict satellite orbital decay and collision probability with space debris.",
    technologies: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
    date: "2023",
    category: "Orbital Mechanics",
    image: "/satellite-orbiting-earth-with-space-debris.jpg",
    duration: "5 months",
    team: "Team of 3",
    overview:
      "This project developed a predictive model for satellite orbital mechanics, focusing on orbital decay prediction and space debris collision risk assessment. The model uses machine learning algorithms to analyze historical orbital data and predict future satellite positions with high accuracy.",
    objectives: [
      "Develop accurate orbital decay prediction models",
      "Create collision probability algorithms for space debris",
      "Implement real-time tracking and prediction system",
      "Achieve prediction accuracy within 100m for 7-day forecasts",
    ],
    methodology:
      "The project utilized machine learning algorithms including random forests and neural networks to analyze orbital data. Python libraries like Scikit-learn provided the ML framework, while NumPy handled numerical computations. Matplotlib was used for data visualization and result presentation.",
    results: [
      "Achieved 95% accuracy in 7-day orbital predictions",
      "Successfully predicted 12 potential collision events",
      "Reduced false positive rates by 40%",
      "Processed over 10,000 satellite trajectories",
    ],
    challenges:
      "Main challenges included handling large datasets, accounting for atmospheric variations, and managing computational complexity for real-time predictions. Solutions involved data preprocessing optimization and algorithm parallelization.",
    futureWork:
      "Future work includes incorporating solar activity data, expanding to deep space missions, and developing automated collision avoidance recommendations.",
  },
  "wind-tunnel-visualization": {
    title: "Wind Tunnel Data Visualization",
    description:
      "Developed an interactive dashboard for analyzing and visualizing wind tunnel test data for aircraft design optimization.",
    technologies: ["React", "D3.js", "Python", "Flask"],
    date: "2023",
    category: "Aerodynamics",
    image: "/wind-tunnel-testing-aircraft-model-with-airflow-vi.jpg",
    duration: "4 months",
    team: "Solo Project",
    overview:
      "This project created an interactive web-based dashboard for visualizing and analyzing wind tunnel test data. The tool helps aerodynamics engineers quickly identify design issues and optimize aircraft performance through intuitive data visualization.",
    objectives: [
      "Create interactive visualizations for complex aerodynamic data",
      "Develop real-time data processing capabilities",
      "Implement comparative analysis tools",
      "Build user-friendly interface for engineers",
    ],
    methodology:
      "The project used React for the frontend interface with D3.js for advanced data visualizations. Python and Flask provided the backend API for data processing and analysis. The system processes wind tunnel sensor data and creates interactive charts, graphs, and 3D visualizations.",
    results: [
      "Reduced data analysis time by 60%",
      "Improved design iteration speed by 45%",
      "Successfully visualized over 500 test configurations",
      "Identified 15 critical design improvements",
    ],
    challenges:
      "Challenges included handling large datasets in real-time, creating intuitive 3D visualizations, and ensuring cross-platform compatibility. These were addressed through efficient data structures and optimized rendering algorithms.",
    futureWork:
      "Future enhancements include adding machine learning for automated anomaly detection, implementing collaborative features, and expanding to support CFD data integration.",
  },
  "mars-rover-pathfinding": {
    title: "Mars Rover Path Planning Algorithm",
    description:
      "Implemented advanced pathfinding algorithms for Mars rover navigation considering terrain difficulty and energy efficiency.",
    technologies: ["C++", "ROS", "Gazebo", "OpenCV"],
    date: "2023",
    category: "Robotics",
    image: "/mars-rover-on-red-planet-surface-with-rocky-terrai.jpg",
    duration: "7 months",
    team: "Team of 5",
    overview:
      "This project developed sophisticated pathfinding algorithms specifically designed for Mars rover navigation. The system considers terrain difficulty, energy consumption, and scientific objectives to plan optimal routes across the Martian surface.",
    objectives: [
      "Develop energy-efficient pathfinding algorithms",
      "Implement terrain analysis for safe navigation",
      "Create autonomous decision-making systems",
      "Optimize for scientific mission objectives",
    ],
    methodology:
      "The project used C++ for core algorithm development with ROS for system integration. Gazebo provided realistic Mars environment simulations, while OpenCV handled terrain analysis from rover cameras. The algorithms combine A* pathfinding with energy optimization and terrain assessment.",
    results: [
      "Reduced energy consumption by 30% compared to baseline",
      "Achieved 99.2% safe navigation success rate",
      "Completed 50+ simulated Mars missions",
      "Optimized routes for 25 scientific objectives",
    ],
    challenges:
      "Key challenges included simulating realistic Martian conditions, optimizing for multiple objectives simultaneously, and ensuring robust performance in uncertain environments. Solutions involved advanced simulation techniques and multi-objective optimization algorithms.",
    futureWork:
      "Future work includes implementing swarm robotics for multiple rovers, adding machine learning for terrain prediction, and developing communication protocols for Earth-Mars coordination.",
  },
  "wing-stress-analysis": {
    title: "Aircraft Wing Stress Analysis",
    description:
      "Performed finite element analysis on aircraft wing structures to optimize weight while maintaining structural integrity.",
    technologies: ["ANSYS", "SolidWorks", "MATLAB", "FEA"],
    date: "2022",
    category: "Structural Analysis",
    image: "/aircraft-wing-structural-analysis-with-stress-visu.jpg",
    duration: "6 months",
    team: "Team of 3",
    overview:
      "This project focused on optimizing aircraft wing structures through comprehensive finite element analysis. The goal was to reduce weight while maintaining structural integrity and safety margins required for commercial aviation.",
    objectives: [
      "Optimize wing structure for minimum weight",
      "Ensure compliance with aviation safety standards",
      "Analyze stress distribution under various load conditions",
      "Develop design recommendations for manufacturing",
    ],
    methodology:
      "The project utilized ANSYS for finite element analysis and SolidWorks for 3D modeling. MATLAB was used for optimization algorithms and data analysis. The analysis considered various load cases including takeoff, landing, turbulence, and extreme weather conditions.",
    results: [
      "Achieved 18% weight reduction while maintaining safety factors",
      "Identified optimal material distribution patterns",
      "Validated designs against industry standards",
      "Reduced manufacturing costs by 12%",
    ],
    challenges:
      "Main challenges included modeling complex load cases, ensuring convergence in FEA simulations, and balancing multiple optimization objectives. These were addressed through mesh refinement techniques and multi-objective optimization methods.",
    futureWork:
      "Future improvements include incorporating composite materials analysis, adding fatigue life predictions, and implementing topology optimization for advanced geometries.",
  },
  "hypersonic-heat-shield": {
    title: "Hypersonic Vehicle Heat Shield Design",
    description:
      "Designed and simulated thermal protection systems for hypersonic vehicles using advanced materials and cooling techniques.",
    technologies: ["ANSYS Thermal", "Python", "CAD", "Materials Science"],
    date: "2022",
    category: "Thermal Systems",
    image: "/hypersonic-vehicle-with-glowing-heat-shield-during.jpg",
    duration: "9 months",
    team: "Team of 4",
    overview:
      "This project involved designing advanced thermal protection systems for hypersonic vehicles capable of withstanding extreme temperatures during atmospheric reentry. The work focused on material selection, cooling system design, and thermal analysis.",
    objectives: [
      "Design heat shields for temperatures exceeding 2000°C",
      "Optimize cooling system efficiency",
      "Select appropriate materials for extreme conditions",
      "Minimize system weight and complexity",
    ],
    methodology:
      "The project used ANSYS Thermal for heat transfer analysis and Python for optimization algorithms. CAD software was used for geometric modeling, while materials science principles guided material selection and characterization.",
    results: [
      "Successfully designed shields for 2500°C peak temperatures",
      "Achieved 40% improvement in cooling efficiency",
      "Reduced system weight by 25%",
      "Validated designs through high-temperature testing",
    ],
    challenges:
      "Key challenges included modeling extreme temperature gradients, selecting materials with appropriate properties, and ensuring system reliability under harsh conditions. Solutions involved advanced materials research and innovative cooling designs.",
    futureWork:
      "Future work includes developing self-healing materials, implementing active cooling systems, and expanding designs for interplanetary missions.",
  },
  "space-debris-tracking": {
    title: "Space Debris Tracking System",
    description:
      "Built a real-time tracking system for space debris using radar data and predictive algorithms to prevent satellite collisions.",
    technologies: ["Python", "TensorFlow", "Radar Processing", "Real-time Systems"],
    date: "2022",
    category: "Space Situational Awareness",
    image: "/space-debris-tracking-visualization-with-satellite.jpg",
    duration: "8 months",
    team: "Team of 6",
    overview:
      "This project developed a comprehensive space debris tracking system to monitor and predict the movement of space debris, helping prevent collisions with active satellites and spacecraft. The system processes radar data in real-time and provides collision warnings.",
    objectives: [
      "Track over 10,000 debris objects simultaneously",
      "Provide accurate collision predictions",
      "Implement real-time alert systems",
      "Create comprehensive debris catalog",
    ],
    methodology:
      "The project used Python for system development with TensorFlow for predictive modeling. Radar data processing algorithms were implemented to handle multiple tracking stations, while real-time systems ensured continuous monitoring and alert generation.",
    results: [
      "Successfully tracked 12,000+ debris objects",
      "Achieved 98% accuracy in collision predictions",
      "Prevented 8 potential satellite collisions",
      "Reduced false alarm rates by 50%",
    ],
    challenges:
      "Main challenges included processing massive amounts of radar data, maintaining tracking accuracy for small objects, and ensuring system reliability for critical operations. Solutions involved distributed computing and advanced filtering algorithms.",
    futureWork:
      "Future enhancements include incorporating optical tracking data, developing debris removal mission planning, and expanding coverage to deep space missions.",
  },
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <MobileNav />

      {/* Header */}
      <section className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary">{project.category}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" />
              {project.date}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="w-4 h-4 mr-1" />
              {project.team}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Button size="lg">
              <Github className="w-5 h-5 mr-2" />
              View Code
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </CardContent>
          </Card>

          {/* Technologies & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cog className="w-5 h-5 mr-2" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Size:</span>
                  <span>{project.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year:</span>
                  <span>{project.date}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Objectives */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                Project Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Methodology */}
          <Card>
            <CardHeader>
              <CardTitle>Methodology</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{project.methodology}</p>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Key Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Challenges & Future Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Future Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.futureWork}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
