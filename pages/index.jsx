import Head from 'next/head'
import Banner from '../components/Banner'
import ExcitedToWorkToGether from '../components/ExcitedToWorkToGether'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowWeWork from '../components/HowWeWork'
import OurServices from '../components/OurServices'
import Properties from '../components/Properties'
import SideBar from '../components/SideBar'
import WhyChooseUs from '../components/WhyChooseUs'
import YourTrip from '../components/YourTrip'



const Home= () => {
  return (

    <div className="relative font-tajwal h-screen box-border w-screen overflow-x-hidden ">
      <Head>
        <title>Codata Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet"></link>
      </Head>
    <main className='container mx-auto px-15' >
      <Header/>
      <SideBar/>
      <Banner />
      <Properties />
      <YourTrip/>
      <HowWeWork />
      <WhyChooseUs />
      <OurServices />
    </main>
    
    <ExcitedToWorkToGether  />
    <Footer />

    </div>
  )
}

export default Home
