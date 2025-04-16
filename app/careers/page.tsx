import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MapPin } from "lucide-react"

export default function CareersPage() {
  const departments = [
    { id: "all", label: "All Departments" },
    { id: "engineering", label: "Engineering" },
    { id: "design", label: "Design" },
    { id: "product", label: "Product" },
    { id: "marketing", label: "Marketing" },
  ]

  const openings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "engineering",
      location: "Mumbai, India (Remote)",
      type: "Full-time",
      description:
        "We're looking for an experienced Full Stack Developer to join our engineering team and help build innovative solutions for our clients.",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "design",
      location: "Mumbai, India (Hybrid)",
      type: "Full-time",
      description:
        "Join our design team to create beautiful, intuitive user experiences for web and mobile applications.",
    },
    {
      id: 3,
      title: "Product Manager",
      department: "product",
      location: "Mumbai, India (On-site)",
      type: "Full-time",
      description:
        "Lead product development initiatives and work closely with engineering and design teams to deliver exceptional products.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Mumbai, India (Remote)",
      type: "Full-time",
      description:
        "Help us build and maintain our cloud infrastructure and deployment pipelines for enterprise-grade applications.",
    },
    {
      id: 5,
      title: "Digital Marketing Specialist",
      department: "marketing",
      location: "Mumbai, India (Hybrid)",
      type: "Full-time",
      description:
        "Drive our digital marketing efforts to reach new clients and showcase our expertise in technology and design.",
    },
    {
      id: 6,
      title: "Mobile Developer (iOS/Android)",
      department: "engineering",
      location: "Mumbai, India (Remote)",
      type: "Full-time",
      description:
        "Develop native and cross-platform mobile applications for iOS and Android using the latest technologies.",
    },
  ]

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "We offer industry-leading salaries and equity packages to attract and retain top talent.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs to keep you at your best.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Flexible Work",
      description: "Remote-friendly policies and flexible schedules to help you maintain work-life balance.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Professional Growth",
      description: "Continuous learning opportunities, conference budgets, and career development paths.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Global Team Events",
      description: "Regular team retreats and events to connect with colleagues from around the world.",
      icon: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Modern Equipment",
      description: "Top-of-the-line hardware and software to help you do your best work.",
      icon: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Join Our Team"
        subtitle="Careers at Credarix"
        description="Build your career with us and work on cutting-edge technology projects that make a difference."
        buttonText="View Open Positions"
        buttonLink="#openings"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        gradientColor="green"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-green-600 font-semibold tracking-wider uppercase text-lg mb-2">
                Why Join Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Work with the Best on Meaningful Projects
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                At Credarix, we're building a team of exceptional individuals who are passionate about technology and
                design. Join us to work on challenging projects for global clients while growing your skills and career.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Innovative Environment",
                    description:
                      "Work with cutting-edge technologies and contribute to innovative solutions that make an impact.",
                  },
                  {
                    title: "Growth Opportunities",
                    description:
                      "Continuous learning, mentorship, and clear career paths to help you reach your full potential.",
                  },
                  {
                    title: "Collaborative Culture",
                    description:
                      "A supportive team environment where ideas are valued and collaboration is encouraged.",
                  },
                  {
                    title: "Work-Life Balance",
                    description:
                      "Flexible work arrangements and policies designed to help you maintain a healthy balance.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-7 w-7 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Our Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-8 shadow-xl max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-green-600">4.8/5</div>
                  <div className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                    Employee Rating
                  </div>
                </div>
                <p className="text-gray-600 text-lg">
                  Our team members rate their experience working at Credarix highly, citing our culture and growth
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50" id="openings">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Open Positions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Check out our current openings below.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100 p-1 rounded-full">
                {departments.map((department) => (
                  <TabsTrigger
                    key={department.id}
                    value={department.id}
                    className="px-6 py-2 rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white text-lg"
                  >
                    {department.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {departments.map((department) => (
              <TabsContent key={department.id} value={department.id} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {openings
                    .filter((opening) => department.id === "all" || opening.department === department.id)
                    .map((opening) => (
                      <Card
                        key={opening.id}
                        className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <CardContent className="p-8">
                          <div className="mb-4 flex items-center justify-between">
                            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                              {opening.type}
                            </span>
                            <span className="inline-block bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                              {departments.find((d) => d.id === opening.department)?.label}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{opening.title}</h3>
                          <div className="flex items-center text-gray-500 mb-4">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span>{opening.location}</span>
                          </div>
                          <p className="text-gray-600 mb-6">{opening.description}</p>
                          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 rounded-full">
                            <Link href={`/careers/job-${opening.id}`}>
                              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Benefits & Perks
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Why You'll Love Working Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive benefits package designed to support your well-being and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6">
                    <Image src={benefit.icon || "/placeholder.svg"} alt={benefit.title} width={80} height={80} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Explore our open positions and take the next step in your career with Credarix.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-6 shadow-lg"
          >
            <Link href="#openings">
              View Open Positions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
