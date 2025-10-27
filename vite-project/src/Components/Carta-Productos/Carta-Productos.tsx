import React from "react";

const CartaProductos = ({ image, name, attributes, price}) => {
    return(
        <div className="product-card">
            <img className="product-img" src={image} alt={name} />
            <p className="product-name">{name}</p>
            <p className="product-attributes">{attributes}</p>
            <p className="product-price">{price}</p>
        </div>
    );
};

export default CartaProductos;