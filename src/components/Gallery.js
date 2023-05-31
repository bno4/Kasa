import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const Gallery = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('./logements.json').then((res) => setData(res.data))
  }, [])
  return (
    <div className="gallery">
      <ul>
        {data.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </ul>
    </div>
  )
}

export default Gallery
