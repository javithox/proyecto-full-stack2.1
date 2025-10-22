import React,{createContext , useContext, useState} from "react";

const carritoContext=createContext();

export function cartProvider({children}){
    const [carroItems,SetCarroItems]= useState([]);

    const añadiralCarro=(product) =>{
        SetCarroItems(prev => {
            const existing =prev.find(item => item.id === product.id);

            if(existing) {
                return prev.map(item => 
                    item.id === product.id ? {name: item.name, quantity: item.quantity+1} :item
                );
            }else{
                return [...prev,{...product,quantity: 1}];
            }
        });
    };

    const removerDelCarrito = (id) => {
        SetCarroItems(prev => prev.filter(item => item.id !==id));
    };

    return(
        <carritoContext.Provider value={{carroItems,añadiralCarro,removerDelCarrito}}>
            {children}
        </carritoContext.Provider>
    );
}
export const useCart = () => useContext(carritoContext);