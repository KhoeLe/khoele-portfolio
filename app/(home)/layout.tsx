import Footer from '@/components/footer'
import Navbar from '@/components/nav-bar'
import React from 'react'

function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full relative'>
      <main className='pb-5 space-y-24'>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  )
}

export default Layout