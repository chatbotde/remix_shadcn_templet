import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { Mail, MessageCircle, Phone, HelpCircle, FileText, Users } from "lucide-react";

export const meta: MetaFunction = () => {
  return [
    { title: "Support - Buddy App" },
    { name: "description", content: "Get help and support for Buddy App" },
  ];
};

export default function Support() {
  const supportOptions = [
    {
      title: "Help Center",
      description: "Browse our comprehensive knowledge base",
      icon: HelpCircle,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      link: "#"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share solutions",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950",
      link: "#"
    },
    {
      title: "Documentation",
      description: "Detailed guides and API references",
      icon: FileText,
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      link: "/docs"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: MessageCircle,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      link: "#"
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "support@buddyapp.com",
      icon: Mail,
      response: "Response within 24 hours"
    },
    {
      title: "Phone Support",
      description: "+1 (555) 123-4567",
      icon: Phone,
      response: "Available Mon-Fri, 9AM-6PM EST"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Support Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help you get the most out of Buddy App
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${option.bgColor} flex items-center justify-center mb-4`}>
                  <option.icon className={`h-6 w-6 ${option.color}`} />
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Get Help
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-4 mb-6">
              {contactMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <method.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{method.title}</h3>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-xs text-muted-foreground">{method.response}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your issue or question..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I install Buddy App?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Download the installer for your platform from our download page and follow the installation wizard.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use Buddy App offline?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, most features work offline. Your data will sync when you're back online.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I reset my password?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use the "Forgot Password" link on the login page to reset your password via email.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, we use industry-standard encryption and security practices to protect your data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 