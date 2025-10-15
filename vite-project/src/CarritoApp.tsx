import { CarroCompras } from "./CarroCompras/carro-compras";
import "./estilo-Pagina.css";

interface CarroComprasItem{
    productName: string;
    price?:number;
    quantity?:number;
}

const ProductosEnCarro:CarroComprasItem[]=[
    {productName:'GPU-Roja', price:95000, quantity:10},
    {productName:'GPU-negra', price:75000, quantity:15},
    {productName:'Teclado-Gamer',price:25000, quantity:14},
    {productName:'Mouse',price:15000, quantity:20},
    {productName:'Pantallas',price:85000, quantity:30},
    {productName:'Sillas-Gamers',price:65000,quantity:25},
    {productName:'Audifonos',price:28000,quantity:15},
    {productName:'Fundas-para-Mouse',price:5000, quantity:40}
];

export function CarritoApp(){
    return(
        <>
        <div className="container-carrito">
            <h1>Carritos de compras</h1>
            {ProductosEnCarro.map(({productName,price,quantity})=>(
            <CarroCompras key={productName} name={productName} price={price} quantity={quantity}/>
            ))}
        </div>

        </>
    );
}
