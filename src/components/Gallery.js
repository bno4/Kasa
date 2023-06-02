import React from 'react'
import Card from './Card'
import datas from '../data/logements.json'

const Gallery = () => {
  return (
    <div className="gallery">
      <ul>
        {datas.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </ul>
    </div>
  )
}

export default Gallery
