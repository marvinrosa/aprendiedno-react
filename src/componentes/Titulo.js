import React from "react";

const Titulo =({usuario='Usuario',color='Gray'})=>{
    
    // const nombre = props.usuario;
    //const color ='Red';
    return(
        <>
         <h1 className="titulo" style={{color:color}}>Hola, {usuario}</h1>
        </>
    );
}


export {Titulo};