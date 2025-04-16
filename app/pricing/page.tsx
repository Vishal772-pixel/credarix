import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowRight, Check, HelpCircle } from "lucide-react"

export default function PricingPage() {
  const pricingOptions = [
    {
      title: "Startup",
      description: "Perfect for early-stage startups and small businesses.",
      monthlyPrice: "$4,999",
      yearlyPrice: "$49,990",
      yearlyDiscount: "Save $9,998",
      features: [
        "Custom website or application development",
        "Responsive design for all devices",
        "Basic SEO optimization",
        "3 months of maintenance and support",
        "Up to 10 pages or screens",
        "Basic analytics integration",
      ],
      cta: "Get Started",
      popular: false,
      color: "blue",
    },
    {
      title: "Business",
      description: "Ideal for growing businesses with complex requirements.",
      monthlyPrice: "$9,999",
      yearlyPrice: "$99,990",
      yearlyDiscount: "Save $19,998",
      features: [
        "Everything in Startup, plus:",
        "Advanced UI/UX design",
        "E-commerce functionality",
        "Custom integrations with third-party services",
        "6 months of maintenance and support",
        "Up to 25 pages or screens",
        "Advanced analytics and reporting",
        "Performance optimization",
      ],
      cta: "Get Started",
      popular: true,
      color: "purple",
    },
    {
      title: "Enterprise",
      description: "Comprehensive solutions for large organizations.",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      yearlyDiscount: "Contact us for details",
      features: [
        "Everything in Business, plus:",
        "Enterprise-grade architecture",
        "Dedicated project manager",
        "Custom AI and machine learning solutions",
        "Advanced security features",
        "12 months of priority support",
        "Unlimited pages or screens",
        "Performance monitoring and optimization",
        "Custom analytics dashboards",
        "Regular strategy consultations",
      ],
      cta: "Contact Us",
      popular: false,
      color: "green",
    },
  ]

  const faqs = [
    {
      question: "What is included in the development process?",
      answer:
        "Our development process includes requirements gathering, design, development, testing, deployment, and post-launch support. We follow an agile methodology to ensure regular updates and feedback throughout the project.",
    },
    {
      question: "How long does it typically take to complete a project?",
      answer:
        "Project timelines vary based on complexity and scope. A typical website might take 6-8 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes, all our packages include a maintenance and support period. After this period, we offer flexible maintenance plans to ensure your solution continues to perform optimally.",
    },
    {
      question: "Can you work with our existing systems and technologies?",
      answer:
        "Absolutely. We have experience integrating with a wide range of existing systems and technologies. Our team will assess your current infrastructure and recommend the best approach for integration.",
    },
    {
      question: "Do you offer custom pricing for specific requirements?",
      answer:
        "Yes, we understand that every project is unique. We offer custom pricing based on your specific requirements and project scope. Contact us for a personalized quote.",
    },
    {
      question: "What happens if I need changes after the project is completed?",
      answer:
        "We offer flexible support options for post-launch changes and enhancements. Minor changes may be covered under your maintenance plan, while larger changes can be quoted separately.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Transparent Pricing"
        subtitle="Investment Plans"
        description="Flexible pricing options designed to meet the needs of businesses at every stage of growth."
        buttonText="Contact for Custom Quote"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        gradientColor="blue"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Pricing Plans
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Invest in Your Digital Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and goals. All plans include our premium quality and
              dedicated support.
            </p>
          </div>

          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                <TabsTrigger
                  value="monthly"
                  className="px-6 py-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg"
                >
                  Monthly Projects
                </TabsTrigger>
                <TabsTrigger
                  value="yearly"
                  className="px-6 py-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg"
                >
                  Annual Retainer
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingOptions.map((plan, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      plan.popular ? "relative" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <div
                      className={`h-2 ${
                        plan.color === "blue"
                          ? "bg-blue-600"
                          : plan.color === "purple"
                            ? "bg-purple-600"
                            : "bg-green-600"
                      }`}
                    ></div>
                    <CardHeader className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.monthlyPrice}</span>
                        {plan.monthlyPrice !== "Custom" && <span className="text-gray-500">/project</span>}
                      </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check
                              className={`h-5 w-5 mr-3 mt-0.5 ${
                                plan.color === "blue"
                                  ? "text-blue-600"
                                  : plan.color === "purple"
                                    ? "text-purple-600"
                                    : "text-green-600"
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="p-8 pt-0">
                      <Button
                        asChild
                        className={`w-full rounded-full ${
                          plan.color === "blue"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : plan.color === "purple"
                              ? "bg-purple-600 hover:bg-purple-700"
                              : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        <Link href="/contact">
                          {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="yearly" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingOptions.map((plan, index) => (
                  <Card
                    key={index}
                    className={`overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      plan.popular ? "relative" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
                        Most Popular
                      </div>
                    )}
                    <div
                      className={`h-2 ${
                        plan.color === "blue"
                          ? "bg-blue-600"
                          : plan.color === "purple"
                            ? "bg-purple-600"
                            : "bg-green-600"
                      }`}
                    ></div>
                    <CardHeader className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold">{plan.yearlyPrice}</span>
                        {plan.yearlyPrice !== "Custom" && <span className="text-gray-500">/year</span>}
                      </div>
                      {plan.yearlyDiscount !== "Contact us for details" && (
                        <span
                          className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${
                            plan.color === "blue"
                              ? "bg-blue-100 text-blue-600"
                              : plan.color === "purple"
                                ? "bg-purple-100 text-purple-600"
                                : "bg-green-100 text-green-600"
                          }`}
                        >
                          {plan.yearlyDiscount}
                        </span>
                      )}
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <ul className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check
                              className={`h-5 w-5 mr-3 mt-0.5 ${
                                plan.color === "blue"
                                  ? "text-blue-600"
                                  : plan.color === "purple"
                                    ? "text-purple-600"
                                    : "text-green-600"
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="p-8 pt-0">
                      <Button
                        asChild
                        className={`w-full rounded-full ${
                          plan.color === "blue"
                            ? "bg-blue-600 hover:bg-blue-700"
                            : plan.color === "purple"
                              ? "bg-purple-600 hover:bg-purple-700"
                              : "bg-green-600 hover:bg-green-700"
                        }`}
                      >
                        <Link href="/contact">
                          {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-6">
              Need a custom solution? We offer tailored packages to meet your specific requirements.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg"
            >
              <Link href="/contact">
                Contact for Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Common Questions About Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to frequently asked questions about our services, pricing, and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <HelpCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold">{faq.question}</h3>
                    </div>
                    <p className="text-gray-600 pl-9">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Still have questions? We're here to help. Contact our team for more information.
              </p>
              <Button asChild className="text-lg bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-4 shadow-lg">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Let's collaborate to bring your vision to life with cutting-edge technology and stunning design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 shadow-lg"
            >
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg border-white text-white hover:bg-white/10 rounded-full px-8 py-6"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
