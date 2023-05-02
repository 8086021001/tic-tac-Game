import React from 'react'
import Board from './components/square/Board'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/landing/Landing';


function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/" element={<Landing/>} />
      <Route  path="/game" element={<Board/>} />
      </Routes>
    </Router>

  )
}

export default App
