import HeroSection from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Explore how artificial intelligence is transforming enterprise software development and what it means for businesses.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Dr. Rajiv Mehta",
    category: "Artificial Intelligence",
  }

  const posts = [
    {
      id: 2,
      title: "Building Scalable Web Applications with Next.js",
      excerpt:
        "Learn how to leverage Next.js to build high-performance, scalable web applications for enterprise clients.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      date: "April 28, 2023",
      readTime: "6 min read",
      author: "Vikram Singh",
      category: "Web Development",
    },
    {
      id: 3,
      title: "The Rise of Decentralized Finance (DeFi) Applications",
      excerpt:
        "An in-depth look at how DeFi is disrupting traditional financial systems and creating new opportunities.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
      date: "April 15, 2023",
      readTime: "10 min read",
      author: "Ananya Desai",
      category: "Blockchain",
    },
    {
      id: 4,
      title: "Designing for Accessibility: Best Practices for Inclusive UX",
      excerpt:
        "Why accessibility should be a priority in your design process and how to implement inclusive design principles.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop",
      date: "March 30, 2023",
      readTime: "7 min read",
      author: "Priya Patel",
      category: "Design",
    },
    {
      id: 5,
      title: "Mobile App Development Trends to Watch in 2023",
      excerpt:
        "Stay ahead of the curve with these emerging trends that are shaping the future of mobile application development.",
      image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?q=80&w=1974&auto=format&fit=crop",
      date: "March 18, 2023",
      readTime: "5 min read",
      author: "Rahul Sharma",
      category: "Mobile Development",
    },
    {
      id: 6,
      title: "Implementing DevOps Practices for Enterprise Applications",
      excerpt:
        "A comprehensive guide to implementing DevOps practices to improve efficiency and reduce time-to-market.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop",
      date: "March 5, 2023",
      readTime: "9 min read",
      author: "Arjun Kapoor",
      category: "DevOps",
    },
    {
      id: 7,
      title: "The Impact of 5G on IoT Development",
      excerpt:
        "How 5G technology is revolutionizing IoT development and opening new possibilities for connected devices.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      date: "February 22, 2023",
      readTime: "6 min read",
      author: "Neha Gupta",
      category: "IoT",
    },
  ]

  const categories = [
    "All Categories",
    "Artificial Intelligence",
    "Web Development",
    "Mobile Development",
    "Blockchain",
    "Design",
    "DevOps",
    "IoT",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Our Blog"
        subtitle="Insights & Resources"
        description="Stay updated with the latest trends, insights, and best practices in technology and design."
        buttonText="Subscribe to Newsletter"
        buttonLink="#subscribe"
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
        gradientColor="purple"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-purple-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Featured Article
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Latest Insights from Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive into our collection of articles, guides, and thought leadership pieces on technology and design.
            </p>
          </div>

          <div className="mb-20">
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <span className="inline-block bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-gray-500 mb-6 text-sm">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/post-${featuredPost.id}`}
                    className="inline-flex items-center text-lg font-medium text-purple-600 hover:underline"
                  >
                    Read Full Article <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-full text-lg transition-colors ${
                    index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-gray-500 mb-4 text-sm">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <Link href={`/blog/post-${post.id}`} className="text-blue-600 hover:underline font-medium">
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="text-lg bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg"
            >
              <Link href="/blog/archive">
                View All Articles <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50" id="subscribe">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-blue-600 font-semibold tracking-wider uppercase text-lg mb-2">
              Stay Updated
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest insights, articles, and resources delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Button className="text-lg bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-6 shadow-lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Content Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind our insightful articles and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Rajiv Mehta",
                role: "AI Specialist",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Priya Patel",
                role: "UX Design Expert",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              },
              {
                name: "Vikram Singh",
                role: "Web Development Lead",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Ananya Desai",
                role: "Blockchain Researcher",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
              },
            ].map((writer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={writer.image || "/placeholder.svg"}
                    alt={writer.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{writer.name}</h3>
                  <p className="text-blue-600">{writer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
