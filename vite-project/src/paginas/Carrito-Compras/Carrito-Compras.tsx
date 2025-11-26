import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrito.css';

interface Props {
    name: string;
    quantity: number;
    price: number;
    onAdd: () => void;       // Función recibida del padre
    onSubstract: () => void; // Función recibida del padre
}

export const CarritoCompras = ({ name, quantity, price, onAdd, onSubstract }: Props) => {
    
    // Formatear precio
    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
    };

    // Clases dinámicas para estilo visual
    const itemClass = quantity === 0 ? "cart-item item-empty" : "cart-item";
    const nameClass = quantity === 0 ? "product-name text-empty" : "product-name";

    return (
        <div className="col-12 col-lg-8 mx-auto">
            <div className={itemClass}>
                
                {/* 1. Nombre y Precio Unitario */}
                <div className="col-12 col-md-5 mb-3 mb-md-0 text-center text-md-start">
                    <h3 className={nameClass}>{name}</h3>
                    <span className="product-price">Unitario: {formatPrice(price)}</span>
                </div>

                {/* 2. Controles (+ -) */}
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <div className="quantity-controls">
                        <button className="btn-qty" onClick={onSubstract}>-</button>
                        <span className="qty-display">{quantity}</span>
                        <button className="btn-qty" onClick={onAdd}>+</button>
                    </div>
                </div>

                {/* 3. Subtotal Calculado */}
                <div className="col-12 col-md-3">
                    <div className="subtotal">
                        Subtotal: {formatPrice(price * quantity)}
                    </div>
                </div>

            </div>
        </div>
    );
};