import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function AIAgentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="AI Agents"
        subtitle="Our Services"
        description="Custom AI agents and chatbots to automate customer interactions and streamline business processes."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
        gradientColor="purple"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Intelligent Automation for Your Business
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Credarix, we specialize in developing AI agents and chatbots that help businesses automate customer
                interactions, streamline processes, and provide 24/7 support. Our team of AI experts works closely with
                you to understand your specific needs and develop custom solutions that drive real business value.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you need a customer service chatbot, a sales assistant, or a complex AI agent that can handle
                multiple tasks, we have the expertise to bring your vision to life.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-purple-600 hover:bg-purple-700 rounded-full">
                  <Link href="/contact">
                    Discuss Your AI Agent Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1974&auto=format&fit=crop"
                alt="AI Agents"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our AI Agent Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of AI agent and chatbot services to help your business automate and enhance
              customer interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Service Chatbots</h3>
              <p className="text-gray-600 mb-4">
                AI-powered chatbots that provide instant responses to customer inquiries and support requests.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Natural language processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Multi-channel integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sales & Marketing Agents</h3>
              <p className="text-gray-600 mb-4">
                AI agents that help qualify leads, answer product questions, and guide customers through the sales
                process.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Lead qualification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Product recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Conversion optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Process Automation Agents</h3>
              <p className="text-gray-600 mb-4">
                AI agents that automate repetitive tasks and streamline business processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Workflow automation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Data processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                  <span>Reporting and analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">AI Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the latest AI technologies to build intelligent agents and chatbots.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Natural Language Processing</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Machine Learning</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 4L12 14.01L9 11.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Deep Learning</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H9.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9H15.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Computer Vision</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Automate with AI Agents?</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Let's work together to create intelligent AI agents that help your business automate processes and enhance
            customer experiences.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full shine-effect">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
