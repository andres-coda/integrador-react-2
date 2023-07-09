import { useContext } from "react";
import { contextoGeneral } from "./componentes/Contexto/ContextoGeneral";
import './App.css'
import Navegador from './componentes/Navegador/Navegador'
import Pantalla from './componentes/pantalla/Pantalla'
import Titulo from './componentes/titulo/Titulo'
function App() {
  const { datos } = useContext(contextoGeneral);
  return (
    <>
        {datos=== undefined ? (<h1 onClick={(e)=> {console.log(datos)}}>Cargando...</h1>) : (
          <>
            <Titulo titulo={datos.subtitulo}/>
            <Navegador />
            <Pantalla />
          </>
        )}
    </>
  )
}

export default App
