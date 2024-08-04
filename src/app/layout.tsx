import { Inter } from 'next/font/google'

import { Footer } from '@components/Footer'
import { Navbar } from '@components/Navbar'
import { Providers } from '@components/providers'

import type { Metadata } from 'next'
import '@app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Masahiro Koumura's Portfolio",
  description:
    'Masahiro Koumura is a web designer and front-end developer with a passion for the intersection of design and engineering.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.className} bg-white text-zinc-700 dark:bg-zinc-900 dark:text-white`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
