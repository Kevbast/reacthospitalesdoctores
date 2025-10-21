import React, { Component } from 'react'
import axios from 'axios'
import Global from './../Global'

export default class DetallesDoctor extends Component {
    url=Global.apiDoctores;
    state={
        doctor:[]
    }

    loadDetails(){
        var request="api/Doctores/"+this.props.idDoctor;
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo doctor:"+this.props.idDoctor );
            console.log(response.data);
            this.setState({
                doctor:response.data
            })
        })
    }

    componentDidMount=()=>{
        this.loadDetails();
    }
    componentDidUpdate=(olProps)=>{
        if(olProps.idDoctor!= this.props.idDoctor){
            this.loadDetails();
        }
    }
  render() {
    return (
      <div>
        <h1>DetallesDoctor {this.props.idDoctor}</h1>
        <h2>Apellido:{this.state.doctor.apellido}</h2>
        <h3>Especialidad:{this.state.doctor.especialidad}</h3>
        <h3>Salario:{this.state.doctor.salario}</h3>
      </div>
    )
  }
}
