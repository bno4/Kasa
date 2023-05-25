import React from 'react'

const Card = ({ logement }) => {
  console.log(logement)
  return (
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
  )
}

export default Card
