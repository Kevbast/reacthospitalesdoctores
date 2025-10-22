import React, { Component } from 'react'
import axios from 'axios'
import Global from './../Global'
import DetallesDoctor from './DetallesDoctor';

export default class Doctores extends Component {
    url=Global.apiDoctores;

    state={
        doctores:[],
        idDoctor:0
    }

    loadDoctores=()=>{     
        var request="/api/Doctores/DoctoresHospital/"+this.props.idhospital;
        axios.get(this.url+request).then(response=>{
            console.log("Leyendo doctores del hospital "+ this.props.idhospital);
            console.log(response.data);
            this.setState({
                doctores:response.data,
                 
            })
        })
    }
    componentDidMount=()=>{
        this.loadDoctores();
    }
    //IMPORTANTE ACORDARSE DEL DIDPUDTAE PUSTO QUE CAMBIA LOS PARAMETROS SEGUN EL NAVLINK
    componentDidUpdate=(oldProps)=>{
        if(oldProps.idhospital != this.props.idhospital){
            this.loadDoctores();
            //seteamos el iddoctor al cargar los doctores de otro hospital(si no queremos q se vea los anteriores detalles)
            //se podría setear dentro del didupdate
            this.setState({
                idDoctor:0
            })
        }
    }
 

  render() {
    return (
      <div>
        <h2>Doctores HOSPITAL {this.props.idhospital}</h2>
        <div className="table-responsive">
            <table className="table table-primary">
                <thead>
                    <tr>
                        <th scope="col">idDoctor</th>
                        <th scope="col">Especialidad</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Salario</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                       {
                            this.state.doctores.map((doctor,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{doctor.idDoctor}</td>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td><button className='btn btn-success' onClick={()=>{//IMPORTANTE PARA CAMBIAR EL ESTADO DEL IDDOCTOR
                                            console.log(doctor.idDoctor);
                                                this.setState({
                                                    idDoctor:doctor.idDoctor
                                                })
                                        }}>Details</button></td>
                                    </tr>
                                )
                            })
                       }
                </tbody>
            </table>
        </div>
                {//AQUÍ MOSTRAMOS EL COMPONENTE DETAILSDOCTOR
                  //SI ES 0 PUES QUE NO SE MUESTRE EL COMPONENT 
                this.state.idDoctor !=0 &&
                <DetallesDoctor idDoctor={this.state.idDoctor}/>               
                }
      </div>
    )
  }
}
