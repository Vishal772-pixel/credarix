import Image from "next/image"

const ClientLogos = () => {
  const clients = [
    {
      name: "Tata Consultancy Services",
      // logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Infosys",
      // logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Reliance Industries",
      // logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Wipro",
      // logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop",
    },
    {
      name: "Mahindra Group",
      // logo: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?q=80&w=1974&auto=format&fit=crop",
    },
  ]

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {clients.map((client, index) => (
        <div key={index} className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
        </div>
      ))}
    </div>
  )
}

export default ClientLogos
