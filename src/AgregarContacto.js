import React, { useState } from 'react';
import './App.css';

///DECLARANDO CONSTANTES, CREANDO LA FUNCIONALIDAD Y LLAMANDO EL URL///
function AgregarContacto(){
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')

   const handleSubmit = (event) => {
        event.preventDefault();

        async function postData (url = '',data = {}) {
            const response = await fetch (url, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify (data)
            });
            return response.json();
        }
        postData ('http://www.raydelto.org/agenda.php', {
            nombre: nombre,
            apellido: email,
            telefono: telefono,
        })
        .then (data => {
            console.log (data);
            'location'.reload()

            .then (response => response.json())
        })
        .catch (error => console.error(error));

    }
    
                ///APARTADO HTML///
    return (
    <form onSubmit = {handleSubmit}>    
        <div className="container">
            <div className="container-boton">
            <label htmlFor="nombre"></label>
               <input 
               type="text"
               id="nombre"
               placeholder='Nombre' 
               value={nombre} 
               onChange={(event) => setNombre (event.target.value)}
               />
        
            <label htmlFor="email"></label>
               <input 
               type="text"
               id="email" 
               placeholder='Email' 
               value={email} 
               onChange={(event) => setEmail (event.target.value)}
               />

            <label htmlFor="telefono"></label>
               <input 
               type="text"
               id="telefono" 
               placeholder='Telefono' 
               value={telefono} 
               onChange={(event) => setTelefono (event.target.value)}
               />
        </div>
        <button type="submit" className='agregar'>agregar contacto</button>
        </div>
    </form> 
    );
};
       

export default AgregarContacto;