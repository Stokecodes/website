import { MobileNav } from "@/components/mobile-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, GraduationCap, Award, Code, Rocket, Mail, Linkedin, Github } from "lucide-react"

const skills = [
  { category: "Programming", items: ["Python", "C++", "MATLAB", "JavaScript", "SQL"] },
  { category: "Aerospace Software", items: ["ANSYS", "SolidWorks", "CATIA", "STK", "OpenFOAM"] },
  { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "ROS"] },
  { category: "Engineering", items: ["CFD", "FEA", "Control Systems", "Orbital Mechanics", "Propulsion"] },
]

const achievements = [
  {
    title: "Dean's List",
    description: "Maintained GPA above 3.8 for 6 consecutive semesters",
    year: "2022-2024",
  },
  {
    title: "NASA USRP Intern",
    description: "Selected for competitive internship program at NASA Goddard Space Flight Center",
    year: "2023",
  },
  {
    title: "AIAA Student Design Competition",
    description: "2nd place in undergraduate aircraft design competition",
    year: "2023",
  },
  {
    title: "Outstanding Student Award",
    description: "Recognized for academic excellence and leadership in aerospace engineering",
    year: "2022",
  },
]

const education = [
  {
    degree: "Bachelor of Science in Aerospace Engineering",
    school: "University of Excellence",
    period: "2021 - 2025 (Expected)",
    gpa: "3.85/4.0",
    relevant: ["Advanced Propulsion Systems", "Orbital Mechanics", "Aircraft Design", "Control Systems", "CFD"],
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <MobileNav />

      {/* Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Passionate aerospace engineering student with a focus on autonomous systems, propulsion, and space
            technology.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <Image src="/professional-aerospace-engineering-student-portrai.jpg" alt="Profile Picture" fill className="object-cover" />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket className="w-5 h-5 mr-2" />
                    My Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a dedicated aerospace engineering student with a passion for pushing the boundaries of flight
                    and space exploration. My journey began with childhood dreams of becoming an astronaut, which
                    evolved into a deep fascination with the engineering principles that make space travel possible.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Throughout my academic career, I've focused on developing expertise in autonomous systems, advanced
                    propulsion technologies, and computational analysis. I believe that the future of aerospace lies in
                    intelligent, autonomous systems that can operate reliably in the harsh environments of space.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not working on engineering projects, you can find me stargazing, building model rockets, or
                    contributing to open-source aerospace software projects. I'm always eager to collaborate with
                    like-minded individuals who share my passion for advancing human presence in space.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3.85</div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    {edu.degree}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span>{edu.school}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course) => (
                        <Badge key={course} variant="outline">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    {skillGroup.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    {achievement.title}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">{achievement.year}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always interested in discussing aerospace engineering, new opportunities, and innovative projects.
                Feel free to reach out!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="lg">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
