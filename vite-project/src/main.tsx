import { createRoot } from 'react-dom/client'
import { InfoTienda } from './infoProducto/InfoProducto';
import './estilo-Pagina.css';
import { CarritoApp } from './Components/CarritoApp';


const container=document.getElementById('root');
const root =createRoot(container);
root.render(<InfoTienda/>)


