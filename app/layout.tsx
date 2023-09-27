import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Car App',
  description: 'An App to Steamline Car Finding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
