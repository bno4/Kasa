import React from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Place from './pages/Place'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/place/:id" element={<Place />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
