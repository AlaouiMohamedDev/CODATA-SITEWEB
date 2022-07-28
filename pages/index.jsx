import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import HowWeWork from '../components/HowWeWork'
import Properties from '../components/Properties'
import SideBar from '../components/SideBar'
import YourTrip from '../components/YourTrip'



const Home= () => {
  return (
    <div className="font-tajwal">
      <Head>
        <title>Codata Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal&display=swap" rel="stylesheet"></link>
      </Head>

      <Header/>
      <SideBar/>
      <Banner />
      <Properties />
      <YourTrip/>
      <HowWeWork />
    </div>
  )
}

export default Home
