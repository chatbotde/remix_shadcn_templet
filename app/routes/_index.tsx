import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Download, 
  Sparkles, 
  Zap, 
  Shield, 
  MessageSquare, 
  Brain,
  ArrowRight,
  CheckCircle,
  Users
} from "lucide-react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Buddy - Your Digital Assistant" },
  { name: "description", content: "Meet Buddy, your intelligent digital assistant. Built to make you extraordinarily productive with natural language help." },
];

export default function Index() {
  const features = [
    {
      icon: Brain,
      title: "Natural Language",
      description: "Ask anything in natural language and get instant help"
    },
    {
      icon: Zap,
      title: "Always Ready",
      description: "Buddy is always ready to assist you 24/7"
    },
    {
      icon: Shield,
      title: "Learn Faster",
      description: "Accelerate your learning with AI-powered assistance"
    },
    {
      icon: MessageSquare,
      title: "Extraordinarily Productive",
      description: "Boost your productivity with intelligent automation"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-1">
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <Sparkles className="w-3 h-3 mr-1" />
              Digital Assistant
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
              Built to make you <span className="font-extrabold">extraordinarily productive</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Buddy is always ready to help. You can ask in natural language, learn faster, and achieve more with your intelligent digital assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-lg px-8 py-6">
                <Link to="/download">
                  <Download className="mr-2 h-5 w-5" />
                  Try Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                <Link to="/features">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-black dark:text-white" />
                Always Ready
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-black dark:text-white" />
                Natural Language
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-black dark:text-white" />
                Learn Faster
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Why Choose Buddy?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Experience the future of digital assistance with features designed for extraordinary productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-black">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-black dark:bg-white flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-white dark:text-black" />
                    </div>
                    <CardTitle className="text-lg text-black dark:text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Ready to be Extraordinarily Productive?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Try Buddy today and experience the future of digital assistance.
            </p>
            <Button asChild size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-lg px-8 py-6">
              <Link to="/download">
                <Download className="mr-2 h-5 w-5" />
                Try Now
              </Link>
            </Button>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Available for Windows, macOS, and Linux 
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
