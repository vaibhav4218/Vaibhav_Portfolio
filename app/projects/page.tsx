import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "Movie Recommendation System",
      description:
        "A sophisticated recommendation engine that suggests movies based on user preferences using content-based filtering and cosine similarity algorithms.",
      tools: ["Python", "Keras", "Streamlit", "Pickle"],
      techniques: ["Content-Based Filtering", "Cosine Similarity"],
      highlights: [
        "Implemented content-based filtering algorithm",
        "Developed interactive UI with Streamlit",
        "Processed and analyzed large movie datasets",
        "Achieved high accuracy in recommendations",
      ],
    },
    {
      title: "Inventory Forecasting",
      description:
        "Advanced predictive analytics system for inventory management using machine learning and time series analysis.",
      tools: ["Python", "Keras", "PowerBI", "TensorFlow"],
      techniques: ["Time Series Analysis", "LSTM", "ARIMA"],
      highlights: [
        "Built predictive models using LSTM and ARIMA",
        "Created interactive dashboards with PowerBI",
        "Reduced inventory costs by optimizing stock levels",
        "Implemented real-time monitoring system",
      ],
    },
    {
      title: "Online Examination Portal",
      description:
        "Full-stack web application for conducting online examinations with comprehensive result management.",
      tools: ["HTML", "CSS", "JavaScript", "JSP", "MySQL"],
      techniques: ["Full Stack Development", "Database Design"],
      highlights: [
        "Designed user authentication system",
        "Implemented secure exam environment",
        "Created automated grading system",
        "Built comprehensive admin dashboard",
      ],
    },
  ]

  return (
    <div className="min-h-screen p-8 ml-64">
      <h1 className="text-5xl font-bold mb-8">
        <span className="gradient-text">Projects</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/5 border-0 hover:bg-white/10 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300">{project.description}</p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-400">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="bg-blue-500/10 text-blue-400">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-400">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

