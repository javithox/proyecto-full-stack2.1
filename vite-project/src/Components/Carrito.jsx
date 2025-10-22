import React, { useState } from "react";
import { useCart } from "../context/carritoContext";

function Carrito(){
    const [carroItems,SetCarroItems]=useCart();

    return(
        <div>
            <h2>Carrito de compras</h2>
        </div>
    );
}