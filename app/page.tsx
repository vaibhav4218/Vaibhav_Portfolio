import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 ml-64">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-white">Hi, I&apos;m </span>
            <span className="gradient-text">Naga Vaibhav</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400">AI/ML Engineer & Full Stack Developer</h2>
          <p className="text-gray-400 max-w-2xl">
            Seeking a challenging role in a dynamic organization where I can apply my technical skills, problem-solving
            abilities, and passion for innovation in AI and Machine Learning.
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button className="bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90">
                View Projects <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vaiibhav.jpg-3kmmg5DTI0GrrCHIZLjrlzQJTgglGB.jpeg"
            alt="Naga Vaibhav Gurram"
            fill
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

