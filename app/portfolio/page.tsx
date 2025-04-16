import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

export default function PortfolioPage() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI Solutions" },
    { id: "web3", label: "Web3 & Blockchain" },
  ]

  const projects = [
    {
      id: 1,
      title: "Enterprise E-commerce Platform",
      category: "web",
      description:
        "A comprehensive e-commerce solution for a global retail brand with advanced inventory management and customer analytics.",
      image: "/placeholder.svg?height=600&width=800",
      client: "Global Retail Inc.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      id: 2,
      title: "Healthcare Mobile Application",
      category: "mobile",
      description:
        "A patient-centered healthcare app improving medical access with appointment scheduling and telemedicine features.",
      image: "/placeholder.svg?height=600&width=800",
      client: "MediCare Solutions",
      technologies: ["React Native", "Firebase", "Swift", "Kotlin"],
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      category: "ai",
      description:
        "Advanced analytics platform using AI to deliver business insights and predictive modeling for decision making.",
      image: "/placeholder.svg?height=600&width=800",
      client: "DataSmart Analytics",
      technologies: ["Python", "TensorFlow", "React", "D3.js"],
    },
    {
      id: 4,
      title: "NFT Marketplace Platform",
      category: "web3",
      description:
        "A decentralized marketplace for digital artists to create, sell and trade NFTs with secure blockchain transactions.",
      image: "/placeholder.svg?height=600&width=800",
      client: "ArtChain Global",
      technologies: ["Solidity", "Ethereum", "IPFS", "React"],
    },
    {
      id: 5,
      title: "Financial Services Portal",
      category: "web",
      description:
        "A secure, high-performance portal for financial services with real-time data processing and regulatory compliance.",
      image: "/placeholder.svg?height=600&width=800",
      client: "Global Finance Group",
      technologies: ["Angular", "Java Spring", "Oracle", "Docker"],
    },
    {
      id: 6,
      title: "Augmented Reality Shopping App",
      category: "mobile",
      description:
        "An innovative AR shopping experience allowing users to visualize products in their space before purchasing.",
      image: "/placeholder.svg?height=600&width=800",
      client: "FutureShop Retail",
      technologies: ["ARKit", "ARCore", "Unity", "Swift"],
    },
    {
      id: 7,
      title: "Smart Contract Management System",
      category: "web3",
      description:
        "A blockchain-based system for managing and executing smart contracts with multi-signature security features.",
      image: "/placeholder.svg?height=600&width=800",
      client: "SecureChain Solutions",
      technologies: ["Solidity", "Web3.js", "React", "Node.js"],
    },
    {
      id: 8,
      title: "Natural Language Processing API",
      category: "ai",
      description:
        "A sophisticated NLP API for sentiment analysis, entity recognition, and automated content classification.",
      image: "/placeholder.svg?height=600&width=800",
      client: "TextSmart Technologies",
      technologies: ["Python", "BERT", "FastAPI", "Docker"],
    },
    {
      id: 9,
      title: "Supply Chain Management Platform",
      category: "web",
      description:
        "End-to-end supply chain management platform with IoT integration for real-time tracking and inventory optimization.",
      image: "/placeholder.svg?height=600&width=800",
      client: "LogisticsPro International",
      technologies: ["React", "Node.js", "MongoDB", "IoT"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our Portfolio"
        subtitle="Case Studies"
        description="Explore our diverse portfolio of successful projects across various industries and technologies."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        gradientColor="blue"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transforming Businesses Through Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've helped businesses across industries leverage technology to achieve their goals. Explore our case
              studies to see how we can help you.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-6 py-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter((project) => category.id === "all" || project.category === category.id)
                    .map((project) => {
                      const item = project.id
                      return (
                        <Card
                          key={project.id}
                          className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                          <div className="relative h-64 overflow-hidden">
                            <Image
                              src={
                                item === 1
                                  ? "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop"
                                  : item === 2
                                    ? "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
                                    : "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop"
                              }
                              alt={`Project ${item}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                              <div className="text-white">
                                <p className="font-medium">Client: {project.client}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {project.technologies.map((tech, index) => (
                                    <span
                                      key={index}
                                      className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-8">
                            <div className="mb-4">
                              <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                                {categories.find((c) => c.id === project.category)?.label}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                            <Link
                              href={`/portfolio/project-${project.id}`}
                              className="inline-flex items-center text-lg font-medium text-blue-600 hover:underline"
                            >
                              View Case Study <ChevronRight className="ml-1 h-5 w-5" />
                            </Link>
                          </CardContent>
                        </Card>
                      )
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Let's collaborate to create a solution that drives your business forward with cutting-edge technology and
            stunning design.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 shadow-lg"
          >
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
