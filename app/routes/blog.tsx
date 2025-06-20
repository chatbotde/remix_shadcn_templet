import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight,
  Clock,
  Tag
} from "lucide-react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Blog - Buddy" },
  { name: "description", content: "Latest insights, updates, and stories about Buddy - your digital assistant." },
];

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Introducing Buddy: Your Extraordinarily Productive Digital Assistant",
      excerpt: "Meet Buddy, the AI-powered digital assistant designed to make you extraordinarily productive. Learn how natural language interactions can transform your workflow.",
      author: "Buddy Team",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Product Launch",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "How Buddy Helps You Learn Faster",
      excerpt: "Discover the learning acceleration features that make Buddy more than just an assistant - it's your personal knowledge partner.",
      author: "Buddy Team",
      date: "2024-01-12",
      readTime: "4 min read",
      category: "Features",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Natural Language: The Future of Human-AI Interaction",
      excerpt: "Why we built Buddy to understand natural language and how it makes your interactions more intuitive and productive.",
      author: "Buddy Team",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Technology",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Always Ready: 24/7 Assistance with Buddy",
      excerpt: "How Buddy's always-on availability ensures you never have to wait for help when you need it most.",
      author: "Buddy Team",
      date: "2024-01-08",
      readTime: "3 min read",
      category: "Features",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "The Making of Buddy: Our Development Journey",
      excerpt: "Behind the scenes of how we built Buddy from concept to reality, and the challenges we overcame.",
      author: "Buddy Team",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Behind the Scenes",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Productivity Tips: Getting the Most Out of Buddy",
      excerpt: "Expert tips and tricks to maximize your productivity with Buddy's intelligent assistance features.",
      author: "Buddy Team",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Tips & Tricks",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    "All",
    "Product Launch",
    "Features",
    "Technology",
    "Behind the Scenes",
    "Tips & Tricks"
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <Tag className="w-3 h-3 mr-1" />
              Buddy Stories & Updates
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
              Buddy Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Discover insights, updates, and stories about Buddy - your extraordinarily productive digital assistant.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-black dark:text-white"
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <Badge 
                  key={index} 
                  variant={index === 0 ? "default" : "secondary"}
                  className={`cursor-pointer transition-colors ${
                    index === 0 
                      ? 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200' 
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden bg-white dark:bg-black">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gray-100 dark:bg-gray-900 p-8 flex items-center justify-center">
                    <div className="text-black dark:text-white text-center">
                      <div className="text-6xl mb-4">📝</div>
                      <p className="text-lg opacity-90">Featured Article</p>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <Badge variant="secondary" className="mb-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-2xl mb-4 text-black dark:text-white">{post.title}</CardTitle>
                    <CardDescription className="text-base mb-6 text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-black">
                  <div className="bg-gray-100 dark:bg-gray-900 h-48 flex items-center justify-center">
                    <div className="text-4xl">📄</div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg mb-3 line-clamp-2 text-black dark:text-white">{post.title}</CardTitle>
                    <CardDescription className="text-sm mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <Card className="border border-gray-200 dark:border-gray-700 shadow-xl max-w-2xl mx-auto bg-white dark:bg-black">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Stay Updated</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Get the latest updates about Buddy and productivity tips delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-black dark:text-white" 
                  />
                  <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 