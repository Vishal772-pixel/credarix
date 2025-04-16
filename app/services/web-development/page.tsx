import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Web Development"
        subtitle="Our Services"
        description="Custom websites and web applications built with the latest technologies to help your business thrive online."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
        gradientColor="blue"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Modern Web Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Credarix, we specialize in creating custom web solutions that are tailored to your specific business
                needs. Our team of experienced developers uses the latest technologies and best practices to build
                websites and web applications that are fast, secure, and user-friendly.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you need a simple informational website, a complex e-commerce platform, or a custom web
                application, we have the expertise to bring your vision to life.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of web development services to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Website Design & Development</h3>
              <p className="text-gray-600 mb-4">
                Custom website design and development that reflects your brand identity and meets your business
                objectives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>SEO-friendly architecture</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Fast loading speeds</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">E-Commerce Solutions</h3>
              <p className="text-gray-600 mb-4">
                Custom e-commerce websites that provide a seamless shopping experience for your customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Secure payment gateways</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Inventory management</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Customer account management</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-600 mb-4">
                Custom web applications that automate processes and improve efficiency for your business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>User authentication & authorization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Database integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>API development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use the latest technologies to build fast, secure, and scalable web solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
                  alt="React"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="font-bold">React</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
                  alt="Next.js"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="font-bold">Next.js</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?q=80&w=2070&auto=format&fit=crop"
                  alt="Node.js"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="font-bold">Node.js</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070&auto=format&fit=crop"
                  alt="Tailwind CSS"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
              </div>
              <h3 className="font-bold">Tailwind CSS</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Web Project?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let's work together to create a web solution that helps your business grow.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Web Development Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent web development work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop"
                alt="E-commerce Website"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p>Custom shopping experience for a fashion retailer</p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Corporate Website"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Corporate Website</h3>
                <p>Modern web presence for a financial services firm</p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Web Application"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">SaaS Dashboard</h3>
                <p>Complex web application for data analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
