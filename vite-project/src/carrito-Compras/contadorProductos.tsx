import { useState, type CSSProperties } from "react";


const seccionProductos:CSSProperties ={
    display:"flex",
    alignItems:"center",
    gap:10,
    marginTop:10
}

export function ItemContador({ nombreProducto, cantidadProducto = 1 }: Props) {
    const [count, setCount] = useState(cantidadProducto);

    const nameProducto:CSSProperties = {
    //width:150
    color: count ===1 ? "red":"black",
}
}


interface ItemContadorProp{
    nombreProducto:string,
    cantidadProducto?:number,
    precioProducto:number
}

export const ItemContador = ({nombreProducto,cantidadProducto,precioProducto}:ItemContadorProp) =>{
    return(
        <section style={seccionProductos}>
            <span style={nameProducto}>{nombreProducto}</span>
            <p>Cantidad:</p>
            <span>{cantidadProducto}</span>
            <button>+1</button>
            <button>-1</button>
            <p>Precio: <span>{precioProducto}</span></p>
        </section>
    )
}