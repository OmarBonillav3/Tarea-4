import React, { useState } from 'react';
import AgregarContacto from './AgregarContacto';
import ListadoContacto from './ListadoContacto';
import './App.css';

function Padre() {
  return (
    <div className="Padre">
      <h1 className='h1-padre'>Agenda de contacto React</h1>
      <AgregarContacto/>
      <ListadoContacto/>
    </div>
  );
}

export default Padre;
