import type { CSSProperties } from "react";
import miLogo from '../logo-image/image-removebg-preview.png';

const nombretienda:string='Level-Up'


const estiloTienda:CSSProperties={
    color:'#39ff14',
    padding:10,
    margin:10,
    marginTop:20,
    fontFamily:'Arial, sans-serif',
    textAlign:'left',
    textShadow:'2px 2px 4px #39ff14'
}

export const InfoTienda = () => {
    return(
        <>
            <section className="contenedor-infoProducto">
                <div>
                    <h1 style={estiloTienda}>Productos</h1>
                    <h2 style={estiloTienda}><img src={miLogo} alt="Logo" height="90px" width="90px" /> {nombretienda}</h2>

                </div>
            </section>
                
            

        </>
    )
}