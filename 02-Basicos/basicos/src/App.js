import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //el state se úede utilziar para ver los datos que se ingresan en un formulario
  //o en un carrito de compras.
   
  //Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50},
    { id: 2, nombre: 'Camisa NodeJS', precio: 30},
    { id: 3, nombre: 'Camisa VueJS', precio: 40},
    { id: 4, nombre: 'Camisa Angular', precio: 20},
  ]);

  //creando otro state para el carrito 
  const [ carrito, agregarProducto ] = useState([]);

  //Obtener la fecha
  let fecha = new Date().getFullYear();

  return (
    <Fragment>

      <Header
        titulo = 'Tienda Virtual' 
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto} 
        />
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer
        //los numeros o obejtos se pone con {}
        fecha = {fecha} 
      />
      
    </Fragment>
  );
}

export default App;
