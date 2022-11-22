import React, { useState, useEffect } from 'react'
import ClayAlert from '@clayui/alert';
import sprite from '../assets/icons/icons.svg'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [mascota, setMascota] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('')
    const [sintomas, setSintomas] = useState('');
    const generateId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha
    }

    const [error, setError] = useState(false)
    const [v, setV] = useState('visually-hidden');
    const [toastItems, setToastItems] = useState([]);

    const campos = [];
    const [errorCampos, setErrorCampos] = useState('')


    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setMascota(paciente.mascota)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const handleSubmit = (e) => {
        e.preventDefault();
        setToastItems([...toastItems, Math.random() * 100])
        if ([nombre, mascota, email, alta, sintomas].includes('')) {

            nombre === '' && campos.push('Nombre')
            mascota === '' && campos.push('Mascota')
            email === '' && campos.push('Email')
            alta === '' && campos.push('Alta')
            sintomas === '' && campos.push('Sintomas')

            const listItems = campos.map((key) =>
                <div key={key}>{key}</div>
            );

            setErrorCampos(listItems)

            setError(true)
            setV('')

            return;
        }
        else {
            setError(false)
            setV('')

            const objetoPaciente = {
                nombre,
                mascota,
                email,
                alta,
                sintomas,
                
            }

            if(paciente.id){
                // Editando
                objetoPaciente.id = paciente.id
                const pacientesActualizados = pacientes.map( 
                    pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState
                )

                setPacientes(pacientesActualizados)
                setPaciente({})
            }
            else{
                objetoPaciente.id = generateId()
                setPacientes([...pacientes, objetoPaciente])
            }
            
            setNombre('')
            setMascota('')
            setEmail('')
            setAlta('')
            setSintomas('')
        }            
    }

    return (
        <>
            <div className="container">
                <h2 className="h2">Añade pacientes y admin&iacute;stralos</h2>
                <form onSubmit={handleSubmit}>
                    {error ?
                        <ClayAlert.ToastContainer className={v}>
                            {toastItems.map(value => (
                                <ClayAlert
                                    key={value}
                                    autoClose={5000}
                                    displayType="danger"
                                    title="Te falta por rellenar: "
                                    spritemap={sprite}
                                    onClose={() => {
                                        setToastItems(prevItems =>
                                            prevItems.filter(item => item !== value)
                                        );
                                    }}
                                >

                                    {errorCampos}

                                </ClayAlert>
                            ))}
                        </ClayAlert.ToastContainer>
                        :
                        <ClayAlert.ToastContainer className={v}>
                            {toastItems.map(value => (
                                <ClayAlert
                                    key={value}
                                    autoClose={5000}
                                    displayType='success'
                                    title="Paciente añadido con exito"
                                    spritemap={sprite}
                                    onClose={() => {
                                        setToastItems(prevItems =>
                                            prevItems.filter(item => item !== value)
                                        );
                                    }}
                                />
                            ))}
                        </ClayAlert.ToastContainer>
                    }

                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre de la mascota</label>
                        <input type="text" className="form-control" id="mascota" placeholder="Nombre de la mascota"
                            value={mascota}
                            onChange={(e) => setMascota(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Alta</label>
                        <input type="date" className="form-control" id="alta" placeholder="Alta"
                            value={alta}
                            onChange={(e) => setAlta(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sintomas</label>
                        <textarea className="form-control" id="sintomas" placeholder="Sintomas"
                            value={sintomas}
                            onChange={(e) => setSintomas(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-info btn-lg">{
                        paciente.id ? 'Editar paciente' : 'Agregar paciente'
                    }</button>
                </form>
            </div>
        </>
    )
}

export default Formulario
