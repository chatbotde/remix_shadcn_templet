import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Download as DownloadIcon, 
  CheckCircle, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Download - Buddy App" },
    { name: "description", content: "Download Buddy App - Your AI assistant for laptop. Available for Windows, macOS, and Linux." },
  ];
};

export default function Download() {
  const platforms = [
    {
      name: "Windows",
      version: "v2.1.0",
      size: "45.2 MB",
      description: "For Windows 10 and 11",
      icon: "🪟",
      downloadUrl: "#",
      requirements: "Windows 10 (64-bit) or later",
      popular: true
    },
    {
      name: "macOS",
      version: "v2.1.0",
      size: "52.8 MB",
      description: "For macOS 11.0 and later",
      icon: "🍎",
      downloadUrl: "#",
      requirements: "macOS 11.0 (Big Sur) or later"
    },
    {
      name: "Linux",
      version: "v2.1.0",
      size: "38.5 MB",
      description: "For Ubuntu, Fedora, and more",
      icon: "🐧",
      downloadUrl: "#",
      requirements: "Ubuntu 20.04+, Fedora 34+, or compatible"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant AI responses and assistance"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays on your device"
    },
    {
      icon: Clock,
      title: "Always Available",
      description: "24/7 AI assistance at your fingertips"
    },
    {
      icon: Star,
      title: "Free Forever",
      description: "Core features available at no cost"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Download Your AI Buddy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Get Buddy App
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download your intelligent AI assistant and start having meaningful conversations, generating ideas, and getting help with your work.
          </p>
        </div>
        
        {/* Platform Downloads */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className={`relative text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${
                  platform.popular ? 'scale-105 border-2 border-blue-500' : ''
                }`}
              >
                {platform.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-500 text-white px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="text-6xl mb-4">{platform.icon}</div>
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  <CardDescription className="text-lg">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Version: {platform.version}</p>
                    <p>Size: {platform.size}</p>
                    <p className="mt-2">{platform.requirements}</p>
                  </div>
                  <Button 
                    className={`w-full text-lg py-6 ${
                      platform.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                        : ''
                    }`}
                    size="lg"
                  >
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    Download for {platform.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Buddy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Minimum Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 4GB RAM</li>
                  <li>• 2GB free disk space</li>
                  <li>• 1.5GHz dual-core processor</li>
                  <li>• Internet connection (for initial setup)</li>
                  <li>• Windows 10, macOS 11, or Ubuntu 20.04+</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  Recommended
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 8GB RAM</li>
                  <li>• 5GB free disk space</li>
                  <li>• 2.5GHz quad-core processor</li>
                  <li>• High-speed internet connection</li>
                  <li>• Latest OS version</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Local AI processing</li>
                  <li>• End-to-end encryption</li>
                  <li>• No data collection</li>
                  <li>• GDPR compliant</li>
                  <li>• Open source components</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Meet Your AI Buddy?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of users who have already transformed their productivity with intelligent AI assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Free download • No credit card required • Works offline
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 