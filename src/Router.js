import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuHospitales from './components/MenuHospitales'
import Doctores from './components/Doctores';
import DetallesDoctor from './components/DetallesDoctor';
import CreateHospital from './components/CreateHospital';

export default class Router extends Component {

  render() {
    //AQUÍ IRAN LASS FUNCIONES CON PROPS
    //Función para poder devolver el component doctores(esta función es un component tmb,lo pasaremos así en element)
    function DoctoresElement() {
        let {idhospital}= useParams();//lo capturamos con useparams
        return (<Doctores idhospital={idhospital}/>)
    }
    return (
      <BrowserRouter>
      <MenuHospitales/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/doctores/:idhospital" element={<DoctoresElement/>}/>
            <Route path="/createhospital" element={<CreateHospital/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
