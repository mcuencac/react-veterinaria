import React, { useEffect } from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPacientes, paciente, setPaciente, eliminarPaciente }) => {
    useEffect(() => {
        pacientes.length > 0 && console.log("Nuevo paciente")
    }, [pacientes])


    return (
        <React.Fragment>
            {pacientes && pacientes.length ?
                (

                    <div className="container">
                        <h2 className="h2">Listado de pacientes</h2>
                        {pacientes.map((paciente) => (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente = {eliminarPaciente}
                            />
                        ))}
                    </div>
                )
                :
                (
                    <div className="container">
                        <h2 className="h2">No hay pacientes</h2>
                        <div className="alert alert-light" role="alert">
                            <figure className="figure">
                                <picture>
                                    <source media="(min-width: 650px)" srcSet="https://googlechrome.github.io/samples/picture-element/images/kitten-large.png" />
                                    <source media="(min-width: 465px)" srcSet="https://googlechrome.github.io/samples/picture-element/images/kitten-medium.png" />
                                    <img className="img-fluid" src="https://googlechrome.github.io/samples/picture-element/images/kitten-small.png" alt="a cute kitten" id="picimg" />
                                </picture>
                                {/* <figcaption class="figure-caption">Añade pacientes :)</figcaption> */}
                            </figure>
                            <div className="text-center">Tus pacientes aparecerán aquí</div>
                        </div>
                    </div>
                )
            }
        </React.Fragment >
    )
}


export default ListadoPacientes
