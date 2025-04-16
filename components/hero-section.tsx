"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  showSecondaryButton?: boolean
  secondaryButtonText?: string
  secondaryButtonLink?: string
  backgroundImage?: string
  gradientColor?: string
}

const HeroSection = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  showSecondaryButton = false,
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/about",
  backgroundImage = "/placeholder.svg?height=1080&width=1920",
  gradientColor = "blue",
}: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".slide-in")
            elements.forEach((el) => {
              el.classList.add("animate")
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  const gradientClass =
    gradientColor === "blue"
      ? "from-blue-900 via-blue-800 to-blue-700"
      : gradientColor === "yellow"
        ? "from-yellow-900 via-yellow-800 to-yellow-700"
        : gradientColor === "purple"
          ? "from-purple-900 via-purple-800 to-purple-700"
          : gradientColor === "green"
            ? "from-green-900 via-green-800 to-green-700"
            : gradientColor === "red"
              ? "from-red-900 via-red-800 to-red-700"
              : "from-gray-900 via-gray-800 to-gray-700"

  return (
    <div
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${
          gradientColor === "blue"
            ? "from-blue-900 via-blue-700 to-indigo-600"
            : gradientColor === "yellow"
              ? "from-yellow-900 via-amber-700 to-orange-600"
              : gradientColor === "purple"
                ? "from-purple-900 via-indigo-700 to-blue-600"
                : gradientColor === "green"
                  ? "from-green-900 via-teal-700 to-blue-600"
                  : gradientColor === "red"
                    ? "from-red-900 via-rose-700 to-pink-600"
                    : "from-gray-900 via-slate-700 to-gray-600"
        } opacity-90 z-0`}
      ></div>
      <div className="container mx-auto px-4 z-10 text-center text-white py-20">
        <p className="text-sm md:text-base uppercase tracking-wider mb-4 slide-in stagger-1 text-yellow-300">
          {subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 slide-in stagger-2">{title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200 slide-in stagger-3">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 slide-in stagger-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full shine-effect">
            <Link href={buttonLink}>
              {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {showSecondaryButton && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-full"
            >
              <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroSection
