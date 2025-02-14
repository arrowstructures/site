import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageProps } from "next";

const blogPosts = {
  "1": {
    id: "1",
    title: "The Future of Sustainable Transportation",
    excerpt: "Exploring innovative approaches to eco-friendly public transit and infrastructure design.",
    content: `
      <p>The transportation sector is undergoing a radical transformation...</p>
    `,
    date: new Date("2024-01-15"),
    image: "/proj3.jpg",
    author: "John Smith",
    category: "Sustainability",
  },
  "2": {
    id: "2",
    title: "Modern Bus Terminal Design Trends 2024",
    excerpt: "Discover the latest trends in bus terminal architecture...",
    content: `
      <p>Bus terminals are evolving from simple waiting areas to sophisticated, multi-functional spaces...</p>
    `,
    date: new Date("2024-01-10"),
    image: "/proj1.jpg",
    author: "Sarah Johnson",
    category: "Design Trends",
  },
  "3": {
    id: "3",
    title: "Smart Transit Hubs: The Next Generation",
    excerpt: "How technology is reshaping the future of public transportation infrastructure.",
    content: `
      <p>The integration of smart technologies is revolutionizing public transportation hubs...</p>
    `,
    date: new Date("2024-01-05"),
    image: "/proj2.jpg",
    author: "Michael Brown",
    category: "Technology",
  },
  "4": {
    id: "4",
    title: "Urban Planning for Better Transit Systems",
    excerpt: "Creating sustainable and efficient public transportation through thoughtful urban design.",
    content: `
      <p>Urban planning plays a pivotal role in the creation of efficient, sustainable, and accessible public transportation systems...</p>
    `,
    date: new Date("2024-01-01"),
    image: "/blog1.jpg",
    author: "Emily Davis",
    category: "Urban Planning",
  },
};

// ✅ Fixed: Ensure params type correctly extends PageProps
export default function BlogPost({ params }: PageProps<{ id: string }>) {
  const post = blogPosts[params.id as keyof typeof blogPosts];

  if (!post) {
    notFound();
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
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="prose prose-stone mx-auto dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
