import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const Place = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
      <Header />
      <Footer />
    </div>
  )
}

export default Place
