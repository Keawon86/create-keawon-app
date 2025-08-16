import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Rocket, 
  Code, 
  Palette, 
  Database, 
  Zap, 
  Github,
  ExternalLink,
  CheckCircle
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'TypeScript First',
      description: 'Built with TypeScript for type safety and better developer experience',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework with custom design system and dark mode support',
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Supabase Integration',
      description: 'Full-stack backend with real-time database, auth, and storage',
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Shadcn/ui Components',
      description: 'Beautiful, accessible components built on Radix UI primitives',
    },
  ]

  const techStack = [
    'Next.js 14',
    'React 18',
    'TypeScript 5',
    'Tailwind CSS 3',
    'Shadcn/ui',
    'Radix UI',
    'Supabase',
    'ESLint + Prettier',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">{{PROJECT_NAME}}</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            🚀 Next.js Starter Kit
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Build Modern Web Apps
            <span className="text-primary block">Faster Than Ever</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A production-ready Next.js starter kit with TypeScript, Tailwind CSS, 
            Shadcn/ui components, and Supabase backend. Start building in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Rocket className="h-5 w-5 mr-2" />
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <ExternalLink className="h-5 w-5 mr-2" />
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This starter kit comes with all the modern tools and libraries you need 
            to build production-ready web applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container py-20 bg-muted/30 rounded-lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage the latest and greatest tools in the React ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 bg-background rounded-lg border">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Create your first project with this starter kit and see the difference 
            modern tooling makes in your development workflow.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            <Rocket className="h-5 w-5 mr-2" />
            Create New Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>
            Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Supabase
          </p>
          <p className="mt-2">
            © 2024 {{PROJECT_NAME}}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
