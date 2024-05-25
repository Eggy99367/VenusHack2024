import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Card } from './components/card/card'
import { Home } from './pages/home/home'
import './App.css'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App