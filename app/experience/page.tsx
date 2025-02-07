import { Card } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "ArchOver Solutions Private Limited",
      duration: "Jan 2023 - Present",
      responsibilities: [
        "Led the development of an Inventory Forecasting project using advanced ML models",
        "Implemented predictive analytics solutions for stock optimization",
        "Collaborated with cross-functional teams to deliver high-impact solutions",
        "Developed and maintained data processing pipelines",
        "Created interactive dashboards for real-time monitoring",
      ],
    },
    {
      title: "President",
      company: "AURA Student Club",
      duration: "June 2023 - Present",
      responsibilities: [
        "Led workshops and seminars on emerging AI technologies",
        "Managed team activities and community engagement initiatives",
        "Developed strategic partnerships with industry professionals",
        "Organized technical events and hackathons",
        "Mentored junior members in AI/ML projects",
      ],
    },
  ]

  return (
    <div className="min-h-screen p-8 ml-64 bg-[#1F1B2C]">
      <h1 className="text-6xl font-bold mb-16 text-center bg-gradient-to-r from-[#4169E1] to-[#FF69B4] bg-clip-text text-transparent">
        Professional Experience
        <div className="h-1 w-32 bg-gradient-to-r from-[#4169E1] to-[#FF69B4] mx-auto mt-4 rounded-full" />
      </h1>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4169E1] to-[#FF69B4]" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#4169E1] border-4 border-[#1F1B2C] z-10" />

              {/* Experience card */}
              <Card className="ml-16 bg-[#1A1625]/50 border-0 hover:bg-[#1A1625] transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(65,105,225,0.1)] hover:shadow-[0_0_20px_rgba(65,105,225,0.2)]">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-[#4169E1]">{exp.title}</h3>
                    <span className="text-gray-400">{exp.duration}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#4169E1] mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

