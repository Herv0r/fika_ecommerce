import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Alert from '@/components/Alert'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['cyrillic']})

export const metadata: Metadata = {
  title: 'FIKA E-commerce',
  description: 'Generated by Lucas Albornoz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Alert />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
