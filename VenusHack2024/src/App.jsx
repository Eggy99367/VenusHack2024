import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { CafePage } from './pages/cafe_page/cafe_page'
import './App.css'

function App() {
  return(
    <Routes>
      <Route path="/" element={<CafePage />} />
    </Routes>
  )
}

export default App