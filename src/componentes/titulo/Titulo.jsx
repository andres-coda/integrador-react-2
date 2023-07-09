/* El componente titulo se encarga de renderizar un mensaje que le llega por prop, lo renderiza en h1
y se encuentra en la cabecera de la aplicación, arriba del naveagdor*/

import './titulo.css'
function Titulo({titulo}){
    return (
        <div className="titulo">
            <h1>{titulo.toUpperCase()}</h1>
        </div>
    );
};

export default Titulo;