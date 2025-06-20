import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Users, 
  Target, 
  Heart, 
  Zap, 
  Globe,
  ArrowRight,
  Award,
  CheckCircle,
  Star,
  Lightbulb
} from "lucide-react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "About - Buddy AI Assistant" },
  { name: "description", content: "Learn about Buddy's mission to make AI assistance accessible, private, and powerful for everyone." },
];

export default function About() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      bio: "Former AI researcher at Google, passionate about making AI accessible to everyone.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Chen",
      role: "CTO & Co-founder",
      bio: "Ex-Microsoft engineer with 10+ years in machine learning and distributed systems.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "Product leader with experience at Slack and Notion, focused on user experience.",
      avatar: "👩‍🎨"
    },
    {
      name: "David Wilson",
      role: "Head of Engineering",
      bio: "Full-stack engineer with expertise in React, TypeScript, and AI integration.",
      avatar: "👨‍🔧"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Started with a vision to make AI assistance private and accessible"
    },
    {
      year: "2024",
      title: "First Release",
      description: "Launched Buddy v1.0 with core AI assistant features"
    },
    {
      year: "2024",
      title: "10,000 Users",
      description: "Reached our first major milestone of active users"
    },
    {
      year: "2024",
      title: "Enterprise Launch",
      description: "Introduced enterprise solutions for teams and organizations"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "User Privacy First",
      description: "We believe your data should stay yours. All processing happens locally on your device."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI technology."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Making powerful AI tools available to everyone, regardless of technical background."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building tools that help millions of people be more productive and creative."
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
              <Users className="w-3 h-3 mr-1" />
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              About Buddy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're on a mission to make AI assistance accessible, private, and powerful for everyone. 
              Buddy is more than just an AI assistant—it's your intelligent companion for productivity and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                <Link to="/download">
                  Try Buddy Free
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/careers">
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that AI should enhance human capabilities, not replace them. Our mission is to create 
                  intelligent tools that work seamlessly with your existing workflow, respect your privacy, and 
                  help you achieve more than you thought possible.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  From students to professionals, creators to developers, Buddy is designed to be your 
                  intelligent companion—always ready to help, always learning, and always putting your privacy first.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Privacy-first design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Local AI processing</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Empowering Human Potential</h3>
                <p className="text-lg opacity-90">
                  We're building the future where AI works for you, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we build and every decision we make.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">{value.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {value.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate individuals working together to build the future of AI assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{member.avatar}</div>
                    <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                    <CardDescription className="text-sm mb-3">{member.role}</CardDescription>
                    <p className="text-xs text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to democratize AI assistance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <CardTitle className="text-lg mb-2">{milestone.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {milestone.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container mx-auto text-center">
            <Card className="border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join Us on This Journey</h3>
                <p className="text-muted-foreground mb-6">
                  Be part of the future of AI assistance. Download Buddy today and experience the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Link to="/download">
                      Download Buddy
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/careers">
                      Join Our Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
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