import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.scss';
import './assets/css/style.scss';

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
    const [pacientes, setPacientes] = useState([]);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        const obtenerLS = () => {
          const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
          setPacientes(pacientesLS)
          console.log(JSON.stringify( pacientesLS ))
        }
        obtenerLS();
      }, []);
    
      useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify( pacientes ));
      }, [pacientes])

    const eliminarPaciente = (id) => {
        console.log('eliminando', id)
        const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
        setPacientes(pacientesActualizados)
    }


    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Header />
                </header>
                <div className="container">
                    <div className="hstack gap-2">
                        <div className="col">
                            <Formulario
                                pacientes={pacientes}
                                setPacientes={setPacientes}
                                paciente={paciente}
                                setPaciente={setPaciente}

                            /></div>
                        <div className="vr"></div>
                        <div className="col">
                            <ListadoPacientes
                                pacientes={pacientes}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default App;
