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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
      </div>
    </div>
  );
} 