import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
export default class Hospitales extends Component {

    url= Global.apiHospitales
    state={
        hospitales:[]
    }

    loadHospitales=()=>{
        var request="webresources/hospitales";

        axios.get(this.url+request).then(response=>{
            console.log("Loading hospitales");
            this.setState({
                hospitales:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadHospitales();
    }

  render() {
    return (
      <div>
        <h1>Hospitales</h1>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Id:</th>
                            <th scope="col">Nombre:</th>
                            <th scope="col">Telefono:</th>
                            <th scope="col">Camas:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  
                        this.state.hospitales.map((hospital,index)=>{
                            return(<tr key={index}>
                                <td>{hospital.idhospital}</td>
                                <td>{hospital.nombre}</td>
                                <td>{hospital.telefono}</td>
                                <td>{hospital.camas}</td>
                            </tr>)
                        })
                        }
                    </tbody>
                </table>
            </div>
            
      </div>
    )
  }
}
