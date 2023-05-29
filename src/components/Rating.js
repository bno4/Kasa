import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const redStar = <FontAwesomeIcon icon={faStar} />
const greyStar = <FontAwesomeIcon icon={faStar} />

const Rating = (props) => {
  const rateValue = props.rateValue
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="rating-stars">
      {stars.map((notation, i) =>
        rateValue >= notation ? (
          <span key={i} className="star">
            {redStar}
          </span>
        ) : (
          <span key={i} className="star__grey">
            {greyStar}
          </span>
        )
      )}
    </div>
  )
}
export default Rating
