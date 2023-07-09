/* Categorias es un componente que muestra las categorías de productos que hay en la api. Estas las obtienen 
mapeando el arrglo de categorías que se arma en el contexto, y las renderiza en botones. Tambíen tiene 
una constante función flecha que es pasada por prop a cada boton, y cambia el estado del objeto 
datos.categoriaActual para que se muestre solo esa categoría, y tambíen cambia el titulo de la pagina 
para que se muestre la categoría actual. Y pone la pantalla en la pantalla inicial */

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