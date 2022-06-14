import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv" id='Education'>
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Analista Programador" where="Instituto CTC, Rosario, Colonia" from="2021" to="Present"/>
            <Widecard title="Educación Secundaria" where="Liceo AUIC, Rosario, Colonia" from="2015" to="2020"/>
            </div>
            )
        }
    }
    
export default Education
    