import { createRoot } from 'react-dom/client'
import './estilo-Pagina.css';
import { StrictMode } from 'react';
import App from './App';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>
);


