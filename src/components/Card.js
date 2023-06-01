import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ logement }) => {
  return (
    <Link to={`/place/${logement.id}`}>
      <li className="card">
        <img
          className="card_pict"
          src={logement.cover}
          alt={'Intérieur de' + logement.title}
        />
        <div className="card_infos">
          <p>{logement.title}</p>
        </div>
      </li>
    </Link>
  )
}

export default Card
