import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Banner from '../components/Banner'
import HomeBg from '../assets/img/main.png'

const Home = () => {
  return (
    <div>
      <div className="home-content">
        <Header />
        <Banner text="Chez vous, partout et ailleurs" src={HomeBg} />
        <Gallery />
      </div>

      <Footer />
    </div>
  )
}

export default Home
