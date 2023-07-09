import './titulo.css'
function Titulo({titulo}){
    return (
        <div className="titulo">
            <h1>{titulo.toUpperCase()}</h1>
        </div>
    );
};

export default Titulo;