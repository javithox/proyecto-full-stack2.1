import { ItemContador } from "./carrito-Compras/contadorProductos";

export function FisrtSteppApp() {
    return(
        <>
            <h1>Carrito de compras</h1>
            <ItemContador nombreProducto="gpu-roja" precioProducto={250000} />
            <ItemContador nombreProducto="gpu negra" precioProducto={10}/>
            <ItemContador nombreProducto="silla gamer" precioProducto={20}/>
            <ItemContador nombreProducto="audifonos" precioProducto={10}/>
            <ItemContador nombreProducto="teclado-gamer" precioProducto={30}/>
            <ItemContador nombreProducto="pantallas" precioProducto={15}/>
            <ItemContador nombreProducto="procesador" precioProducto={12}/>
            <ItemContador nombreProducto="fundas para mouse" precioProducto={40}/>
        </>
    )
}