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