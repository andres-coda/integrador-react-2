import { useContext } from "react";
import { contextoGeneral } from "../contexto/ContextoGeneral";
import Boton from "../botones/Boton";
import './categoria.css'

function Categoria(){
    const { datos, setDatos } = useContext(contextoGeneral);
    const btnClick = (e)=>{
        setDatos({...datos, categoriaActual: e.target.id, pantalla: 0, subtitulo: `categoria: ${e.target.id}`  })
    }

    return (
  
            <div className="menu">
                { datos.categoria.map((dato, index)=>(
                    <Boton key={index} btn={{"id": dato, "clase":"categoria", "texto": dato }} click={btnClick} />
            ))}
            </div>
      
    );
};

export default Categoria;