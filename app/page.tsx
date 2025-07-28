import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Phone, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Adityasankar Sengupta
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="#resume" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
              Resume
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#current-projects"
              className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors"
            >
              Current Work
            </Link>
            <Link href="#contact" className="text-sm font-medium text-zinc-400 hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
<Button
            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black"
            asChild
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="container min-h-[92vh] py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="space-y-6 md:w-2/3">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text pb-2">
              Adityasankar Sengupta
            </h1>

              <p className="text-xl text-zinc-400">
                Computer Science Engineering student with a passion for web development and AI/ML technologies.
                Head of Web Development at ACM SRM Student Chapter and
                previously worked as an SDE Intern at Jio Platforms Limited. Passionate about crafting innovative and user-friendly solutions.
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  asChild
                >
                  <Link href="#resume">
                    View Resume <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-amber-500/50 hover:bg-amber-500/10" asChild>
                  <Link href="#projects">See Projects</Link>
                </Button>
              </div>
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://github.com/adityasankar5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com/in/adityasankar-sengupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-purple-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:adityasankarsengupta111@gmail.com"
                  className="text-zinc-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
                <Link href="tel:+917016308167" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  <Phone className="h-6 w-6" />
                  <span className="sr-only">Phone</span>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-amber-500/50 shadow-lg shadow-purple-500/20">
                <Image src="/profile-image.png" alt="Adityasankar Sengupta" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="bg-zinc-900 py-16">
          <div className="container space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-purple-500 inline-block">Resume</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                My educational background, work experience, skills, and achievements.
              </p>
            </div>

            <Tabs defaultValue="education" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-zinc-800/50">
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  Achievements
                </TabsTrigger>
              </TabsList>

              <TabsContent value="education" className="mt-6 space-y-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>SRM Institute of Science and Technology, Chennai, India</CardTitle>
                    <CardDescription className="text-zinc-400">2022 - 2026</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">Bachelor of Technology in Computer Science Engineering | CGPA: 9.50</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>New Horizons Scholars School, India</CardTitle>
                    <CardDescription className="text-zinc-400">2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">AISSCE (Class XII), Percentage: 85.40%</p>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Delhi Public School Jamnagar, India</CardTitle>
                    <CardDescription className="text-zinc-400">2020</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">AISSE (Class X), Percentage: 94.50%</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience" className="mt-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Software Development Engineering Intern</CardTitle>
                        <CardDescription className="text-zinc-400">Jio Platforms Limited, Mumbai</CardDescription>
                      </div>
                      <Badge className="bg-purple-600 text-white hover:bg-purple-700">May 2024 - July 2024</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        Enhanced a live procurement system to meet client requirements for 6000+ users in 200+
                        departments.
                      </li>
                      <li>
                        Optimised the webpage to 15-20% faster loading times by implementing lazy loading and code
                        splitting.
                      </li>
                      <li>
                        Built an internal E-Waste management website in Angular and NodeJS, using micro frontends and
                        REST APIs.
                      </li>
                      <li>
                        Implemented secure login with OTP validation & session management using token-based
                        authentication (JWT).
                      </li>
                      <li>
                        Achieved 98% success rate for 2500+ uploads with optimized API integration for CRUD operations.
                      </li>
                      <li>Deployed using Azure DevOps, with Docker and Kubernetes, reducing deployment time by 30%.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="skills" className="mt-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Technical Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2 text-white">Languages</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Java", "Python", "C/C++", "JavaScript", "TypeScript", "HTML", "CSS"].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-zinc-700 text-purple-300 hover:bg-zinc-600"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-white">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Angular",
                          "React",
                          "NodeJS",
                          "MySQL",
                          "MongoDB",
                          "Express",
                          "Django",
                          "Linux",
                          "Git",
                          "Tailwind",
                          "Bootstrap",
                          "Azure DevOps",
                          "MySQL Workbench",
                          "Postman",
                        ].map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-zinc-700 text-purple-300 hover:bg-zinc-600"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 text-white">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Data Structures and Algorithms",
                          "Object Oriented Programming",
                          "Operating Systems",
                          "Fundamentals of Data Science",
                          "Database Management Systems",
                          "Artificial Intelligence",
                        ].map((course) => (
                          <Badge
                            key={course}
                            variant="secondary"
                            className="bg-zinc-700 text-purple-300 hover:bg-zinc-600"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6 space-y-6">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Leadership & Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">Head of Web Development at SRM ACM SIGKDD</h4>
                        <Badge className="bg-purple-600 text-white hover:bg-purple-700">2024-2025</Badge>
                      </div>
                      <p className="text-zinc-400">
                        Leading web development initiatives and projects for the ACM SIGKDD student chapter at SRM.
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">2nd Runner-up, IEEE Tech-Trek 2024</h4>
                        <Link href="#" className="text-sm text-purple-400 hover:underline">
                          Link
                        </Link>
                      </div>
                      <p className="text-zinc-400">
                        Designed and deployed an e-commerce app in 24 hours using MERN stack, serving 100+ users
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between">
                        <h4 className="font-medium text-white">Finalist, Innofusion 2024</h4>
                        <Link href="#" className="text-sm text-purple-400 hover:underline">
                          Link
                        </Link>
                      </div>
                      <p className="text-zinc-400">
                        Created a cardiovascular disease prediction app using ML models, achieving 87% accuracy and
                        addressing real-world healthcare challenges.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle>Certifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "AWS Academy Cloud Foundations",
                        "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
                        "AWS Academy Machine Learning Foundations",
                        "Oracle Cloud Infrastructure 2024 Certified Data Foundations Associate",
                      ].map((cert) => (
                        <Badge
                          key={cert}
                          variant="outline"
                          className="justify-start py-2 border-purple-500/30 text-purple-300"
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button variant="outline" className="border-purple-500/50 hover:bg-purple-500/10 text-purple-400">
                <Link
                  href="https://drive.google.com/file/d/1AmJejFn_j-FXVCiaiD5geAYcFZhThFji/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Download Full Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-black">
          <div className="container space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-purple-500 inline-block">Projects</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">A showcase of my technical projects and applications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Genie: AI Powered Financial Assistant"
                description="Created an intelligent financial assistant that helps users manage their finances, track investments, set budgets, and receive personalized financial advice. Genie leverages AI to provide insights and recommendations based on spending patterns and goals."
                technologies={["React", "Node.js", "Express", "Supabase", "TensorFlow", "Grok API"]}
                link="#"
                websiteLink="https://genie-beryl.vercel.app/"
                accentColor="purple"
              />
              <ProjectCard
  title="Smart Packing Optimizer"
  description="Developed an intelligent packing assistant that efficiently arranges items into boxes based on dimensions, weight, and cost constraints. The system uses bin-packing heuristics and visualizes the optimal packing layout in 3D, helping users save space and reduce shipping costs."
  technologies={["Next.js", "TypeScript", "Three.js", "Supabase", "Node.js", "Bin-Packing Heuristics"]}
  link="#"
  websiteLink="https://smart-packing-optimizer-17524854972.vercel.app/"
  accentColor="teal"
/>
              <ProjectCard
                title="Machine Learning-Powered Stock Price Prediction"
                description="Built a LSTM-based model with 85% accuracy for stock price prediction on real-time data. Designed a user-friendly interface used by 200+ users."
                technologies={["Python", "JS", "HTML", "Bootstrap", "Django"]}
                link="https://github.com/adityasankar5/Stock-Prediction"
                accentColor="purple"
              />

              <ProjectCard
                title="Fortuna: A Web3 Powered Digital Gifting Application"
                description="Developed and deployed a Web3 platform on multiple blockchains, allowing 400+ users to create and share personalized 'Gift Boxes' with cryptocurrency and NFTs. Ranked among the Top 7 teams out of 300+ for innovative use of Web3 technologies."
                technologies={["React", "Solidity", "Tailwind", "Node.js"]}
                link="#"
                websiteLink="https://fortuna-mavericks.vercel.app/"
                accentColor="teal"
              />

              <ProjectCard
                title="Hack of Duty - Hackathon Platform"
                description="Led and developed a hackathon platform for ACM SRM SIGKDD. The platform features registration, team formation, project submission, and judging functionalities."
                technologies={["Next.js", "React", "Tailwind", "Node.js"]}
                link="https://github.com/adityasankar5/Hack_Of_Duty"
                websiteLink="https://hackofduty.vercel.app/"
                accentColor="purple"
              />

            </div>
          </div>
        </section>

        {/* Currently Working On Section */}
        <section id="current-projects" className="py-16 bg-zinc-900">
          <div className="container space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-purple-500 inline-block">Currently Working On</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">Projects that I'm actively developing and improving.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <div className="h-1 bg-purple-600"></div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-purple-400" />
                    <CardTitle>Bounty</CardTitle>
                  </div>
                  <CardDescription className="text-zinc-400">
                    A modern freelancing site for the new generation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-300">
                    Developing a next-generation freelancing platform that connects talented individuals with businesses
                    looking for specialized skills. The platform features a modern UI, secure payment processing, and an
                    intelligent matching algorithm.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["React", "TypeScript", "Tailwind CSS", "Supabase", "AWS","Terraform","CI/CD" ].map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-zinc-700 text-purple-300 hover:bg-zinc-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-zinc-700 bg-zinc-800/80 px-6 py-3">
                  <p className="text-sm text-zinc-400">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
                    In active development
                  </p>
                </CardFooter>
              </Card>
              <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
  <div className="h-1 bg-blue-600"></div>
  <CardHeader>
    <div className="flex items-center gap-2">
      <Code className="h-5 w-5 text-blue-400" />
      <CardTitle>Code2API</CardTitle>
    </div>
    <CardDescription className="text-zinc-400">
      Autogenerates APIs and docs by parsing your codebase
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-zinc-300">
      Creating a dev tool that analyzes TypeScript or Python projects and auto-generates REST or GraphQL endpoints, OpenAPI
      docs, and boilerplate code by parsing function signatures, comments, and file structures. Ideal for rapid backend
      scaffolding.
    </p>
    <div className="flex flex-wrap gap-2 mt-4">
      {[
        "TypeScript",
        "Node.js",
        "Babel Parser",
        "Swagger",
        "OpenAI API",
        "Express",
        "GitHub API"
      ].map((tech) => (
        <Badge key={tech} variant="secondary" className="bg-zinc-700 text-blue-300 hover:bg-zinc-600">
          {tech}
        </Badge>
      ))}
    </div>
  </CardContent>
  <CardFooter className="border-t border-zinc-700 bg-zinc-800/80 px-6 py-3">
    <p className="text-sm text-zinc-400">
      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
      In active development
    </p>
  </CardFooter>
</Card>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-purple-500 inline-block">Get in Touch</h2>
                <p className="text-zinc-400">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400" />
                    <Link
                      href="mailto:adityasankarsengupta111@gmail.com"
                      className="text-zinc-300 hover:text-purple-400 transition-colors"
                    >
                      adityasankarsengupta111@gmail.com
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <Link href="tel:+917016308167" className="text-zinc-300 hover:text-purple-400 transition-colors">
                      +91-7016308167
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-purple-400" />
                    <Link
                      href="https://github.com/adityasankar5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-purple-400 transition-colors"
                    >
                      github.com/adityasankar5
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                    <Link
                      href="https://linkedin.com/in/adityasankar-sengupta/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-300 hover:text-purple-400 transition-colors"
                    >
                      linkedin.com/in/adityasankar-sengupta/
                    </Link>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900 rounded-lg border border-zinc-800 mt-8">
                  <h3 className="text-xl font-medium mb-2 text-white">Let's Build Something Amazing</h3>
                  <p className="text-zinc-400">
                    Whether you need a website, a web application, or help with your existing project, I'm here to help
                    turn your ideas into reality.
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-6 bg-black">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Adityasankar Sengupta. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/adityasankar5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/adityasankar-sengupta/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:adityasankarsengupta111@gmail.com"
              className="text-zinc-500 hover:text-purple-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

