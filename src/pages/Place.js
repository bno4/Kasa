import React from 'react'
import { useParams } from 'react-router-dom'
import logements from '../data/logements.json'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Rating from '../components/Rating'
import Dropdown from '../components/Dropdown'
import Error from '../pages/Error'

const Place = () => {
  const { id } = useParams()
  console.log(id)
  const logement = logements.find((logement) => logement.id === id)
  if (logement === undefined) {
    return (
      <div>
        <Error />
      </div>
    )
  }
  const pictures = logement.pictures

  return (
    <div>
      <div className="place-home">
        <div className="place">
          <Header />
          <div className="container-styles">
            <Carousel pictures={pictures} />
          </div>
          <div className="title">
            <div className="title__loc">
              <h2>{logement.title}</h2>
              <h3>{logement.location}</h3>
              <div className="title__loc__tags">
                {logement.tags.map((tag, index) => (
                  <p className="title__loc__tags__tag" key={index}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <div className="title__profil">
              <div className="title__profil__host">
                <p>{logement.host.name}</p>
                <div className="title__profil__host__picture">
                  <img src={logement.host.picture} alt="visage propriétaire" />
                </div>
              </div>
              <div className="title_profil_rating">
                <Rating
                  className={StyleSheet.title_profil_rating}
                  rateValue={logement.rating}
                />
              </div>
            </div>
          </div>
          <div className="details">
            <div className="details__dropdown">
              <Dropdown title="Description" text={logement.description} />
            </div>
            <div className="details__dropdown">
              <Dropdown
                title="Équipement"
                text={logement.equipments.map((equipement, index) => (
                  <p key={index}>{equipement}</p>
                ))}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Place
