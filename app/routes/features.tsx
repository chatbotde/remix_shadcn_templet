import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Footer } from "~/components/footer";
import { 
  MessageSquare, 
  Brain, 
  Sparkles, 
  Zap, 
  Shield, 
  Clock, 
  Eye, 
  Cpu,
  FileText,
  Code,
  Lightbulb,
  Target,
  Users,
  Globe,
  Lock
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Features - Buddy App" },
    { name: "description", content: "Discover the powerful AI features of Buddy App - your intelligent desktop assistant" },
  ];
};

export default function Features() {
  const coreFeatures = [
    {
      title: "Natural Language Processing",
      description: "Have conversations with Buddy using natural language. Ask questions, request help, or just chat about your day.",
      icon: MessageSquare,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950"
    },
    {
      title: "Context Awareness",
      description: "Buddy understands what you're working on and provides relevant assistance based on your current tasks and applications.",
      icon: Eye,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950"
    },
    {
      title: "Idea Generation",
      description: "Get creative ideas, brainstorming help, and innovative solutions for any project or problem you're facing.",
      icon: Lightbulb,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950"
    },
    {
      title: "Real-time Assistance",
      description: "Get instant responses and help without waiting. Buddy works seamlessly in the background of your workflow.",
      icon: Zap,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950"
    },
    {
      title: "Privacy & Security",
      description: "Your conversations and data stay private and secure with end-to-end encryption and local processing.",
      icon: Shield,
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950"
    },
    {
      title: "24/7 Availability",
      description: "Access Buddy anytime, day or night. No more waiting for human support or office hours.",
      icon: Clock,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-950"
    }
  ];

  const advancedFeatures = [
    {
      title: "Code Assistance",
      description: "Get help with programming, debugging, code reviews, and learning new technologies.",
      icon: Code,
      features: ["Syntax highlighting", "Error detection", "Best practices", "Code explanations"]
    },
    {
      title: "Content Creation",
      description: "Write better content with AI-powered suggestions, editing, and creative assistance.",
      icon: FileText,
      features: ["Writing assistance", "Grammar checking", "Style suggestions", "Content ideas"]
    },
    {
      title: "Problem Solving",
      description: "Break down complex problems and find innovative solutions with structured thinking.",
      icon: Target,
      features: ["Step-by-step analysis", "Multiple approaches", "Solution validation", "Learning insights"]
    },
    {
      title: "Learning & Research",
      description: "Learn new concepts, research topics, and get detailed explanations on any subject.",
      icon: Brain,
      features: ["Concept explanations", "Research assistance", "Study guides", "Knowledge synthesis"]
    }
  ];

  const technicalSpecs = [
    {
      title: "Local Processing",
      description: "Most processing happens locally on your device for maximum privacy and speed.",
      icon: Cpu
    },
    {
      title: "Cross-Platform",
      description: "Works seamlessly on Windows, macOS, and Linux with native performance.",
      icon: Globe
    },
    {
      title: "Offline Capability",
      description: "Core features work offline, with cloud sync when connected for enhanced capabilities.",
      icon: Lock
    },
    {
      title: "Team Collaboration",
      description: "Share insights and collaborate with team members while maintaining individual privacy.",
      icon: Users
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Features
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Powerful AI Features
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Experience the future of desktop assistance with AI that truly understands your needs and helps you work smarter, not harder.
            </p>
          </div>
          
          {/* Core Features */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader>
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <feature.icon className={`h-6 w-6 md:h-7 md:w-7 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Advanced Features */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Advanced Capabilities</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                        <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-sm md:text-base mt-1">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2 text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Technical Excellence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-green-500 to-blue-600">
                      <spec.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <CardTitle className="text-base md:text-lg">{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs md:text-sm">
                      {spec.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <CardContent className="pt-6 md:pt-8 px-4 md:px-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Ready to Experience AI Assistance?</h3>
                <p className="text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Download Buddy App today and discover how AI can transform your productivity and creativity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <a href="/download" className="inline-flex w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-3 md:py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all text-sm md:text-base">
                      Download Now
                    </button>
                  </a>
                  <a href="/pricing" className="inline-flex w-full sm:w-auto">
                    <button className="w-full sm:w-auto border border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-950 transition-all text-sm md:text-base">
                      View Pricing
                    </button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 