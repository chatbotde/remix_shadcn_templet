import type { MetaFunction } from "@remix-run/node";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Footer } from "~/components/footer";
import { 
  MessageSquare, 
  Sparkles, 
  Zap, 
  Shield, 
  Clock, 
  Eye, 
  Cpu,
  Users,
  Globe,
  Lock,
  Lightbulb
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Features - Buddy" },
    { name: "description", content: "Discover the powerful features of Buddy - your extraordinarily productive digital assistant" },
  ];
};

export default function Features() {
  const coreFeatures = [
    {
      title: "Natural Language Processing",
      description: "Have conversations with Buddy using natural language. Ask questions, request help, or just chat about your day.",
      icon: MessageSquare
    },
    {
      title: "Context Awareness",
      description: "Buddy understands what you're working on and provides relevant assistance based on your current tasks and applications.",
      icon: Eye
    },
    {
      title: "Idea Generation",
      description: "Get creative ideas, brainstorming help, and innovative solutions for any project or problem you're facing.",
      icon: Lightbulb
    },
    {
      title: "Real-time Assistance",
      description: "Get instant responses and help without waiting. Buddy works seamlessly in the background of your workflow.",
      icon: Zap
    },
    {
      title: "Privacy & Security",
      description: "Your conversations and data stay private and secure with end-to-end encryption and local processing.",
      icon: Shield
    },
    {
      title: "24/7 Availability",
      description: "Access Buddy anytime, day or night. No more waiting for human support or office hours.",
      icon: Clock
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
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8 pt-40">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <Sparkles className="w-3 h-3 mr-1" />
              Powerful Features
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-black dark:text-white">
              Extraordinarily Productive
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Experience the future of digital assistance with features that truly understand your needs and help you work smarter, not harder.
            </p>
          </div>
          
          {/* Core Features */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-black dark:text-white">Core Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {coreFeatures.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-black">
                  <CardHeader>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-black dark:bg-white flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 md:h-7 md:w-7 text-white dark:text-black" />
                    </div>
                    <CardTitle className="text-lg md:text-xl text-black dark:text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-black dark:text-white">Technical Excellence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {technicalSpecs.map((spec, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-black">
                  <CardHeader>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-black dark:bg-white flex items-center justify-center mx-auto">
                      <spec.icon className="h-5 w-5 md:h-6 md:w-6 text-white dark:text-black" />
                    </div>
                    <CardTitle className="text-base md:text-lg text-black dark:text-white">{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      {spec.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="border border-gray-200 dark:border-gray-700 shadow-xl bg-gray-50 dark:bg-gray-900">
              <CardContent className="pt-6 md:pt-8 px-4 md:px-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-black dark:text-white">Ready to be Extraordinarily Productive?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-6 max-w-2xl mx-auto text-sm md:text-base">
                  Download Buddy today and discover how AI can transform your productivity and creativity.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <a href="/download" className="inline-flex w-full sm:w-auto">
                    <button className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-6 md:px-8 py-3 md:py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all text-sm md:text-base">
                      Download Now
                    </button>
                  </a>
                  <a href="/pricing" className="inline-flex w-full sm:w-auto">
                    <button className="w-full sm:w-auto border border-black dark:border-white text-black dark:text-white px-6 md:px-8 py-3 md:py-3 rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all text-sm md:text-base">
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