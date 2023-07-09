import { useContext } from "react";
import Boton from "../botones/Boton";
import { contextoGeneral } from '../contexto/ContextoGeneral';
import './navegador.css';
function Navegador() {
    const {datos, setDatos} = useContext(contextoGeneral);
    const btnClick= (e) =>{
        let btn = e.target.id;
        switch (btn){
            case "inicio":
                setDatos({...datos, pantalla :0, subtitulo : "Su tienda", categoriaActual:"todas"});
            break;
            case "categorias":
                setDatos({...datos, pantalla :1, subtitulo : "categorias"});
            break;
            case "carrito":
                setDatos({...datos, pantalla :2, subtitulo : "carrito"});
            break;
        }
    }
    return(
        <nav className="navegador">
            <Boton btn={ {"id": "inicio", "clase":"btn-Nav", "texto": "inicio"} } click={btnClick} />
            <Boton btn={ {"id": "categorias", "clase":"btn-Nav", "texto": "categorias"} } click={btnClick} />
            <Boton btn={ {"id": "carrito", "clase":"carrito", "texto": "carrito"} } click={btnClick} />
        </nav>
    );
};

export default Navegador;