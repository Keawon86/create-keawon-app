import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: '{{PROJECT_NAME}}',
  description: 'A modern Next.js application built with TypeScript, Tailwind CSS, Shadcn/ui, and Supabase',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: '{{PROJECT_NAME}}',
    description: 'A modern Next.js application built with TypeScript, Tailwind CSS, Shadcn/ui, and Supabase',
    siteName: '{{PROJECT_NAME}}',
  },
  twitter: {
    card: 'summary_large_image',
    title: '{{PROJECT_NAME}}',
    description: 'A modern Next.js application built with TypeScript, Tailwind CSS, Shadcn/ui, and Supabase',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  )
}
