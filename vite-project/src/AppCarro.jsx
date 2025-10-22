import { create } from 'domain';
import {CarroCompras} from './CarroCompras/carro-compras'
import React from 'react'

function AppCarro(){
    return(
        <div>
            <h1>Carrito de compras</h1>
            <CarroCompras/>
        </div>
    );
}