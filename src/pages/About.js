import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import AboutBg from '../assets/img/about.png'

const About = () => {
  return (
    <div>
      <Header />
      <Banner src={AboutBg} />
      <Gallery />
      <Footer />
    </div>
  )
}

export default About
