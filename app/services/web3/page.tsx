import HeroSection from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function Web3Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Web3 Development"
        subtitle="Our Services"
        description="Blockchain development, smart contracts, and decentralized applications to power the next generation of the internet."
        buttonText="Get Started"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop"
        gradientColor="green"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Building the Decentralized Future</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Credarix, we specialize in developing Web3 solutions that leverage blockchain technology to create
                transparent, secure, and decentralized applications. Our team of blockchain experts works closely with
                you to understand your specific needs and develop custom solutions that drive real business value.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're looking to launch an NFT marketplace, create a decentralized finance (DeFi) platform, or
                integrate blockchain into your existing business, we have the expertise to bring your vision to life.
              </p>
              <div className="mt-8">
                <Button asChild className="bg-green-600 hover:bg-green-700 rounded-full">
                  <Link href="/contact">
                    Discuss Your Web3 Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1642059483455-bb14d0837a3a?q=80&w=1974&auto=format&fit=crop"
                alt="Web3 Development"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Web3 Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of Web3 development services to help your business leverage the power of
              blockchain technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Contract Development</h3>
              <p className="text-gray-600 mb-4">
                Custom smart contracts for various blockchain platforms including Ethereum, Solana, and Binance Smart
                Chain.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Solidity & Rust development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Security audits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Gas optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">NFT Development</h3>
              <p className="text-gray-600 mb-4">
                End-to-end NFT solutions including marketplaces, collections, and integration with existing platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>ERC-721 & ERC-1155 tokens</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Marketplace development</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Minting & royalty systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">DeFi Development</h3>
              <p className="text-gray-600 mb-4">
                Decentralized finance applications including lending platforms, DEXs, and yield farming protocols.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Liquidity pools</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Staking mechanisms</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <span>Yield optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Blockchain Technologies We Work With</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We have expertise in a wide range of blockchain platforms and technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 12L12 22L22 12L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Ethereum</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 6V18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Solana</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 flex items-center justify-center mb-4">
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 9L14.5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5 9L9.5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-bold">Binance Smart Chain</h3>
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
              <h3 className="font-bold">Polygon</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-bg-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Web3 Project?</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Let's work together to create decentralized solutions that help your business innovate and grow.
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
