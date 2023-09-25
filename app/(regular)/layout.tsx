import '../globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Flex } from 'next/font/google'
import { Providers } from '../providers';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollOnTop from '../components/ScrollOnTop';



const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto_Flex({ subsets: ['latin']});

export const metadata: Metadata = {
  title: 'ContractMe',
  description: 'Rešenje freelance-a u Srbiji',
  icons:'/favicon.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} px-[10%] lg:px-[20%]`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ScrollOnTop />
        </Providers>
      </body>
    </html>
  )
}
