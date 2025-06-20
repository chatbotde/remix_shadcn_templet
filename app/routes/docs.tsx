import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Book, 
  Code, 
  Play, 
  Settings, 
  Users, 
  Zap,
  FileText,
  HelpCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Documentation - Buddy" },
    { name: "description", content: "Learn how to use Buddy effectively and get the most out of your digital assistant." },
  ];
};

export default function Documentation() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick start guide and installation instructions",
      icon: Play,
      placeholder: "Add your getting started guide here",
      link: "#"
    },
    {
      title: "User Guide",
      description: "Complete guide to using Buddy features",
      icon: Book,
      placeholder: "Add your comprehensive user guide here",
      link: "#"
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      placeholder: "Add your API documentation here",
      link: "#"
    },
    {
      title: "Configuration",
      description: "Advanced settings and customization options",
      icon: Settings,
      placeholder: "Add your configuration guides here",
      link: "#"
    },
    {
      title: "Team Management",
      description: "Managing teams, permissions, and collaboration",
      icon: Users,
      placeholder: "Add your team management docs here",
      link: "#"
    },
    {
      title: "Automation",
      description: "Creating and managing automated workflows",
      icon: Zap,
      placeholder: "Add your automation documentation here",
      link: "#"
    }
  ];

  const quickLinks = [
    { title: "Installation Guide", href: "#", placeholder: "Add installation guide link" },
    { title: "First Workflow", href: "#", placeholder: "Add first workflow guide link" },
    { title: "API Authentication", href: "#", placeholder: "Add API auth guide link" },
    { title: "Troubleshooting", href: "#", placeholder: "Add troubleshooting guide link" },
    { title: "Best Practices", href: "#", placeholder: "Add best practices guide link" },
    { title: "Changelog", href: "#", placeholder: "Add changelog link" }
  ];

  return (
    <div className="flex min-h-screen flex-col pt-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <Sparkles className="w-3 h-3 mr-1" />
            Documentation
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Documentation</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about using Buddy effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-black dark:bg-white flex items-center justify-center mb-4">
                  <section.icon className="h-6 w-6 text-white dark:text-black" />
                </div>
                <CardTitle className="text-black dark:text-white">{section.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">{section.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    {section.placeholder}
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Quick Links</h2>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Card key={index} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-black hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-black dark:text-white">{link.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic mt-1">
                          {link.placeholder}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">Need Help?</h2>
            <div className="space-y-4">
              <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                      <Users className="h-4 w-4 text-white dark:text-black" />
                    </div>
                    <h3 className="font-semibold text-black dark:text-white">Community Support</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Join our community forum to ask questions and share solutions with other users.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      Add your community forum link here
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    Join Community
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                      <HelpCircle className="h-4 w-4 text-white dark:text-black" />
                    </div>
                    <h3 className="font-semibold text-black dark:text-white">Contact Support</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg border border-gray-200 dark:border-gray-700 mb-3">
                    <p className="text-xs text-gray-500 dark:text-gray-400 italic">
                      Add your support contact information here
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 