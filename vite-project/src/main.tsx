import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InfoTienda } from './infoProducto/InfoProducto';
import './estilo-Pagina.css';
import { CarritoApp } from './CarritoApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InfoTienda />
    <CarritoApp/>
  </StrictMode>,
)
