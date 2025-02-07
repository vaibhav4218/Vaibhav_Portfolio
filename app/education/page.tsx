import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Artificial Intelligence & Machine Learning",
      institution: "PSCMR College of Engineering",
      location: "Vijayawada, India",
      duration: "2021 - 2025",
      score: "CGPA: 8.17",
      highlights: [
        "Specialized in AI & ML technologies",
        "Active member of technical clubs",
        "Participated in multiple hackathons",
        "Led student research projects",
      ],
    },
    {
      degree: "Intermediate (M.P.C)",
      institution: "PB Siddhartha Junior College of Arts and Science",
      location: "Vijayawada, India",
      duration: "2019 - 2021",
      score: "Percentage: 87%",
      highlights: [
        "Focused on Mathematics, Physics, and Chemistry",
        "Participated in science exhibitions",
        "Achieved academic excellence",
      ],
    },
    {
      degree: "SSC",
      institution: "Sri Chaitanya High School",
      location: "Vijayawada, India",
      duration: "2019",
      score: "GPA: 9.3",
      highlights: [
        "Achieved academic distinction",
        "Participated in extracurricular activities",
        "Received merit scholarships",
      ],
    },
  ]

  return (
    <div className="min-h-screen p-8 ml-64">
      <h1 className="text-5xl font-bold mb-8">
        <span className="gradient-text">Education</span>
      </h1>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <Card key={index} className="bg-white/5 border-0 hover:bg-white/10 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                    <CardTitle className="text-2xl text-white">{edu.degree}</CardTitle>
                  </div>
                  {edu.major && <p className="text-blue-400 font-medium mb-2">{edu.major}</p>}
                  <p className="text-gray-300 text-lg">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-2 text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400">
                  {edu.score}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

