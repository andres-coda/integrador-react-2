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