import React from 'react'
import { useState } from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

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
    <div className="slider">
      <div>
        {pictures.length > 1 && (
          <>
            <div className="left-arrow" onClick={goToPrevious}>
              <FontAwesomeIcon
                icon={faAngleLeft}
                style={{ color: '#ffffff' }}
              />
            </div>
            <div className="right-arrow" onClick={goToNext}>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: '#ffffff' }}
              />
            </div>
            <div className="counter">
              {currentIndex + 1} / {pictures.length}
            </div>
          </>
        )}
      </div>

      <div
        className="slide-style"
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      ></div>
    </div>
  )
}

export default Carousel
