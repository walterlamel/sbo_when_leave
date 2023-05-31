import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import WhenLeave from './pages/WhenLeave'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path='/:name' element={<WhenLeave />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
