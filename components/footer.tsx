import Link from "next/link"
import Image from "next/image"
import { Github, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="gradient-bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image src="/logo.png" alt="Credarix Logo" width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Your low cost tech and designing guy. Premium solutions for founders and businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/Vishal772-pixel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/VishalT12094272"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/credarix/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="text-gray-400 hover:text-white transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="text-gray-400 hover:text-white transition-colors">
                  DevOps
                </Link>
              </li>
              <li>
                <Link href="/services/web3" className="text-gray-400 hover:text-white transition-colors">
                  Web3
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className="text-gray-400 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="text-gray-400">
              <p>Email: vishal.urban.wheels@gmail.com</p>
              <p className="mt-2">Phone: +91 9769804406</p>
              <p className="mt-2">Location: Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Credarix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
