//se pone fragment para rodear un elemento y no poner mas codigo html
//cualquier cosa qeu se queire impleemtnar en el resto de componente siempre se pone en el padre no en el hijo.
//en esta forma importe el useState. 
import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {
  /*Utilizacion del state:es como que coge los datos del formulario para psarlos renderizados y ahcer mas agil la app.  */
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  /*En esta parte se carga codigo de js se va poner los condicionales en componentes*/
  /*Condicional de componentes. */
  let componente;
  if(cargando){
    componente = <Spinner />
  }else if(total === 0){
    componente = <Mensaje />
  }else{
    componente = <Resultado
                    total = {total} 
                    plazo = {plazo} 
                    cantidad = {cantidad} 
                />
  }

  return (
    <Fragment>
      <Header
      //creacion de un props
      titulo = "Cotizador de Prestamos"
       />

      <div className="container">
        <Formulario
          /*en esta parte los llamos alos state.*/
          cantidad = {cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />

        <div className="mensajes">
           {componente}
        </div>

      </div>
    </Fragment>
  );
}

export default App;
