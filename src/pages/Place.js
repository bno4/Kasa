import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Dropdown from '../components/Dropdown'
import ErrorLayout from '../components/ErrorLayout'

const Place = () => {
  const { id } = useParams()
  console.log(id)
  const logement = logements.find((logement) => logement.id === id)
  if (logement === undefined) {
    return (
      <div>
        <ErrorLayout />
      </div>
    )
  }

  const pictures = logement.pictures
  console.log(pictures)
  const containerStyles = {
    position: 'relative',
    width: '90%',
    height: '415px',
    margin: '0 auto',
  }

  return (
    <div className="place">
      <Header />
      <div style={containerStyles}>
        <Carousel pictures={pictures} />
      </div>

      <section className="details">
        <div className="details_dropdown">
          <Dropdown title="Description" text={logement.description} />
        </div>
        <div className="details_dropdown">
          <Dropdown
            title="Équipement"
            text={logement.equipments.map((equipement, index) => (
              <p key={index}>{equipement}</p>
            ))}
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Place
