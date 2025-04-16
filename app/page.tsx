"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Smartphone, Server, Database, Brain, Bot, CheckCircle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import TestimonialCarousel from "@/components/testimonial-carousel"
import CountUp from "@/components/count-up"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroSlides = [
    {
      title: "Premium Tech Solutions",
      subtitle: "For Innovative Businesses",
      description: "Transforming ideas into powerful digital experiences with cutting-edge technology and design.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      color: "blue",
    },
    {
      title: "Strategic Design Services",
      subtitle: "For Forward-Thinking Brands",
      description: "Creating memorable brand experiences that connect with your audience and drive business growth.",
      image: "https://images.unsplash.com/photo-1581092335397-9fa73b3e5549?q=80&w=2070&auto=format&fit=crop",
      color: "purple",
    },
    {
      title: "Enterprise-Grade Development",
      subtitle: "For Global Scale",
      description: "Building robust, scalable solutions that power businesses across industries worldwide.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      color: "green",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: servicesRef, inView: servicesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Web Development",
      description: "Enterprise-grade websites and web applications built with cutting-edge technologies.",
      icon: Code,
      link: "/services/web-development",
      color: "blue" as const,
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: Smartphone,
      link: "/services/app-development",
      color: "yellow" as const,
    },
    {
      title: "DevOps & Cloud",
      description: "Streamline your development and operations with our comprehensive DevOps solutions.",
      icon: Server,
      link: "/services/devops",
      color: "purple" as const,
    },
    {
      title: "Web3 & Blockchain",
      description: "Innovative blockchain development, smart contracts, and decentralized applications.",
      icon: Database,
      link: "/services/web3",
      color: "green" as const,
    },
    {
      title: "AI Solutions",
      description: "Leverage the power of artificial intelligence to transform your business operations.",
      icon: Brain,
      link: "/services/ai",
      color: "red" as const,
    },
    {
      title: "AI Agents",
      description: "Custom AI agents and chatbots to automate customer interactions and drive engagement.",
      icon: Bot,
      link: "/services/ai-agents",
      color: "blue" as const,
    },
  ]

  const stats = [
    { value: 150, label: "Projects Completed", suffix: "+" },
    { value: 50, label: "Global Clients", suffix: "+" },
    { value: 15, label: "Industries Served", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ]

  const featuredProjects = [
    {
      title: "Enterprise E-commerce Platform",
      description: "A comprehensive e-commerce solution for a global retail brand.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Healthcare Mobile Application",
      description: "A patient-centered healthcare app improving medical access.",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform using AI to deliver business insights.",
      category: "AI Solution",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`absolute inset-0 ${
                slide.color === "blue"
                  ? "bg-gradient-to-tr from-blue-900/90 via-blue-700/85 to-indigo-600/80"
                  : slide.color === "purple"
                    ? "bg-gradient-to-tr from-purple-900/90 via-indigo-700/85 to-blue-600/80"
                    : "bg-gradient-to-tr from-green-900/90 via-teal-700/85 to-blue-600/80"
              }`}
            ></div>
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <div className="max-w-4xl">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block text-lg md:text-xl font-medium uppercase tracking-wider mb-4 text-yellow-300"
                >
                  {slide.subtitle}
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={currentSlide === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="text-lg bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 shadow-lg"
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-lg border-white text-white hover:bg-white/10 rounded-full px-8 py-6"
                  >
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide indicators */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-10" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-medium text-gray-600">Trusted by Industry Leaders</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop"
                alt="Client Logo 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop"
                alt="Client Logo 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=1974&auto=format&fit=crop"
                alt="Client Logo 3"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop"
                alt="Client Logo 4"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=1974&auto=format&fit=crop"
                alt="Client Logo 5"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" ref={servicesRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Comprehensive Solutions for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full spectrum of technology and design services to help your business thrive in the digital
              landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div
                    className={`h-2 ${
                      service.color === "blue"
                        ? "bg-blue-600"
                        : service.color === "yellow"
                          ? "bg-yellow-500"
                          : service.color === "purple"
                            ? "bg-purple-600"
                            : service.color === "green"
                              ? "bg-green-600"
                              : "bg-red-600"
                    }`}
                  ></div>
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl ${
                        service.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : service.color === "yellow"
                            ? "bg-yellow-100 text-yellow-600"
                            : service.color === "purple"
                              ? "bg-purple-100 text-purple-600"
                              : service.color === "green"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                      } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                    <Link
                      href={service.link}
                      className={`inline-flex items-center text-lg font-medium ${
                        service.color === "blue"
                          ? "text-blue-600"
                          : service.color === "yellow"
                            ? "text-yellow-600"
                            : service.color === "purple"
                              ? "text-purple-600"
                              : service.color === "green"
                                ? "text-green-600"
                                : "text-red-600"
                      } hover:underline`}
                    >
                      Learn More <ChevronRight className="ml-1 h-5 w-5" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="text-lg bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg"
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              We've helped businesses across the globe achieve their digital transformation goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 flex justify-center">
                  <CountUp end={stat.value} duration={2.5} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-xl text-gray-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Recent Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent projects and see how we've helped businesses achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                  <Link
                    href={`/portfolio/project-${index + 1}`}
                    className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline"
                  >
                    View Case Study <ChevronRight className="ml-1 h-5 w-5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="text-lg bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg"
            >
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from the businesses we've helped transform.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Enterprise Expertise with a Personal Touch
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At Credarix, we combine the capabilities of a large enterprise with the personalized attention of a
                boutique agency. Our team of experts is committed to delivering exceptional results for every client.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Industry-Leading Expertise",
                    description:
                      "Our team consists of top-tier professionals with experience across multiple industries.",
                  },
                  {
                    title: "Tailored Solutions",
                    description:
                      "We create custom solutions designed specifically to address your unique business challenges.",
                  },
                  {
                    title: "Transparent Communication",
                    description: "We maintain clear, open communication throughout every phase of your project.",
                  },
                  {
                    title: "Ongoing Support",
                    description:
                      "Our relationship doesn't end at launch. We provide continuous support and optimization.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-7 w-7 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  className="text-lg bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg"
                >
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-xl max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    Years Experience
                  </div>
                </div>
                <p className="text-gray-600 text-lg">
                  A decade of excellence delivering premium technology solutions to businesses worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Let's collaborate to bring your vision to life with cutting-edge technology and stunning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 shadow-lg"
            >
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg border-white text-white hover:bg-white/10 rounded-full px-8 py-6"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
