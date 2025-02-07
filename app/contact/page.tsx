import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen p-8 ml-64">
      <h1 className="text-5xl font-bold mb-8">
        <span className="gradient-text">Contact</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="bg-white/5 border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:nagavaibhav17@gmail.com" className="hover:text-blue-400">
                    nagavaibhav17@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+919866215981" className="hover:text-blue-400">
                    +91 98662 15981
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <span>Vijayawada, India</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/naga-vaibhav-gurram-6892552a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    naga-vaibhav-gurram
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/vaibhav4218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400"
                  >
                    vaibhav4218
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/5 border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <Input placeholder="Your name" className="bg-white/5 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Email</label>
                  <Input type="email" placeholder="Your email" className="bg-white/5 border-gray-700 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <Input placeholder="Message subject" className="bg-white/5 border-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <Textarea placeholder="Your message" className="bg-white/5 border-gray-700 text-white min-h-[150px]" />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-pink-500 hover:opacity-90">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

