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
