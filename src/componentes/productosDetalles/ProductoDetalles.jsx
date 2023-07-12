/* ProductoDetalles se encarga de mostrar los detalles de cada producto. Al producto lo paso desde el contexto,
muestra el titulo, la categoría, una imagen, los detalles, la valoracion y el precio, además muestra cuatro botones
y dos <p>, uno es la cantidad a agregar en el carrito, y el otro el precio total. (multiplica la cantidad por el 
    precio individual de cada prodcuto). Un boton se encarga de cerrar la vista de detalles, y vuelve a undefined
    el objeto.seleccionado, y no guarda ningun dato. el de suma crea un nuevo objeto con los datos pasados por prop,
    si es que no existe en carritos, si esta en carrito toma los datos de ese objeto y le suma uno, sino
    le agrega la caracteristica cantidad, luego la suma en uno. El boton restar, simplemente resta en 1 la 
    cantidad del objeto.cantidad. Si es 0, lo deja en 0. El boton aceptar compara el id del producto seleccionado
    con el carrito, y actualiza ese objeto del array, si no existe le pasa el nuevo objeto creado anteriormente al 
    final por el metodo push.
     */


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
                    setCantidadProductos((prev)=>(Number(prev)-1));
                } 
            break;
            case "suma":
                setCantidadProductos((prev)=>(Number(prev)+1));
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
                setDatos((prev)=>({...prev, elementoSeleccionado:undefined } ));
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