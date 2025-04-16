import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  link: string
  color?: "blue" | "yellow" | "purple" | "green" | "red"
}

const ServiceCard = ({ title, description, icon: Icon, link, color = "blue" }: ServiceCardProps) => {
  const colorClasses = {
    blue: "bg-blue-600 text-white",
    yellow: "bg-yellow-500 text-black",
    purple: "bg-purple-600 text-white",
    green: "bg-green-600 text-white",
    red: "bg-red-600 text-white",
  }

  const iconBgClass = {
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
  }

  const buttonClass = {
    blue: "border-blue-600 text-blue-600 hover:bg-blue-50",
    yellow: "border-yellow-500 text-yellow-600 hover:bg-yellow-50",
    purple: "border-purple-600 text-purple-600 hover:bg-purple-50",
    green: "border-green-600 text-green-600 hover:bg-green-50",
    red: "border-red-600 text-red-600 hover:bg-red-50",
  }

  return (
    <Card className="service-card h-full flex flex-col overflow-hidden border-none shadow-lg">
      <div className={`h-2 ${colorClasses[color]}`}></div>
      <CardHeader>
        <div className={`w-12 h-12 rounded-full ${iconBgClass[color]} flex items-center justify-center mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span
              className={`mr-2 ${color === "blue" ? "text-blue-600" : color === "yellow" ? "text-yellow-600" : color === "purple" ? "text-purple-600" : color === "green" ? "text-green-600" : "text-red-600"}`}
            >
              •
            </span>
            <span>Custom solutions tailored to your needs</span>
          </li>
          <li className="flex items-start">
            <span
              className={`mr-2 ${color === "blue" ? "text-blue-600" : color === "yellow" ? "text-yellow-600" : color === "purple" ? "text-purple-600" : color === "green" ? "text-green-600" : "text-red-600"}`}
            >
              •
            </span>
            <span>Expert team with years of experience</span>
          </li>
          <li className="flex items-start">
            <span
              className={`mr-2 ${color === "blue" ? "text-blue-600" : color === "yellow" ? "text-yellow-600" : color === "purple" ? "text-purple-600" : color === "green" ? "text-green-600" : "text-red-600"}`}
            >
              •
            </span>
            <span>Ongoing support and maintenance</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className={`w-full group rounded-full ${buttonClass[color]}`}>
          <Link href={link} className="flex items-center justify-between w-full">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ServiceCard
