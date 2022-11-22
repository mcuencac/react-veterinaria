import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, mascota, email, alta, sintomas,id } = paciente
    const handleEliminar = () =>{
        const txt = `Deseas eliminar a ${mascota}`
        console.log(txt)
        const respuesta = window.confirm(txt)

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
        <ul className="list-group">
            <li className="list-group-item p-4">
                <p>
                    <span className="fw-bold">Nombre: </span>
                    <span>{nombre}</span>
                </p>
                <p>
                    <span className="fw-bold">Mascota: </span>
                    <span>{mascota}</span>
                </p>
                <p>
                    <span className="fw-bold">Email: </span>
                    <span>{email}</span>
                </p>
                <p>
                    <span className="fw-bold">Alta: </span>
                    <span>{alta}</span>
                </p>
                <p>
                    <span className="fw-bold">Sintomas: </span>
                    <span>{sintomas}</span>
                </p>
                <div className="d-flex justify-content-between mt-5">
                    <button type="button" className="btn btn-info" onClick={() => setPaciente(paciente)}>Editar</button>
                    <button type="button" className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
                </div>
            </li>


        </ul>

    )
}

export default Paciente
