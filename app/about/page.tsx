export default function About() {
  return (
    <div className="p-8 ml-64">
      <h1 className="section-title">About Me</h1>
      <div className="card space-y-6">
        <p className="text-gray-300">
          I am a B.Tech student specializing in Artificial Intelligence & Machine Learning at PSCMR College of
          Engineering. With a strong foundation in programming and mathematics, I am passionate about developing
          innovative solutions using cutting-edge technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white">B.Tech in AI & ML</p>
                <p className="text-gray-400">PSCMR College of Engineering</p>
                <p className="text-gray-500">CGPA: 8.17 | 2021-2025</p>
              </div>
              <div>
                <p className="text-white">Intermediate (M.P.C)</p>
                <p className="text-gray-400">PB Siddhartha Junior College</p>
                <p className="text-gray-500">87% | 2019-2021</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Leadership</h3>
            <div>
              <p className="text-white">President, AURA Student Club</p>
              <p className="text-gray-400">PSCMR College of Engineering</p>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                <li>Led workshops and seminars on AI technologies</li>
                <li>Managed team activities and community engagement</li>
                <li>Collaborated with faculty and industry professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

