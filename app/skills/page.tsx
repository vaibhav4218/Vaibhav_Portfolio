import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code2, Database, Terminal, Book, Cpu, LineChart } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "AI/ML Technologies",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Deep Learning", level: 75 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      title: "Development Tools",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Google Colab", level: 90 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "VS Code", level: 85 },
      ],
    },
  ]

  return (
    <div className="min-h-screen p-8 ml-64">
      <h1 className="text-5xl font-bold mb-8">
        <span className="gradient-text">Skills</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-white/5 border-0 hover:bg-white/10 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                {category.icon}
                <CardTitle className="text-xl text-white">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-pink-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Generative AI - Google Cloud",
              date: "December 2023",
              icon: <Cpu className="w-5 h-5" />,
            },
            {
              title: "Machine Learning and Deep Learning",
              date: "October 2023",
              icon: <Brain className="w-5 h-5" />,
            },
            {
              title: "Data Science 101",
              date: "September 2023",
              icon: <LineChart className="w-5 h-5" />,
            },
            {
              title: "Supervised Learning - Stanford University",
              date: "March 2023",
              icon: <Book className="w-5 h-5" />,
            },
          ].map((cert, index) => (
            <Card key={index} className="bg-white/5 border-0">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">{cert.icon}</div>
                  <div>
                    <h3 className="text-white font-medium">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

