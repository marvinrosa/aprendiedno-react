import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario.js';




const App = () =>{

  //Hook
  const [sesion,cambiarEstadoSesion]=useState(true);

  return(
    <>
      {sesion === true ? 
      <> 
        <Usuario/>
        <button onClick={() => cambiarEstadoSesion(false)}>Cerrar sesion</button>
      </> 
      :
      <>
       <p>No has iniciado sesion</p>
       <button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesion</button>
      </>
      }
    </>
  );
}


//Haciendo uso del operador ternario para manejar condicionales con JSX

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
  <App/>,
  document.getElementById('root')
);