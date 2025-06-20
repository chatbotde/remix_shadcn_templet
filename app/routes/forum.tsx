import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Clock, 
  User,
  Plus,
  Search,
  Filter,
  ArrowRight,
  ThumbsUp,
  MessageCircle
} from "lucide-react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Community Forum - Buddy AI Assistant" },
  { name: "description", content: "Join the Buddy community forum to connect with other users, share tips, and get help." },
];

export default function Forum() {
  const categories = [
    {
      name: "General Discussion",
      description: "General topics about Buddy and AI assistants",
      icon: "💬",
      postCount: 156,
      color: "bg-blue-500"
    },
    {
      name: "Tips & Tricks",
      description: "Share and discover productivity tips",
      icon: "💡",
      postCount: 89,
      color: "bg-green-500"
    },
    {
      name: "Feature Requests",
      description: "Suggest new features and improvements",
      icon: "🚀",
      postCount: 234,
      color: "bg-purple-500"
    },
    {
      name: "Help & Support",
      description: "Get help with Buddy and troubleshooting",
      icon: "🆘",
      postCount: 67,
      color: "bg-orange-500"
    },
    {
      name: "Showcase",
      description: "Share your creative uses of Buddy",
      icon: "✨",
      postCount: 45,
      color: "bg-pink-500"
    },
    {
      name: "Announcements",
      description: "Official updates and announcements",
      icon: "📢",
      postCount: 23,
      color: "bg-red-500"
    }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "How I use Buddy for daily task management",
      author: "Sarah Johnson",
      category: "Tips & Tricks",
      replies: 12,
      views: 156,
      lastActivity: "2 hours ago",
      isPinned: true
    },
    {
      id: 2,
      title: "Feature request: Calendar integration",
      author: "Mike Chen",
      category: "Feature Requests",
      replies: 8,
      views: 89,
      lastActivity: "4 hours ago",
      isPinned: false
    },
    {
      id: 3,
      title: "Buddy helped me write my thesis!",
      author: "Emily Rodriguez",
      category: "Showcase",
      replies: 15,
      views: 234,
      lastActivity: "6 hours ago",
      isPinned: false
    },
    {
      id: 4,
      title: "Installation issues on Windows 11",
      author: "David Wilson",
      category: "Help & Support",
      replies: 5,
      views: 67,
      lastActivity: "8 hours ago",
      isPinned: false
    },
    {
      id: 5,
      title: "Privacy concerns and data handling",
      author: "Lisa Park",
      category: "General Discussion",
      replies: 23,
      views: 189,
      lastActivity: "1 day ago",
      isPinned: false
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              <MessageSquare className="w-3 h-3 mr-1" />
              Community Forum
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Buddy Community
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Connect with fellow Buddy users, share tips, ask questions, and be part of our growing community.
            </p>
            
            {/* Search and Actions */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="Search discussions..." 
                    className="pl-10 pr-4 py-3"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Post
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Forum Categories */}
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8">Forum Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white text-2xl`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{category.name}</CardTitle>
                        <CardDescription className="text-sm mb-3">
                          {category.description}
                        </CardDescription>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{category.postCount} posts</span>
                          <ArrowRight className="h-3 w-3" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Discussions */}
        <section className="px-4 pb-16 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Recent Discussions</h2>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <Card key={post.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {post.isPinned && (
                            <Badge variant="secondary" className="text-xs">
                              Pinned
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mb-2 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            {post.replies} replies
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {post.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.lastActivity}
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                View All Discussions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
                  <CardDescription>Active Members</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">614</div>
                  <CardDescription>Total Posts</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1,234</div>
                  <CardDescription>Replies</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">89</div>
                  <CardDescription>Topics Today</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Join Community CTA */}
        <section className="px-4 pb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container mx-auto text-center">
            <Card className="border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join the Conversation</h3>
                <p className="text-muted-foreground mb-6">
                  Share your experiences, ask questions, and connect with other Buddy users from around the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Start a Discussion
                  </Button>
                  <Button variant="outline" size="lg">
                    Browse Topics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 