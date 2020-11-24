//para hacer esta importacion se utiliza el snipet imr
//los props son utilizados para comunicacion de un compoennte a otro
import React, { Fragment } from 'react';
/*
se lo realzia de esta manera cuando se va a escribir codigo js dentro del return. 
function Header({titulo}) {

    return(
        
        <Fragment>
            /* en esta parte se lo llama al props 
            <h1>{ titulo }</h1>
        </Fragment>
    )
}
*/

/*Se lo puede realizar de esta forma siempre y cuando no haya que escribir dentro codigo js*/
const Header = ({titulo}) => (
   <h1>{titulo}</h1>
)

export default Header;