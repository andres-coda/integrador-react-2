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
