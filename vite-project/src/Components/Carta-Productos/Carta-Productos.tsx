import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado
import './Carta-producto.css';

// Si usas TypeScript, define la interfaz (opcional)
interface CartaProps {
    image: string;
    name: string;
    attributes: string;
    price: string;
}

const CartaProductos = ({ image, name, attributes, price }: CartaProps) => {
    return (
        // Clase 'h-100' de Bootstrap asegura que ocupe toda la altura de la columna
        <div className="card product-card h-100">
            
            <img 
                src={image} 
                className="card-img-top product-img" 
                alt={name} 
            />
            
            <div className="card-body d-flex flex-column">
                <h5 className="card-title product-name">{name}</h5>
                <p className="card-text product-attributes">{attributes}</p>
                
                {/* Sección inferior (Precio y Botón) siempre alineada al fondo */}
                <div className="mt-auto">
                    <span className="product-price">{price}</span>
                    <button className="btn btn-neon w-100">
                        Agregar al Carrito
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CartaProductos;