import React, { useState, useEffect } from 'react';
import './App.css';

function ListadoContacto(){
    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        fetch ('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(data => {
            setContactos(data);
        });
    }, []);
    return (
        <div className='Listado-contactos'>
            <h2 className='h2-listado'>Lista de Contactos</h2>
          <ul>
            {contactos.map(contacto =>{
               <li key = {contacto.id}>
                <div>{contacto.nombre}</div>
                <div>{contacto.email}</div>
                <div>{contacto.telefono}</div>
               </li> 
            })}  
          </ul>
        </div>
    );
}

export default ListadoContacto;