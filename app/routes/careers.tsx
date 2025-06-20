import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/header";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Star,
  CheckCircle
} from "lucide-react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [
  { title: "Careers - Buddy AI Assistant" },
  { name: "description", content: "Join our team and help build the future of AI assistants. Explore career opportunities at Buddy." },
];

export default function Careers() {
  const values = [
    {
      icon: Heart,
      title: "User-First",
      description: "Everything we build is centered around improving the user experience"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We push boundaries and explore new possibilities in AI technology"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great ideas come from working together and sharing knowledge"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We're building tools that help millions of people be more productive"
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Flexible remote work policy",
    "Health, dental, and vision insurance",
    "Unlimited PTO and sick days",
    "Professional development budget",
    "Latest tools and equipment",
    "Team retreats and events",
    "Mental health support"
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $180k",
      description: "Lead the development of our AI models and algorithms to improve Buddy's capabilities.",
      requirements: [
        "Strong background in machine learning and NLP",
        "Experience with large language models",
        "Proficiency in Python and PyTorch",
        "Experience with distributed systems"
      ]
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $140k",
      description: "Design intuitive and beautiful user experiences for our AI assistant platform.",
      requirements: [
        "Strong portfolio of product design work",
        "Experience with design systems",
        "Proficiency in Figma and prototyping tools",
        "Understanding of AI/ML products"
      ]
    },
    {
      id: 3,
      title: "Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100k - $150k",
      description: "Build responsive and performant web applications using modern technologies.",
      requirements: [
        "Strong React/TypeScript experience",
        "Experience with modern build tools",
        "Understanding of web performance",
        "Experience with design systems"
      ]
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$80k - $120k",
      description: "Develop and execute marketing strategies to grow our user base and brand awareness.",
      requirements: [
        "Experience in B2B SaaS marketing",
        "Strong analytical skills",
        "Experience with growth marketing",
        "Excellent communication skills"
      ]
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
              <Briefcase className="w-3 h-3 mr-1" />
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Build the Future of AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our mission to make AI assistance accessible, private, and powerful for everyone. Help us build the next generation of productivity tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn About Us
              </Button>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in taking care of our team so they can do their best work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to join our team? Check out our current openings.
              </p>
            </div>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <Card key={position.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary">{position.department}</Badge>
                          <Badge variant="outline">{position.type}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                        <CardDescription className="text-base mb-4">
                          {position.description}
                        </CardDescription>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.experience}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {position.salary}
                          </div>
                        </div>
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {position.requirements.map((req, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="lg:flex-shrink-0">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <CardDescription>Team Members</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <CardDescription>Countries</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
                  <CardDescription>Team Satisfaction</CardDescription>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <CardDescription>Remote First</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="container mx-auto text-center">
            <Card className="border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Don't See the Right Role?</h3>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented people to join our team. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Send Resume
                  </Button>
                  <Button variant="outline" size="lg">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
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