import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Game from './Pages/Game'

function Views() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/whiteout' element={<Game name="Whiteout Battle Royale" />} />
    </Routes>
  )
}

export default Views