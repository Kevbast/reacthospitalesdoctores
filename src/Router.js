import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MenuHospitales from './components/MenuHospitales'

export default class Router extends Component {
    //AQUÍ IRAN LASS FUNCIONES CON PROPS
  render() {
    return (
      <BrowserRouter>
      <MenuHospitales/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
