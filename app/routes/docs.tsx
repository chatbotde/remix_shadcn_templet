import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Book, Code, Play, Settings, Users, Zap } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Documentation - Buddy App" },
    { name: "description", content: "Learn how to use Buddy App effectively" },
  ];
};

export default function Documentation() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick start guide and installation instructions",
      icon: Play,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      link: "#"
    },
    {
      title: "User Guide",
      description: "Complete guide to using Buddy App features",
      icon: Book,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950",
      link: "#"
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: Code,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      link: "#"
    },
    {
      title: "Configuration",
      description: "Advanced settings and customization options",
      icon: Settings,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      link: "#"
    },
    {
      title: "Team Management",
      description: "Managing teams, permissions, and collaboration",
      icon: Users,
      color: "text-pink-500",
      bgColor: "bg-pink-50 dark:bg-pink-950",
      link: "#"
    },
    {
      title: "Automation",
      description: "Creating and managing automated workflows",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-950",
      link: "#"
    }
  ];

  const quickLinks = [
    { title: "Installation Guide", href: "#" },
    { title: "First Workflow", href: "#" },
    { title: "API Authentication", href: "#" },
    { title: "Troubleshooting", href: "#" },
    { title: "Best Practices", href: "#" },
    { title: "Changelog", href: "#" }
  ];

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about using Buddy App effectively
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docSections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${section.bgColor} flex items-center justify-center mb-4`}>
                  <section.icon className={`h-6 w-6 ${section.color}`} />
                </div>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                >
                  <span className="font-medium">{link.title}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Community Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Join our community forum to ask questions and share solutions with other users.
                  </p>
                  <Button variant="outline" size="sm">
                    Join Community
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Contact Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <Button variant="outline" size="sm">
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