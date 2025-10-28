import { CarritoCompras } from "./Carrito-Compras";

interface ItemProductos{
  nombreProducto:string;
  cantidadProducto:number;
  precioProducto:number;

}

const ItemsEnCarro:ItemProductos[]=[
  {nombreProducto:'GPU',cantidadProducto:3,precioProducto:110000},
  {nombreProducto:'GPU-Roja',cantidadProducto:7,precioProducto:120000},
  {nombreProducto:'Teclado-Gamer',cantidadProducto:15,precioProducto:30000},
  {nombreProducto:'Auriculares',cantidadProducto:20,precioProducto:25000},
  {nombreProducto:'Sillas-Gmaer',cantidadProducto:30,precioProducto:55000},
  {nombreProducto:'CPU-Escritorio',cantidadProducto:14,precioProducto:450000},
  {nombreProducto:'Monitores',cantidadProducto:33,precioProducto:200000},
  {nombreProducto:'MousePad',cantidadProducto:17,precioProducto:5000},
  {nombreProducto:'Procesadores',cantidadProducto:30,precioProducto:300000}

];

export function AppCarro(){
    return(
        <>
            <h1>Carro de compras</h1>
            {ItemsEnCarro.map(({nombreProducto,cantidadProducto,precioProducto}) => (
                <CarritoCompras key={nombreProducto} nombreProducto={nombreProducto} cantidadProducto={cantidadProducto} precioProducto={precioProducto}/>
            
            ))}
        </>
    )
}
export default AppCarro;