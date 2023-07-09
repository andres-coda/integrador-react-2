/* El carrito se encarga de mostrar los productos que se agregan a el. Y de efectuar la compra, cuando esto se hace
muestra un mensaje en la cabecera de la pantalla que dice gracias por su compra y le imprime la cantidad de monedas
que gasto. Esta conformado de una tabla, con sus titulo en tr td diferenciado por la clase. No pude hacerlo con 
thead tr th porque no me captaba las columnas. y un cuerpo que se llena map el arreglo que guarda los elementos que
se agregan al carro. Este arreglo es parte del Objeto datos, que es pasado por contexto. Tiene una variable total
que se encarga de sumar cada producto multiplicado por la cantidad que se agrego al carrito. Y dos funciones de 
evento click, una maneja el boton comprar, que borra el contenido de carrito, y envía un mensaje, y la otra que 
cada vez que se le hace click a un tr de productos, te muestra los detalles de ese producto a travez del componente
productosDetalles. Si el carrito no tiene nada, muestra un mensaje que dice que está vacío */

import { useContext } from "react";
import { contextoGeneral } from "../contexto/ContextoGeneral";
import ProductoDetalles from "../productosDetalles/ProductoDetalles";
import './carrito.css'
import Boton from "../botones/Boton";

function Carrito() {
  const { datos, setDatos } = useContext(contextoGeneral);
  let total = 0;
  const btnClick =(e)=>{
    setDatos({...datos, subtitulo: `gracias por su compra, gasto $${total.toFixed(2)} `, carrito:[], pantalla:0});
  }
  const trClick = (e) => {
    setDatos({ ...datos, elementoSeleccionado: datos.data.find(dato => Number(dato.id) === Number(e.currentTarget.id))})
  }

  const calcularSubtotal = (cantidad, precio) => {
    return Number(cantidad) * Number(precio);
  };

  return (
    <>
    { datos.carrito.length >0 ? (
      <table>
      <tbody>
          <tr className="tituloTabla">
            <td>CANTIDAD</td>
            <td>PRODUCTO</td>
            <td>PRECIO UNITARIO</td>
            <td>PRECIO TOTAL</td>
          </tr>        
          {datos.carrito.map((dato) => {
            const subtotal = calcularSubtotal(dato.cantidad, dato.price);
            total += subtotal;
            return (
              <tr key={dato.id} id={dato.id} className="reinglon" onClick={trClick}>
                <td>{dato.cantidad}</td>
                <td>{dato.title}</td>
                <td>$ {Number(dato.price).toFixed(2)}</td>
                <td>$ { subtotal.toFixed(2) }</td>
              </tr>
            );
          })}

          <tr className="total">
            <td>Total:</td>
            <td colSpan="3">$ {total.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="4"><Boton btn={{"id": "comprar", "clase":"comprar", "texto": "comprar"} } click={btnClick} /></td>
          </tr>
        </tbody>
      </table>
    ) : (
      <h1>EL CARRITO ESTA VACÍO</h1>
    )
    }
    {datos.elementoSeleccionado!=undefined ? (
    <ProductoDetalles dato={datos.elementoSeleccionado}/>
    ):(
      null
      )}
    </>
  );
}

export default Carrito;
