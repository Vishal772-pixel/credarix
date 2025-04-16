import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function AppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="App Development"
        subtitle="Our Services"
        description="Native and cross-platform mobile applications built with cutting-edge technologies for iOS and Android."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=1974&auto=format&fit=crop"
        gradientColor="yellow"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Mobile Solutions for Modern Businesses
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Credarix, we specialize in creating custom mobile applications that help businesses connect with
                their customers, streamline operations, and drive growth. Our team of experienced developers uses the
                latest technologies and best practices to build apps that are intuitive, performant, and visually
                appealing.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you need a native iOS or Android app, a cross-platform solution, or a progressive web app, we
                have the expertise to bring your vision to life.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full">
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                alt="App Development"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our App Development Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of app development services to meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">iOS App Development</h3>
              <p className="text-gray-600 mb-4">
                Native iOS applications built with Swift for iPhone and iPad devices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>Swift and SwiftUI development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>Apple design guidelines</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>App Store submission</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Android App Development</h3>
              <p className="text-gray-600 mb-4">
                Native Android applications built with Kotlin for smartphones and tablets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>Kotlin and Jetpack Compose</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>Material Design principles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>Google Play Store submission</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cross-Platform Development</h3>
              <p className="text-gray-600 mb-4">Build once, deploy everywhere with React Native or Flutter.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>React Native & Flutter</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>Code reusability</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                  <span>Faster time-to-market</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our App Development Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure the success of your mobile app project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-yellow-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business, target audience, and app requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Design</h3>
              <p className="text-gray-600">Our designers create wireframes and high-fidelity mockups for your app.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-600">
                Our developers build your app using the latest technologies and best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Launch & Support</h3>
              <p className="text-gray-600">We help you launch your app and provide ongoing maintenance and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg-yellow text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Let's work together to create a mobile app that helps your business grow.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full shine-effect">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
