import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrito.css';

interface Props {
    name: string;
    quantity?: number;
    price: number;
}

export const CarritoCompras = ({ name, quantity = 1, price }: Props) => {
    const [count, setCount] = useState(quantity);

    // Formatear precio a moneda (Ej: $100.000)
    const formatPrice = (amount: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount);
    };

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubstract = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    // Clase dinámica: Si está en 0, se pone rojo (definido en CSS)
    const itemClass = count === 0 ? "cart-item item-empty" : "cart-item";
    const nameClass = count === 0 ? "product-name text-empty" : "product-name";

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
                        <button className="btn-qty" onClick={handleSubstract}>-</button>
                        <span className="qty-display">{count}</span>
                        <button className="btn-qty" onClick={handleAdd}>+</button>
                    </div>
                </div>

                {/* 3. Subtotal Calculado */}
                <div className="col-12 col-md-3">
                    <div className="subtotal">
                        Total: {formatPrice(price * count)}
                    </div>
                </div>

            </div>
        </div>
    );
};