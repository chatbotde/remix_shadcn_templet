import { Github, Twitter, Youtube, Mail } from "lucide-react";
import { Link } from "@remix-run/react";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Enterprise", href: "/enterprise" },
      { name: "Downloads", href: "/download" },
      { name: "Students", href: "/students" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "/blog" },
      { name: "Forum", href: "/forum" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Community", href: "/community" },
      { name: "Customers", href: "/customers" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Security", href: "/security" },
    ],
  },
};

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
  { name: "Email", icon: Mail, href: "mailto:hi@cursor.com" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-3 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              © 2024 Made by Anysphere. All rights reserved.
            </span>
            <span className="text-sm px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              SOC 2 Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
} 