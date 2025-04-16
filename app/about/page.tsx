import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="About Credarix"
        subtitle="Our Story"
        description="Learn about our journey, our mission, and the team behind Credarix."
        buttonText="Contact Us"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
        gradientColor="purple"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Credarix, our mission is to provide affordable, high-quality technology and design solutions to
                founders and businesses of all sizes. We believe that cutting-edge technology should be accessible to
                everyone, not just large corporations with big budgets.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We are a group of expert tech and designing guys, giving the best services across the world. Our team
                combines technical expertise with creative vision to deliver solutions that not only meet but exceed our
                clients' expectations.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're a startup founder looking to build your first product or an established business seeking
                to modernize your digital presence, Credarix is here to help you succeed.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Credarix Mission"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Credarix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-none overflow-hidden">
              <div className="h-2 bg-blue-600 -mx-8 -mt-8 mb-6"></div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every solution we deliver is built to the highest standards of
                performance, security, and user experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-none overflow-hidden">
              <div className="h-2 bg-yellow-500 -mx-8 -mt-8 mb-6"></div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay at the forefront of technology, constantly exploring new tools and techniques to deliver
                innovative solutions to our clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-none overflow-hidden">
              <div className="h-2 bg-purple-600 -mx-8 -mt-8 mb-6"></div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients, treating them as partners in the development process to
                ensure their vision is realized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As a team of expert tech and designing professionals, we offer a wide range of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-none overflow-hidden">
              <div className="h-2 bg-blue-600 -mx-8 -mt-8 mb-6"></div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-gray-600">Custom websites and web applications built with the latest technologies.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-none overflow-hidden">
              <div className="h-2 bg-yellow-500 -mx-8 -mt-8 mb-6"></div>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">App Development</h3>
              <p className="text-gray-600">Native and cross-platform mobile applications for iOS and Android.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-none overflow-hidden">
              <div className="h-2 bg-green-600 -mx-8 -mt-8 mb-6"></div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web3 & Blockchain</h3>
              <p className="text-gray-600">Blockchain development, smart contracts, and decentralized applications.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border-none overflow-hidden">
              <div className="h-2 bg-purple-600 -mx-8 -mt-8 mb-6"></div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
              <p className="text-gray-600">Leverage the power of artificial intelligence for your business.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Global Reach, Local Touch</h2>
              <p className="text-lg text-gray-600 mb-6">
                Based in Mumbai, India, our team of expert tech and designing professionals provides services to clients
                around the world. We combine our global perspective with a deep understanding of local markets to
                deliver solutions that resonate with audiences everywhere.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our international client base spans across various industries, from startups to established enterprises,
                all benefiting from our expertise and commitment to excellence.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-full shine-effect">
                  <Link href="/contact">
                    Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop"
                  alt="Global Reach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect With Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow us on LinkedIn to stay updated with our latest projects and services.
            </p>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-2 bg-blue-600"></div>
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Credarix on LinkedIn</h3>
              <p className="text-gray-600 mb-6">
                Connect with us on LinkedIn to discuss our services, learn about our latest projects, and stay updated
                with industry trends.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 rounded-full">
                <a href="https://www.linkedin.com/company/credarix/" target="_blank" rel="noopener noreferrer">
                  Visit Our LinkedIn Page
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Let's collaborate to bring your vision to life with cutting-edge technology and stunning design.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full shine-effect">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented professionals are the heart of Credarix.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Vishal Sharma",
                position: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Ananya Patel",
                position: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              },
              {
                name: "Rahul Mehta",
                position: "Lead Designer",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Priya Singh",
                position: "Project Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
