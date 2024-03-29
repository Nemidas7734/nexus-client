import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
// import { getServerSession } from 'next-auth' 
import SessionProvider from './components/SessionProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexus',
  description: 'MediTech platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div>
          <Navbar />
          {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
