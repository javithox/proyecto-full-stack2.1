import React, { type CSSProperties } from "react";

const estiloCarta:CSSProperties={
    color:'#39ff14',
    padding:'10px',
    margin:'10px'
}

const CartaProductos = ({ image, name, attributes, price}) => {
    return(
        <div className="product-card">
            <img className="product-img" src={image} alt={name} height='40%' width='40%'/>
            <p style={estiloCarta} className="product-name">{name}</p>
            <p style={estiloCarta} className="product-attributes">{attributes}</p>
            <p style={estiloCarta} className="product-price">{price}</p>
        </div>
    );
};

export default CartaProductos;