"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Credarix transformed our digital presence completely. Their team delivered a sophisticated platform that exceeded our expectations and has significantly improved our customer engagement.",
    author: "Rajesh Sharma",
    title: "CEO, TechVision India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    quote:
      "Working with Credarix was a game-changer for our startup. Their expertise in both design and development helped us launch a product that our users love and investors are excited about.",
    author: "Priya Patel",
    title: "Founder, InnovateLabs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    quote:
      "The AI solution Credarix built for us has revolutionized how we analyze customer data. We've seen a 40% increase in conversion rates since implementation. Truly exceptional work.",
    author: "Vikram Mehta",
    title: "CTO, DataSmart Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    quote:
      "Credarix's team understood our complex requirements and delivered a secure, scalable platform that has become the backbone of our operations. Their ongoing support has been invaluable.",
    author: "Ananya Desai",
    title: "Director of Technology, Global Finance Group",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
]

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute -top-16 left-0 text-blue-600/10">
        <Quote size={120} />
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl p-8 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].author}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-xl md:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                "{testimonials[current].quote}"
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">{testimonials[current].author}</h3>
              <p className="text-blue-600 font-medium">{testimonials[current].title}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 right-6 flex space-x-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-blue-600 w-10" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel
