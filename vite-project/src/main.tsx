import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InfoProducto } from './infoProducto/InfoProducto'
import { ItemContador } from './carrito-Compras/contadorProductos'


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <InfoProducto/>
    <ItemContador nombreProducto={'gpu-roja'} precioProducto={250000}/>
    <ItemContador nombreProducto={'gpu-negra'} precioProducto={205000}/>
    <ItemContador nombreProducto={'silla-gamer'} precioProducto={54000}/>
    <ItemContador nombreProducto={'audifonos'} precioProducto={35000}/>
    <ItemContador nombreProducto={'teclado-gamer'} precioProducto={25000}/>
    <ItemContador nombreProducto={'pantallas'} precioProducto={100000}/>
    <ItemContador nombreProducto={'procesador'} precioProducto={132880}/>
    <ItemContador nombreProducto={'fundas para mouse'} precioProducto={5000}/>
  </StrictMode>,
)
