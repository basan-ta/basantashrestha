import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays } from "lucide-react"

export function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Understanding Graph Neural Networks",
      excerpt: "An introduction to GNNs and how they can be used for recommendation systems.",
      date: "April 2, 2025",
      category: "Machine Learning",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "The Future of AI in Education",
      excerpt: "Exploring how artificial intelligence is transforming educational methodologies and outcomes.",
      date: "March 15, 2025",
      category: "Education",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Building Robust IoT Systems",
      excerpt: "Best practices for designing and implementing reliable Internet of Things solutions.",
      date: "February 28, 2025",
      category: "IoT",
      readTime: "10 min read",
    },
  ]

  return (
    <section id="blog" className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Blog</h2>
        <Button variant="outline">View All Posts</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog.id} className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge>{blog.category}</Badge>
                <div className="text-sm text-muted-foreground flex items-center">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  {blog.date}
                </div>
              </div>
              <CardTitle className="mt-2">{blog.title}</CardTitle>
              <CardDescription>{blog.readTime}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{blog.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

