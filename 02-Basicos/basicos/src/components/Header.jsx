import React from 'react'

//Funcion
function Header ({titulo}){

    //en esta parte se puede poner codigo js
    
    const edad = 18;
    let mensaje;
    if(edad >= 18){
       mensaje = 'Eres Mayor de edad';
    }else{
        mensaje = 'Eres Menor de edad';
    }

    //ademas se pone las clases con CLASSNAME y los ID se los escribe normal. 

    return(
    <h1 className="encabezado">{titulo}</h1>
    );

}

export default Header;