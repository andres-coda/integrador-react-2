import { createContext, useState, useEffect } from "react";
export const contextoGeneral = createContext({});
export const ProvedorContextoGeneral= ({ children }) => {
    const [datos, setDatos] = useState({ data: [], categoria: [], categoriaActual: "todas", elementoSeleccionado: undefined, subtitulo: "Su tienda", carrito: [], pantalla: 0 });
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => {
            let arrayCategorias = data.reduce((uniqueCategories, item) => {
              if (!uniqueCategories.includes(item.category)) {
                uniqueCategories.push(item.category);
              }
              return uniqueCategories;
            }, []);+
            arrayCategorias.push("todas");
            setDatos({...datos, "data":data, "categoria":arrayCategorias })
          });
      }, []);
    return (
        <contextoGeneral.Provider value={ {datos, setDatos} } >
            {children}
        </contextoGeneral.Provider>
    );
};