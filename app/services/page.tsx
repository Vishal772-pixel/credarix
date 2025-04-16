import HeroSection from "@/components/hero-section"
import ServiceCard from "@/components/service-card"
import { Code, Smartphone, Server, Database, Brain, Bot } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: Code,
      link: "/services/web-development",
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: Smartphone,
      link: "/services/app-development",
    },
    {
      title: "DevOps",
      description: "Streamline your development and operations with our DevOps solutions.",
      icon: Server,
      link: "/services/devops",
    },
    {
      title: "Web3",
      description: "Blockchain development, smart contracts, and decentralized applications.",
      icon: Database,
      link: "/services/web3",
    },
    {
      title: "AI Solutions",
      description: "Leverage the power of artificial intelligence for your business.",
      icon: Brain,
      link: "/services/ai",
    },
    {
      title: "AI Agents",
      description: "Custom AI agents and chatbots to automate customer interactions.",
      icon: Bot,
      link: "/services/ai-agents",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our Services"
        subtitle="What We Offer"
        description="Explore our comprehensive range of technology and design services tailored to help your business succeed."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
        gradientColor="blue"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure the success of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">We start by understanding your business, goals, and requirements.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-gray-600">We create a detailed roadmap and strategy for your project.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-gray-600">Our team develops and designs your solution with regular updates.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-gray-600">We provide ongoing maintenance and support after launch.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
