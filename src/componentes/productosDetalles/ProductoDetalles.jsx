import { useState, useContext } from "react";
import TituloProducto from "../tituloProducto/TituloProducto";
import Boton from "../botones/Boton";
import { contextoGeneral } from "../contexto/ContextoGeneral";
import './productoDetalles.css'

function ProductoDetalles({ dato }){
    const {datos, setDatos } = useContext(contextoGeneral);
    let indice = datos.carrito.findIndex(datoCarrito => Number(datoCarrito.id) === Number(dato.id));
    const cantidadInicial = () =>{
        if ( indice !== -1 ) {
            return Number(datos.carrito[indice].cantidad);
        } else return 0;
    }
    const [cantidadProductos, setCantidadProductos] = useState(cantidadInicial);
    const btnClick = (e) => {
        let btn = e.target.id;
        switch (btn) {
            case "resta":
                if (cantidadProductos>0) {
                    setCantidadProductos(cantidadProductos-1);
                } 
            break;
            case "suma":
                setCantidadProductos(cantidadProductos+1);
            break;
            case "aceptar":
                let objetoModificado = {...datos, elementoSeleccionado:undefined };
                if ( indice !== -1 ) {
                    if (cantidadProductos<=0){
                        objetoModificado.carrito.splice(indice,1);
                    } else {
                        objetoModificado.carrito[indice].cantidad= cantidadProductos;
                    }
                } else {
                    let nuevo = { ...dato, cantidad : cantidadProductos };
                    objetoModificado.carrito.push(nuevo);
                }
                setDatos(objetoModificado);
            break;
            case "cerrar":
                setCantidadProductos(0);
                setDatos( {...datos, elementoSeleccionado:undefined } );
            break;
            default:
                console.log("no existe ese boton");                
            break;
        }
    }
    return(
        <>
        <div className="transparente">

            <div className="producto-Detalles">
                <Boton btn={ {"id": "cerrar", "clase":"cerrar", "texto": "X"} } click={btnClick} />
                <TituloProducto dato={ dato }/>
                <h3>CATEGORÍA: { dato.category.toUpperCase() }</h3>
                <div className="imagen-Descripcion">
                    <img src={ dato.image } alt={ dato.title }/>
                    <div className="descripcion">
                        <p>{ dato.description }</p>
                    </div>
                </div>
                <div className="valoracion-precio">
                    <div className="valoracion">
                        <h3>Valoración: { dato.rating.rate }</h3>
                        <h3>Cantidad de votos: { dato.rating.count }</h3>
                    </div>
                    <p>${ dato.price }</p>
                </div>
                <div className="botones">
                    <Boton btn={ {"id": "resta", "clase":"btn-detalles", "texto": "-"} } click={btnClick} />
                    <div>
                        <p>{cantidadProductos}</p>
                        {cantidadProductos >0 ? (
                            <p>${(Number(cantidadProductos)*Number(dato.price)).toFixed(1)}</p>):(
                                null
                                )}
                    </div>
                    <Boton btn={ {"id": "suma", "clase":"btn-detalles", "texto": "+"} } click={btnClick} />
                    <Boton btn={ {"id": "aceptar", "clase":"btn-detalles", "texto": "aceptar"} } click={btnClick} />
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductoDetalles;