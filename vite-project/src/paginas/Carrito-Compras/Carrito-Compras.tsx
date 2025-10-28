import { useState ,type CSSProperties } from "react";


const seccionProductos:CSSProperties={
    display:"flex",
    position:"absolute",
    alignItems:'center',
    gap:10,
    marginTop:10,
    top:'400px'
}

interface Props{
    name:string,
    quantity?:number,
    price:number
};

export const CarritoCompras = ({name,quantity = 1}: Props) => {
    const [count,setCount] = useState(quantity);

    const nameProduct:CSSProperties = {
        //width:150
        color:count===0 ? 'red':'#39ff14',
    };

    const handlerClick = ()  =>{
        console.log(`Click en ${name}`);
    };

    const handleAdd = () => {
        setCount(count+1);
    };
    const handleSubstract = () => {
        if(count===1) return;
        setCount(count-1);
    };

    return(
        <section style={seccionProductos}>
            <span className="span-producto" style={nameProduct}>{name}</span>
            <button style={{backgroundColor:'#39ff14'}} onClick={handleAdd}>+1</button>
            <span style={{color:'#39ff14'}}>{count}</span>
            <button style={{backgroundColor:'#39ff14'}} onClick={handleSubstract}>-1</button>
        </section>
    );

};

