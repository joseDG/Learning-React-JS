import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {id, nombre, precio } =  producto;

    //Agregando producto al carrito
    const seleccionarProdcuto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
           //los ... significa que se va clonar el ojeto se lo conoce como rest operation. 
            ...carrito,
            producto
        ]);
    }

    //Eliminar un producto del carrito
    const eliminarProdcuto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //Colocar los productos en el state
        agregarProducto(productos)
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>
            { productos
            ? 
                (
                    <button
                        type="button"
                        onClick={ () => seleccionarProdcuto(id)}
                    >Comprar</button>
                )

            :

                (
                    <button
                        type="button"
                        onClick={ () => eliminarProdcuto(id) }
                    >Eliminar</button>
                )
            }
        </div>
     );
}
 
export default Producto;