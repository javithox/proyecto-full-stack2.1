import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InfoTienda } from './InfoProducto/InfoProducto';
import './estilo-Pagina.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InfoTienda/>
    
  </StrictMode>,
)
