/* Este componente se encarga de crear las tarjetas con el nombre, la imagen, y el precio de cada producto, cada div
tiene como id, la id del producto a crer, el producto pasa como prop, y también la funcion que caaptura el evento
click del div. Muestra la imagen, y le pone un alt con el titulo del producto. y para el precio lo pasa a numero y
le aplica la función toFixed para dejarle como maximo dos decimales.*/

import TituloProducto from "../tituloProducto/TituloProducto";
import './producto.css'
function Producto({dato, click}){

    return (
        <>
            <div className="producto" onClick={click} id={dato.id}>
                <TituloProducto dato={dato} />
                <img src={dato.image} alt={dato.title}/>
                <p>$ {Number(dato.price).toFixed(2)}</p>
            </div>
        </>
    );
};

export default Producto;