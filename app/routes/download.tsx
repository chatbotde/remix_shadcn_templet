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
  Sparkles,
  Monitor,
  Laptop,
  Server
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Download - Buddy" },
    { name: "description", content: "Download Buddy - Your extraordinarily productive digital assistant. Available for Windows, macOS, and Linux." },
  ];
};

export default function Download() {
  const platforms = [
    {
      name: "Windows",
      version: "v2.1.0",
      size: "45.2 MB",
      description: "For Windows 10 and 11",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/2048px-Windows_logo_-_2012.svg.png",
      downloadUrl: "#",
      requirements: "Windows 10 (64-bit) or later",
      features: [
        "Native Windows integration",
        "System tray support",
        "Windows shortcuts",
        "DirectX acceleration"
      ],
      popular: true
    },
    {
      name: "macOS",
      version: "v2.1.0",
      size: "52.8 MB",
      description: "For macOS 11.0 and later",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png",
      downloadUrl: "#",
      requirements: "macOS 11.0 (Big Sur) or later",
      features: [
        "macOS native design",
        "Menu bar integration",
        "Touch Bar support",
        "Metal acceleration"
      ]
    },
    {
      name: "Linux",
      version: "v2.1.0",
      size: "38.5 MB",
      description: "For Ubuntu, Fedora, and more",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png",
      downloadUrl: "#",
      requirements: "Ubuntu 20.04+, Fedora 34+, or compatible",
      features: [
        "Cross-distribution support",
        "Terminal integration",
        "Package manager support",
        "Open source friendly"
      ]
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
      title: "Always Ready",
      description: "24/7 AI assistance at your fingertips"
    },
    {
      icon: Star,
      title: "Free Forever",
      description: "Core features available at no cost"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col pt-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <Sparkles className="w-3 h-3 mr-1" />
            Download Your Digital Assistant
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Get Buddy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Download your extraordinarily productive digital assistant and start having meaningful conversations, generating ideas, and getting help with your work.
          </p>
        </div>
        
        {/* Platform Downloads */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Choose Your Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className="relative text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-black"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-white dark:bg-white flex items-center justify-center mx-auto mb-4 p-2">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <CardTitle className="text-2xl text-black dark:text-white">{platform.name}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-400">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                    <p>Version: {platform.version}</p>
                    <p>Size: {platform.size}</p>
                    <p className="mt-2">{platform.requirements}</p>
                  </div>
                  
                  <div className="text-left">
                    <h4 className="font-semibold text-sm text-black dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-black dark:text-white" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full text-lg py-6 bg-white dark:bg-black text-black dark:text-white border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">Why Choose Buddy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-black">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-black dark:bg-white flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white dark:text-black" />
                  </div>
                  <CardTitle className="text-lg text-black dark:text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* System Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-black dark:text-white">
                  <CheckCircle className="h-5 w-5 text-black dark:text-white" />
                  Minimum Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• 4GB RAM</li>
                  <li>• 2GB free disk space</li>
                  <li>• 1.5GHz dual-core processor</li>
                  <li>• Internet connection (for initial setup)</li>
                  <li>• Windows 10, macOS 11, or Ubuntu 20.04+</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-black dark:text-white">
                  <Zap className="h-5 w-5 text-black dark:text-white" />
                  Recommended
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• 8GB RAM</li>
                  <li>• 5GB free disk space</li>
                  <li>• 2.5GHz quad-core processor</li>
                  <li>• High-speed internet connection</li>
                  <li>• Latest OS version</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-black dark:text-white">
                  <Shield className="h-5 w-5 text-black dark:text-white" />
                  Security & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
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
          <Card className="border border-gray-200 dark:border-gray-700 shadow-xl bg-gray-50 dark:bg-gray-900">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Ready to be Extraordinarily Productive?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Join thousands of users who have already transformed their productivity with intelligent AI assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-lg px-8 py-6">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Free download • No credit card required • Works offline
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 