import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = {
  "1": {
    id: "1",
    title: "The Future of Sustainable Transportation",
    excerpt: "Exploring innovative approaches to eco-friendly public transit and infrastructure design.",
    content: `
      <p>The transportation sector is undergoing a radical transformation as cities worldwide seek to reduce their carbon footprint and improve urban mobility. This article explores the cutting-edge innovations and strategies shaping the future of sustainable transportation.</p>

      <h2>1. Electric and Hydrogen-Powered Public Transit</h2>
      <p>Many cities are transitioning their bus fleets to electric or hydrogen fuel cell vehicles. These zero-emission options not only reduce air pollution but also offer quieter operation, enhancing the urban environment.</p>

      <h2>2. Integrated Multimodal Hubs</h2>
      <p>Modern transit hubs are being designed to seamlessly connect various modes of transportation, from buses and trains to bicycles and e-scooters. This integration encourages the use of public transit and reduces reliance on private vehicles.</p>

      <h2>3. Smart Infrastructure</h2>
      <p>The implementation of IoT devices and AI-driven systems is optimizing traffic flow, reducing congestion, and improving the overall efficiency of public transportation networks.</p>

      <h2>4. Green Building Practices in Transportation Architecture</h2>
      <p>New transit facilities are incorporating sustainable building practices, such as solar panels, green roofs, and rainwater harvesting systems, to minimize their environmental impact.</p>

      <h2>Conclusion</h2>
      <p>As we move towards a more sustainable future, the integration of these innovative approaches in transportation infrastructure will play a crucial role in creating more livable, efficient, and environmentally friendly cities.</p>
    `,
    date: new Date("2024-01-15"),
    image: "/proj 3.jpg",
    author: "John Smith",
    category: "Sustainability",
  },
  "2": {
    id: "2",
    title: "Modern Bus Terminal Design Trends 2024",
    excerpt: "Discover the latest trends in bus terminal architecture and passenger experience design.",
    content: `
      <p>Bus terminals are evolving from simple waiting areas to sophisticated, multi-functional spaces that prioritize passenger comfort and operational efficiency. Let's explore the key design trends shaping modern bus terminals in 2024.</p>

      <h2>1. Biophilic Design</h2>
      <p>Incorporating natural elements like living walls, indoor gardens, and ample natural light creates a more pleasant and stress-reducing environment for travelers.</p>

      <h2>2. Smart Wayfinding Systems</h2>
      <p>Digital signage and interactive kiosks are becoming standard, offering real-time information and personalized navigation assistance to passengers.</p>

      <h3>3. Flexible Spaces</h3>
      <p>Modern terminals feature adaptable areas that can be reconfigured for different uses, such as pop-up retail, community events, or additional seating during peak hours.</p>

      <h2>4. Sustainable Materials and Energy Efficiency</h2>
      <p>The use of recycled and locally-sourced materials, along with energy-efficient systems, is reducing the environmental impact of these large-scale structures.</p>

      <h2>5. Integration of Technology</h2>
      <p>From contactless ticketing to AI-powered customer service, technology is streamlining operations and enhancing the passenger experience.</p>

      <h2>Conclusion</h2>
      <p>The bus terminals of 2024 are no longer just transit points but have become destinations in themselves, offering comfort, efficiency, and a glimpse into the future of urban mobility.</p>
    `,
    date: new Date("2024-01-10"),
    image: "/proj 1.jpg",
    author: "Sarah Johnson",
    category: "Design Trends",
  },
  "3": {
    id: "3",
    title: "Smart Transit Hubs: The Next Generation",
    excerpt: "How technology is reshaping the future of public transportation infrastructure.",
    content: `
      <p>The integration of smart technologies is revolutionizing public transportation hubs, creating more efficient, user-friendly, and sustainable transit experiences. This article explores the key technologies and concepts driving the next generation of smart transit hubs.</p>

      <h2>1. IoT and Real-Time Data</h2>
      <p>Internet of Things (IoT) sensors throughout transit hubs provide real-time data on passenger flow, vehicle locations, and facility conditions, enabling dynamic adjustments to improve efficiency.</p>

      <h2>2. Artificial Intelligence and Predictive Analytics</h2>
      <p>AI algorithms analyze historical and real-time data to predict passenger volumes, optimize schedules, and preemptively address potential issues.</p>

      <h2>3. Augmented Reality Wayfinding</h2>
      <p>AR applications guide passengers through complex transit hubs, providing personalized directions and information overlaid on their smartphone cameras.</p>

      <h2>4. Autonomous Vehicles Integration</h2>
      <p>Smart transit hubs are being designed to accommodate and integrate with autonomous buses and shuttles, preparing for the future of transportation.</p>

      <h2>5. Energy Management Systems</h2>
      <p>Advanced energy management systems optimize power usage, integrate renewable energy sources, and even use kinetic energy from passenger movement to power certain systems.</p>

      <h2>Conclusion</h2>
      <p>As these technologies continue to evolve and integrate, smart transit hubs will play a pivotal role in creating more sustainable, efficient, and user-centric urban transportation networks.</p>
    `,
    date: new Date("2024-01-05"),
    image: "/proj 2.jpg",
    author: "Michael Brown",
    category: "Technology",
  },
  "4": {
    id: "4",
    title: "Urban Planning for Better Transit Systems",
    excerpt: "Creating sustainable and efficient public transportation through thoughtful urban design.",
    content: `
      <p>Urban planning plays a pivotal role in the creation of efficient, sustainable, and accessible public transportation systems. In this article, we explore how urban planning can be used to optimize transportation networks and create environments that foster improved mobility for all.</p>

      <h2>1. Integrated Transit Systems</h2>
      <p>By connecting various modes of transportation—such as buses, subways, bikes, and pedestrian pathways—urban planners can create a seamless, multimodal experience. This approach reduces reliance on private vehicles and encourages the use of public transit.</p>

      <h2>2. Transit-Oriented Development (TOD)</h2>
      <p>Transit-oriented development focuses on creating mixed-use communities near transit hubs. This strategy promotes higher-density housing, retail, and office spaces in close proximity to transit stations, reducing the need for long commutes and fostering more walkable neighborhoods.</p>

      <h2>3. Prioritizing Pedestrian and Cyclist Infrastructure</h2>
      <p>Urban planning should prioritize the needs of pedestrians and cyclists by creating safe, accessible pathways. This encourages active transportation methods, such as walking and biking, contributing to healthier, more sustainable urban environments.</p>

      <h2>4. Sustainable and Green Infrastructure</h2>
      <p>Incorporating green infrastructure, such as parks, green roofs, and rainwater management systems, helps mitigate the environmental impact of urbanization. Green spaces provide recreational areas and improve air quality, making cities more livable.</p>

      <h2>5. Smart Transportation Networks</h2>
      <p>Leveraging data and technology can transform urban transportation. Smart traffic lights, real-time tracking systems, and predictive analytics optimize transit flow, reduce congestion, and improve overall efficiency. The integration of autonomous vehicles also promises to reshape how cities plan for future mobility.</p>

      <h2>Conclusion</h2>
      <p>Urban planning for better transit systems is a crucial aspect of creating sustainable cities. Thoughtful planning ensures that public transportation networks are accessible, efficient, and environmentally friendly, contributing to a better quality of life for all urban residents.</p>
    `,
    date: new Date("2024-01-01"),
    image: "/blog1.jpg?height=400&width=600",
    author: "Emily Davis",
    category: "Urban Planning",
  },
}

export default function BlogPost({ params }: { params: { id: string } }) {
    const post = blogPosts[params.id as keyof typeof blogPosts] 

  if (!post) {
    notFound()
  }

  return (
    <article className="container py-12 md:py-24">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <time dateTime={post.date.toISOString()}>{format(post.date, "MMMM d, yyyy")}</time>
            <span>{post.category}</span>
            <span>By {post.author}</span>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div
          className="prose prose-stone mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
