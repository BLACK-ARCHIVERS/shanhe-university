import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ShanHe University',
  description: 'Erudition and Knowledge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
