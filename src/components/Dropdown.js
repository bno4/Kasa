import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({ title, text }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="dropdown">
      <div className="dropdown_bar" onClick={handleOpen}>
        <div>{title}</div>
        <div>
          {open ? (
            <div>
              {' '}
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          ) : (
            <div>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          )}
        </div>
      </div>
      {open ? (
        <ul className="menu">
          <li className="menu-item">{text}</li>
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown
