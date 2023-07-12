/* El contextoGeneral se encarga de manejar la mayoría de estados de la app. Estan todos en el objeto datos. Obtiene
los datos de la api a travez del fetch. Con un sueEffect para que no se repita cada vez que se renderiza. El useState
del objeto, lo inicializa poniendo los datos (data) que necesita de la api en un arreglo vacio, igual que las categorias
la categoriaActual la inicializa en "todas" que hace referencia a todos las categorias, el elementoSeleccionado es undefined,
esta propiedad mas adelante le agrego los datos del producto que seleccione, para poder mostrar en diferentes lugares,
si es undefinido no renderiza nada (logica en cada componente que lo necesite, carrito y pantalla), Subtitulo se encarga
de los mensajes que salen en la cabecera de la pantalla, se modifica en el componente categoria, carrito, y a travez del
navegador, carrito es un arreglo vacío que se va a ir llenando a medida que se agreguen productos al carro, y a su vez maneja
las tres pantallas, intente hacerlo con routers pero me dio un error 522, supongo que coincidio con que se cayo la api. 
Pero ante la duda lo volví atras y sigo utilizando las pantallas numeradas.*/

import { createContext, useState, useEffect } from "react";
export const contextoGeneral = createContext({});
export const ProvedorContextoGeneral= ({ children }) => {
    const [datos, setDatos] = useState({ data: [], categoria: [], categoriaActual: "todas", elementoSeleccionado: undefined, subtitulo: "Su tienda", carrito: [], pantalla: 0 });
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .catch(error => {
          console.error('Error en el fetch:', error);
          throw error; 
        })
          .then(res => res.json())
          .then(data => {
            let arrayCategorias = data.reduce((uniqueCategories, item) => {
              if (!uniqueCategories.includes(item.category)) {
                uniqueCategories.push(item.category);
              }
              return uniqueCategories;
            }, []);
            arrayCategorias.push("todas");
            setDatos((prev)=>({...datos, "data":data, "categoria":arrayCategorias }));
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error)
          });
      }, []);
    return (
        <contextoGeneral.Provider value={ {datos, setDatos} } >
            {children}
        </contextoGeneral.Provider>
    );
};