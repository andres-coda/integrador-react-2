/* Navegador es la barra de navegación, se que podría haberla hecho simplemente con enlaces, pero
me gusto la idea de botones. Tiene tres componentes botones, que les pasa las prop correspondiente
y la constante (funcion flecha) btnClick, que maneja el evento click de cada boton, y decide que se
renderiza en pantalla, lo hace cambiando los numeros del objeto.pantalla en el contexto. y tambien pone 
un título en la app, cambiandolo desde el contexto objeto.subtitulo */

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