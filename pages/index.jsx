import Head from 'next/head'
import Header from '../components/Header'
import SideBar from '../components/SideBar'



const Home= () => {
  return (
    <div className="">
      <Head>
        <title>Codata Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      </Head>

      <Header/>
      <SideBar/>
    </div>
  )
}

export default Home
