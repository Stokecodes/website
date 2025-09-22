import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <MobileNav />

      {/* Header */}
      <section className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Resume</h1>
              <p className="text-xl text-muted-foreground">
                Download or view my complete resume with detailed experience and qualifications.
              </p>
            </div>
            <div className="flex gap-3">
              <Button size="lg">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Screen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Preview */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Resume Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* PDF Embed */}
              <div className="relative w-full bg-muted rounded-lg overflow-hidden">
                <div className="aspect-[8.5/11] w-full">
                  {/* Placeholder for PDF - In a real implementation, you would embed the actual PDF */}
                  <div className="w-full h-full flex items-center justify-center bg-white border-2 border-dashed border-muted-foreground/20">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">Resume PDF</h3>
                      <p className="text-muted-foreground mb-4">
                        Your resume PDF would be displayed here. Upload your resume file to the public folder and
                        reference it below.
                      </p>
                      <div className="space-y-2">
                        <Button>
                          <Download className="w-4 h-4 mr-2" />
                          Download Resume
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          To implement: Add your resume.pdf to the public folder and use an iframe or PDF viewer
                          component
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alternative: Text-based resume preview */}
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Implementation Note</h3>
                <p className="text-muted-foreground mb-4">To display your actual resume, you can either:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <strong>Option 1:</strong> Add your resume.pdf to the public folder and use an iframe:
                    <code className="block mt-1 p-2 bg-background rounded text-sm">
                      {`<iframe src="/resume.pdf" width="100%" height="800px" />`}
                    </code>
                  </li>
                  <li>
                    <strong>Option 2:</strong> Use a PDF viewer library like react-pdf or pdf-lib
                  </li>
                  <li>
                    <strong>Option 3:</strong> Create a text-based resume layout using React components
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quick Summary */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">3.85</div>
                <div className="text-sm text-muted-foreground">GPA</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <Card className="mt-8">
            <CardContent className="pt-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-4">
                I'm actively seeking internship and full-time opportunities in aerospace engineering.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
