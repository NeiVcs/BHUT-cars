import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import './index.css'
import CreateCar from './components/Create/CreateCar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/CreateCar" element={<CreateCar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)