"use client"

import type React from "react"

import { useState } from "react"
import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was an error submitting your form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Get In Touch"
        description="Have a question or want to work with us? Reach out and we'll get back to you as soon as possible."
        buttonText="Send Message"
        buttonLink="#contact-form"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
        gradientColor="blue"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <Card className="shadow-lg border-none overflow-hidden">
              <div className="h-2 bg-blue-600"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mt-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Our friendly team is here to help.</p>
                <a href="mailto:vishal.urban.wheels@gmail.com" className="text-blue-600 hover:underline font-medium">
                  vishal.urban.wheels@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none overflow-hidden">
              <div className="h-2 bg-yellow-500"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mt-4">
                  <Phone className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Mon-Fri from 9am to 6pm.</p>
                <a href="tel:+919769804406" className="text-yellow-600 hover:underline font-medium">
                  +91 9769804406
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none overflow-hidden">
              <div className="h-2 bg-green-600"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mt-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-600 mb-4">Our base of operations.</p>
                <p className="text-green-600 font-medium">Mumbai, India</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-none overflow-hidden">
              <div className="h-2 bg-purple-600"></div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect on LinkedIn</h3>
                <p className="text-gray-600 mb-4">Follow us for updates and services.</p>
                <a
                  href="https://www.linkedin.com/company/credarix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline font-medium"
                >
                  Credarix LinkedIn
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text" id="contact-form">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p>Thank you for contacting us. We'll get back to you shortly.</p>
                  <Button
                    className="mt-4 bg-green-600 hover:bg-green-700 rounded-full"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      className="rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {submitError && <div className="text-red-500 text-sm">{submitError}</div>}
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-full shine-effect"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.6433229747!2d72.74109780863925!3d19.08250320076679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682956544536!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Credarix Office Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto mb-8">
            Whether you have a specific project in mind or just want to explore possibilities, we're here to help you
            succeed.
          </p>
          <Button asChild size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full shine-effect">
            <a href="mailto:vishal.urban.wheels@gmail.com">
              Email Us Directly <Mail className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Office
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our modern workspace in the heart of Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                alt="Office Reception"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop"
                alt="Meeting Room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
                alt="Work Space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
