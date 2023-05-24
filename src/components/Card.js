import React from 'react'

const Card = ({ logement }) => {
  console.log(logement)
  return (
    <li className="card">
      <img src={logement.cover} alt={'intérieur de' + logement.title} />
      <div className="infos">
        <h2>{logement.title}</h2>
      </div>
    </li>
  )
}

export default Card
