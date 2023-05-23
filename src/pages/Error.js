import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error-404">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas</p>
        <Link to="/">Retournez sur la page d'accueil</Link>
      </div>
    </div>
  )
}

export default Error
