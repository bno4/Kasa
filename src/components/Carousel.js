import React from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const sliderStyles = {
    height: '100%',
    position: 'relative',
  }

  const slideStyle = {
    width: '100%',
    margin: '0 auto',
    height: '100%',
    borderRadius: '25px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${pictures[currentIndex]})`,
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    transition: 'all 500ms',
    color: '#ffffff',
    left: '32px',
    fontSize: '48px',
    zIndex: '1',
    cursor: 'pointer',
  }
  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%) 500ms',
    transition: 'all 500ms',
    color: '#ffffff',
    right: '32px',
    fontSize: '48px',
    zIndex: '1',
    cursor: 'pointer',
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#ffffff' }} />
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        <FontAwesomeIcon icon={faAngleRight} style={{ color: '#ffffff' }} />
      </div>

      <div style={slideStyle}></div>
    </div>
  )
}

export default Carousel
