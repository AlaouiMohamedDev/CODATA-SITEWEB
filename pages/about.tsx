import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExcitedToWorkToGether from '../components/ExcitedToWorkToGether'
import AboutBanner from '../components/AboutBanner'
import AboutInfo from '../components/AboutInfo'


function About() {
  return (
    <div className='font-tajwal h-screen relative overflow-x-hidden' >
         <Head>
            <title>Codata Agency</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet"></link>
        </Head>

        <Header />

        <main className=' container mx-auto space-y-10 md:space-y-5' >
            <AboutBanner />
            <AboutInfo />
        </main>

        <ExcitedToWorkToGether />
        <Footer />
    </div>
  )
}

export default About