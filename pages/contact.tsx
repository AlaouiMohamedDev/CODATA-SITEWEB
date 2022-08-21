import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import Head from 'next/head'
import ContactBanner from '../components/ContactBanner'
import ContactInfo from '../components/ContactInfo'


function Contact() {
  return (
    <div className='font-tajwal h-screen relative overflow-x-hidden' >
        <Head>
            <title>Codata Agency</title>
            <link rel="icon" href="/favicon.ico" />
            <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
            <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet"></link>
        </Head>
        <Header/>
        <main className=' container mx-auto' >
            <ContactBanner />
            <ContactInfo />
            <SideBar/>
        </main>
        <Footer />
    </div>
  )
}

export default Contact