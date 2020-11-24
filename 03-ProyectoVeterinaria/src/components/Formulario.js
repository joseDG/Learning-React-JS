import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //Crear State de Citas
    //lo creo de esa formar al state porque es un objeto 
    const [cita, actualziarCita] = useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    //Creacion de otro state llamado ERROR
    //de buenas practicas se recomienda crear sin problemas mas states
    //1 param nombre del state 2 el que actualiza al state 
    const [error, actualizarError] = useState(false)

    //Función que se ejecuta cada  que el usuario escribe en un input
    const actualziarState = e => {
        actualziarCita({
            ...cita,
            [e.target.name]: e.target.value 
        })
    }

    //Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault();
        
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        

        //Eliminar el mensaje de la validacion
        actualizarError(false);

        //Asiganar el IDs
        //se recomienda instalar la libreria (npm i uuid)
        //siempre se recomienda asignar un id para poder lsitar 1 por uno. 
        cita.id = uuid();

        //Crear la cita
        crearCita(cita);

        //Reiniciar el form
        actualziarCita({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }


    return ( 
        <Fragment>
            <h1>Crear Cita</h1>

            {/*siempre para validar en este parte se utilzia operadores ternarios*/}
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualziarState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualziarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualziarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualziarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualziarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>

        </Fragment>
     );
}

//esta parte permite comentar la parte de los Compoenentes
//es decir para sacer qeu se le paso en este caso estoydiciendo que se paso una funcion. 
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}
 
export default Formulario;