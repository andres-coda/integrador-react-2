/* Este componente se encarga de crear los botones. se le pasa como prop un objeto btn, que contiene la id,
   la clase y el texto, y una función llamada click, que es el callback y le da la funcionalidad. Además 
  contiene un elemento <p> que solo se activa si hay productos en el carrito de compras y muestra la cantidad de
  productos diferentes que se agregaron.*/

import { useContext } from "react";
import { contextoGeneral } from "../contexto/ContextoGeneral";
import Carrito from '../carrito/Carrito'
import './boton.css'
function Boton({btn, click}){
  const {datos} = useContext(contextoGeneral);
  return (
    <>
        <button id={btn.id} className={btn.clase} onClick={click}>{btn.texto.toUpperCase()}{datos.carrito.length!==0 && btn.id=== "carrito"? (
          <p>{datos.carrito.length}</p>
        ):(
          null
        )}</button>
    </>
  )
}

export default Boton
