// import { ClientOnly } from './components/ClientOnly'
import { RegisterModal } from './components/Modals/RegisterModal'
import { Navbar } from './components/navbar/Navbar'
import './globals.css'
import { Nunito } from 'next/font/google'
import { ToasterProvider } from './providers/ToasterProvider'
import { LoginModal } from './components/Modals/LoginModal'
import { ReactNode } from 'react'
import getCurrentUser from './actions/getCurrentUser'
import { RentModal } from './components/Modals/RentModal'
import { SearchModal } from './components/Modals/SearchModal'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={nunito.className}>
        {/* <ClientOnly> */}
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        {/* </ClientOnly> */}
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  )
}
