// Features Component
// Generated: 2025-08-25T19:25:50.216Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Zap, 
  Database, 
  Brain, 
  Shield, 
  Clock,
  Users,
  Workflow,
  AlertTriangle
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Interactive visualizations that update instantly as your data changes, providing live insights into your business metrics.",
      badge: "Visualization"
    },
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms automatically detect patterns, anomalies, and trends in your data streams.",
      badge: "AI/ML"
    },
    {
      icon: Database,
      title: "Multi-Source Integration",
      description: "Connect to 200+ data sources including CRMs, databases, APIs, and cloud platforms seamlessly.",
      badge: "Integration"
    },
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "Process millions of data points in seconds with our optimized analytics engine and cloud infrastructure.",
      badge: "Performance"
    },
    {
      icon: AlertTriangle,
      title: "Smart Alerts & Notifications",
      description: "Automated alerts when KPIs hit thresholds or anomalies are detected, delivered via email, Slack, or SMS.",
      badge: "Monitoring"
    },
    {
      icon: Users,
      title: "Collaborative Workspaces",
      description: "Share dashboards, create team reports, and collaborate on data insights with role-based access controls.",
      badge: "Collaboration"
    },
    {
      icon: Workflow,
      title: "Custom Report Builder",
      description: "Drag-and-drop report creation with advanced filtering, grouping, and scheduling capabilities.",
      badge: "Reporting"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with end-to-end encryption, SSO integration, and audit trails.",
      badge: "Security"
    },
    {
      icon: Clock,
      title: "Historical Analysis",
      description: "Analyze trends over time with unlimited data retention and powerful time-series analytics.",
      badge: "Analytics"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Data-Driven Success
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive business intelligence tools designed for modern data teams 
            and decision-makers who demand real-time insights and actionable analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to unlock the power of your data?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule Demo
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Integrations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}