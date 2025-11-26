import React from "react";
import { CarritoCompras } from "./Carrito-Compras"; // Ajusta ruta si es necesario
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrito.css'; // Importamos los estilos

interface ItemProductos {
  nombreProducto: string;
  cantidadProducto: number;
  precioProducto: number;
}

const ItemsEnCarro: ItemProductos[] = [
  { nombreProducto: 'GPU', cantidadProducto: 3, precioProducto: 110000 },
  { nombreProducto: 'GPU Roja', cantidadProducto: 7, precioProducto: 120000 },
  { nombreProducto: 'Teclado Gamer', cantidadProducto: 15, precioProducto: 30000 },
  { nombreProducto: 'Auriculares', cantidadProducto: 20, precioProducto: 25000 },
  { nombreProducto: 'Silla Gamer', cantidadProducto: 30, precioProducto: 55000 },
  { nombreProducto: 'CPU Escritorio', cantidadProducto: 14, precioProducto: 450000 },
  { nombreProducto: 'Monitores', cantidadProducto: 33, precioProducto: 200000 },
  { nombreProducto: 'MousePad', cantidadProducto: 17, precioProducto: 5000 },
  { nombreProducto: 'Procesadores', cantidadProducto: 30, precioProducto: 300000 }
];

export function AppCarro() {
    return (
        <section className="cart-section">
            <div className="container">
                
                {/* Título */}
                <div className="row">
                    <div className="col-12">
                        <h1 className="titulo-carro">TU CARRITO DE COMPRAS</h1>
                    </div>
                </div>

                {/* Lista de Productos */}
                <div className="row">
                    {ItemsEnCarro.map(({ nombreProducto, cantidadProducto, precioProducto }) => (
                        <CarritoCompras 
                            key={nombreProducto} 
                            name={nombreProducto} 
                            quantity={cantidadProducto} 
                            price={precioProducto} 
                        />
                    ))}
                </div>

                {/* Botón de Pagar (Ejemplo) */}
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <button className="btn btn-primary btn-lg" style={{
                            backgroundColor: '#1E90FF', 
                            border: 'none', 
                            fontFamily: 'Orbitron',
                            fontWeight: 'bold',
                            padding: '15px 40px'
                        }}>
                            PROCEDER AL PAGO
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}