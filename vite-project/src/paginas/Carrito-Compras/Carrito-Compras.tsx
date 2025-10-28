import { useState ,type CSSProperties } from "react";

const seccionProductos:CSSProperties={
    display:"flex",
    alignItems:'center',
    gap:10,
    marginTop:10
}

interface Props{
    nombreProducto:string,
    cantidadProducto?:number,
    precioProducto:number
};

export const CarritoCompras = ({nombreProducto,cantidadProducto = 1}: Props) => {
    const [count,setCount] = useState(cantidadProducto);

    const nameProduct:CSSProperties = {
        //width:150
        color:count===0 ? 'red':'#39ff14',
    };

    const handlerClick = ()  =>{
        console.log(`Click en ${nombreProducto}`)
    };

    const handleAdd = () => {
        setCount(count+1);
    };
    const handleSubstract = () => {
        if(count===1) return;
        setCount(count-1);
    };

    return(
        <section>
            <span style={nameProduct}>{nombreProducto}</span>
            <button onClick={handleAdd}>+1</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    );

};

