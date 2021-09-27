import React from "react";
import {Titulo} from "./Titulo.js";


//Agregando Componentes
// Se debe escribir los componentes con letra incial mayuscula
const Usuario = () => {
    
    const pais = 'El Salvador';
    const amigos = ['Javier','Evelyn','Danilo'];

    return(
      <>
          <Titulo usuario="Marvin" color="Green" />
          <Titulo usuario="Steven" color="Blue"/>
          {pais &&  <p>Tu eres de: {pais}</p>} 
          <p>Tu lista de amigos es: </p>
          
          <ul>
            {amigos.map((amigo,index)=> <li key={index}>{amigo}</li>)}
          </ul>
          <p>Que tengas un buen dia. Saludos</p>
      </>
    );
  }

  export default Usuario;