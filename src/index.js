import React from 'react';
import ReactDOM from 'react-dom';

const nombre = 'Marvin';
const color ='Blue';
const sesion =true;
const pais = 'El Salvador';
const amigos = ['Javier','Evelyn','Danilo'];

//Haciendo uso del operador ternario para manejar condicionales con JSX
const JSX=(
  <>
      {sesion === true ? 
      <>
        <h1 className="titulo" style={{color:color}}>Hola, {nombre}</h1>
        <p>Tenga un buen dia</p>
        {pais &&  <p>Tu eres de: {pais}</p>} 
        <ul>
          {amigos.map((amigo,index)=> <li key={index}>{amigo}</li>)}
        </ul>
      </>
       : 
       <p>No has iniciado sesion</p>}
      
  </>
);

// const verificarSesion =sesion=>{
//   if(sesion === true){
//     return JSX;
//   }
//   else{
//     return <h1>No has inciado sesion.</h1>
//   }
// }

// ReactDOM.render(
//   verificarSesion(sesion),
//   document.getElementById('root')
// );

ReactDOM.render(
  JSX,
  document.getElementById('root')
);