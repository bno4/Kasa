import React from 'react'

const Banner = ({ text, src }) => {
  return (
    <div className="banner">
      <h3 className="banner_text">{text}</h3>
      <img src={src} alt="Bannière" className="banner_img" />
    </div>
  )
}

export default Banner
