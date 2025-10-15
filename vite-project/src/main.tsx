import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InfoTienda } from './InfoProducto/InfoProducto';
import './estilo-Pagina.css';
//import { CarroCompras } from './CarroCompras/carro-compras';
import { CarritoApp } from './CarritoApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InfoTienda />
    <CarritoApp/>
  </StrictMode>,
)
