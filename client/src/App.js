
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './Dashboard/Dashboard'
import Navbar from "./Components/Navigation/Navbar"
import Homepage from './Pages/Home/Homepage'
import "./App.css"
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='/' element={<Homepage/>}/>
        </Route>

      </Routes>

    </BrowserRouter>

  </>
}

export default App
