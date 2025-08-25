// Footer Component
// Generated: 2025-08-25T19:25:50.216Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  BarChart3,
  Database,
  TrendingUp
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Dashboards", href: "/dashboards" },
        { name: "Integrations", href: "/integrations" },
        { name: "API", href: "/api" },
        { name: "Documentation", href: "/docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Community", href: "/community" },
        { name: "Tutorials", href: "/tutorials" },
        { name: "Webinars", href: "/webinars" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Data Security", href: "/security" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Data Processing", href: "/data-processing" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "Security", href: "/security" },
        { name: "SLA", href: "/sla" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/dataflowanalytics" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/dataflow-analytics" },
    { name: "GitHub", icon: Github, href: "https://github.com/dataflow-analytics" }
  ]

  return (
    <footer className="bg-background border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <BarChart3 className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  DataFlow Analytics
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering businesses with real-time data insights and intelligent analytics. 
                Transform your data into actionable intelligence with our advanced B2B platform.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@dataflowanalytics.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) DATA-FLOW</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm flex items-center gap-2">
                <TrendingUp className="size-4 text-primary" />
                Analytics Insights
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-gradient-to-r from-primary to-secondary">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get weekly data insights and platform updates. Enterprise-focused content.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-primary">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 DataFlow Analytics. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Database className="size-3 text-primary" /> for data excellence
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/status" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              System Status
            </Link>
            <Link href="/trust" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Trust Center
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </Link>
            <Link href="/enterprise" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Enterprise
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}