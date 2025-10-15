import React, {useState, type CSSProperties} from "react";

interface Props{
    name:string;
    price?:number;
    quantity?:number;
}

export const CarroCompras=({name,price=0,quantity=1}:Props) =>{
    const[count,setCount]=useState(quantity);

    const nombreProducto:CSSProperties={
        color:count===1? 'red':'green'
    }
    const priceColor:CSSProperties={
        color:price===0? 'red':'black'
    }

    return(
        <section className="container-carro">
            <span>{name}</span>
            <button className="btn-carrito">+1</button>
            <span>{count}</span>
            <button className="btn-carrito">-1</button>
            <span> ${price}</span>
        </section>
    )
}