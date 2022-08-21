import Head from 'next/head'
import React from 'react'
import BrandBanner from '../components/BrandBanner'
import BrandServices from '../components/BrandServices'
import BrandSteps from '../components/BrandSteps'
import ExcitedToWorkToGether from '../components/ExcitedToWorkToGether'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Branding() {
  return (
    <div className="relative font-tajwal h-screen box-border w-screen overflow-x-hidden ">
      <Head>
        <title>Codata Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />

      <main className='container mx-auto'>
          <BrandBanner />
          <BrandServices />
          <BrandSteps />
      </main>

      <ExcitedToWorkToGether />
      <Footer />

    </div>
  )
}

export default Branding