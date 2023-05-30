import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const chevronUp = <FontAwesomeIcon icon={faChevronUp} />
const chevronDown = <FontAwesomeIcon icon={faChevronDown} />

const Dropdown = ({ title, text }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="dropdown">
      <div className="dropdown__bar" onClick={handleOpen}>
        <div>{title}</div>
        <div>{open ? <div>{chevronUp}</div> : <div>{chevronDown}</div>}</div>
      </div>
      <div className={open ? 'dropdown__menu' : 'dropdown__menu__off'}>
        {text}
      </div>
    </div>
  )
}

export default Dropdown
