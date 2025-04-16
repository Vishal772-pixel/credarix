"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "App Development", path: "/services/app-development" },
        { name: "DevOps", path: "/services/devops" },
        { name: "Web3", path: "/services/web3" },
        { name: "AI Solutions", path: "/services/ai" },
        { name: "AI Agents", path: "/services/ai-agents" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    {
      name: "Resources",
      path: "#",
      dropdown: [
        { name: "Blog", path: "/blog" },
        { name: "FAQ", path: "/faq" },
        { name: "Pricing", path: "/pricing" },
        { name: "Careers", path: "/careers" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/95 backdrop-blur-sm shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center z-10">
            <Image src="/logo.png" alt="Credarix Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors flex items-center ${
                      pathname.startsWith(link.path) && link.path !== "#"
                        ? "text-blue-600"
                        : scrolled
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-blue-200"
                    }`}
                    onClick={() => toggleDropdown(link.name)}
                  >
                    {link.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${
                      pathname === link.path
                        ? "text-blue-600"
                        : scrolled
                          ? "text-gray-800 hover:text-blue-600"
                          : "text-white hover:text-blue-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2 bg-white rounded-lg shadow-xl border border-gray-100">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="ml-4 bg-blue-600 hover:bg-blue-700 rounded-full px-6">
              <Link href="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden z-10 text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X size={24} className={scrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu size={24} className={scrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-white z-40 pt-20"
          >
            <div className="flex flex-col h-full p-8 overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100">
                  {link.dropdown ? (
                    <>
                      <button
                        className="flex items-center justify-between w-full py-4 text-lg font-medium text-gray-800"
                        onClick={() => toggleDropdown(link.name)}
                      >
                        {link.name}
                        <ChevronDown
                          className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-4 space-y-2">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.path}
                                  className="block py-2 text-base text-gray-600 hover:text-blue-600"
                                  onClick={closeMenu}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.path}
                      className={`block py-4 text-lg font-medium ${
                        pathname === link.path ? "text-blue-600" : "text-gray-800"
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-8">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 rounded-full py-6 text-lg">
                  <Link href="/contact" onClick={closeMenu}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
