import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  link: string
  websiteLink?: string
  accentColor?: "purple" | "teal"
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
  websiteLink,
  accentColor = "purple",
}: ProjectCardProps) {
  const accentColors = {
    purple: {
      border: "border-purple-500/30",
      badge: "text-purple-300",
      hover: "hover:text-purple-400",
      line: "bg-purple-600",
    },
    teal: {
      border: "border-teal-500/30",
      badge: "text-teal-300",
      hover: "hover:text-teal-400",
      line: "bg-teal-600",
    },
  }

  return (
    <Card className="flex flex-col h-full bg-zinc-800 border-zinc-700 overflow-hidden">
      <div className={`h-1 ${accentColors[accentColor].line}`}></div>
      <CardHeader>
        <CardTitle className="line-clamp-2 text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-zinc-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className={`bg-zinc-700 ${accentColors[accentColor].badge} hover:bg-zinc-600`}
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 border-t border-zinc-700 bg-zinc-800/80 px-6 py-3">
        {link && link !== "#" && (
          <Button
            variant="outline"
            size="sm"
            className={`border-zinc-600 ${accentColors[accentColor].hover} hover:bg-zinc-700`}
            asChild
          >
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
        {websiteLink && (
          <Button
            variant="outline"
            size="sm"
            className={`border-zinc-600 ${accentColors[accentColor].hover} hover:bg-zinc-700`}
            asChild
          >
            <Link href={websiteLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

