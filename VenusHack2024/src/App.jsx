import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from "./pages/login_page/login_page"
import { CafePage } from './pages/cafe_page/cafe_page'
import './App.css'

function App() {
  return(
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/brandywine" element={<CafePage />} />
    </Routes>
  )
}

export default App