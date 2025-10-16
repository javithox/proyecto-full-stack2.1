

import React, {useState, type CSSProperties} from "react";

interface Props{
    name:string;
    price?:number;
    quantity?:number;
}

export const CarroCompras=({name,price=0,quantity=1}:Props) =>{
    const[count,setCount]=useState(quantity);

    const nombreProducto:CSSProperties={
        color:count===0? 'red':'#39ff14'
    }
    const priceColor:CSSProperties={
        color:count===0? 'red':'#39ff14'
    }
    const handleClick = () =>{
        console.log(`Hizo click en ${name}`);
    };

    const handlleAdd = () =>{
        setCount(count + 1)
    }
    const handleSubstract = () =>{
        if(count===0) return;
        setCount(count - 1);
    }

    return(
        <section className="container-carro">
            
            <span className="textItem" style={nombreProducto}>{name}</span>
            <button className="btn-carrito" onClick={handlleAdd}>+1</button>
            <span style={nombreProducto}>{count}</span>
            <button className="btn-carrito" onClick={handleSubstract}>-1</button>
            <span style={priceColor}> ${price}</span>
        </section>
    )
}