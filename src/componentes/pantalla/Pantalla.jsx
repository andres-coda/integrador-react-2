/* Pantalla es lo que se muestra debajo del navegador, es lo único que cambía, que se renderiza
salvo el boton carrito del navegador que avisa si hay algo en el carrito. Decide dependiendo 
del numero que está en el contexto objeto.pantalla que componentes renderiza, y si hay un productos seleccionado
renderiza productosdetallados, por encima de los demás productos,al medio de la pantalla, elevado en el eje z.
Para el 0 mapea los objeto.datos y utiliza el componente Producto para renderizarlo en dormato de tarjeta,
si la pantalla es 1, utiliza el componente categoria para mostrar un menu, si objeto.pantalla es 2
usa el componete carrito.*/

import { useContext } from "react"
import { contextoGeneral } from '../contexto/ContextoGeneral'
import Producto from "../productos/Producto";
import './pantalla.css'
import ProductoDetalles from "../productosDetalles/ProductoDetalles";
import Carrito from "../carrito/Carrito";
import Categoria from "../categoria/Categoria";
function Pantalla(){
    const { datos, setDatos } = useContext(contextoGeneral);
    const btnClick = (e) => {
        
        setDatos({ ...datos, elementoSeleccionado: datos.data.find(dato => Number(dato.id) === Number(e.currentTarget.id))})
    }
    return(
        <>
        <div className="pantalla">
            {datos.pantalla=== 0 ? (     
                <>
                {datos.data.map((dato)=>{
                     return datos.categoriaActual==="todas"  || datos.categoriaActual===dato.category ? (
                        <Producto key={dato.id} dato={dato} click={btnClick}/>
                    ) : (null)
                }  )}
                {datos.elementoSeleccionado!=undefined ? (<ProductoDetalles dato={datos.elementoSeleccionado}/>):(null)}
                </>   
            ): datos.pantalla=== 1 ? (
                <>
                <Categoria/>
                </>
            ): datos.pantalla=== 2 ? (
                <>
                <Carrito />
                </>
            ): (null)}
        </div>
        </>
    );
};

export default Pantalla;