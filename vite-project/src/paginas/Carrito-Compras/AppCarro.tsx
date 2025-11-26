import React, { useState } from "react";
import { CarritoCompras } from "./Carrito-Compras"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carrito.css';

interface ItemProductos {
  nombreProducto: string;
  cantidadProducto: number;
  precioProducto: number;
}

// Datos iniciales
const DatosIniciales: ItemProductos[] = [
  { nombreProducto: 'GPU', cantidadProducto: 1, precioProducto: 110000 },
  { nombreProducto: 'GPU Roja', cantidadProducto: 1, precioProducto: 120000 },
  { nombreProducto: 'Teclado Gamer', cantidadProducto: 1, precioProducto: 30000 },
  { nombreProducto: 'Auriculares', cantidadProducto: 2, precioProducto: 25000 },
  { nombreProducto: 'Silla Gamer', cantidadProducto: 1, precioProducto: 55000 },
  { nombreProducto: 'CPU Escritorio', cantidadProducto: 1, precioProducto: 450000 },
  { nombreProducto: 'Monitores', cantidadProducto: 2, precioProducto: 200000 },
  { nombreProducto: 'MousePad', cantidadProducto: 1, precioProducto: 5000 },
  { nombreProducto: 'Procesadores', cantidadProducto: 1, precioProducto: 300000 }
];

export function AppCarro() {
    // Estado del carrito completo
    const [carrito, setCarrito] = useState<ItemProductos[]>(DatosIniciales);

    // Función para aumentar cantidad
    const aumentarCantidad = (nombre: string) => {
        const nuevoCarrito = carrito.map(item => {
            if (item.nombreProducto === nombre) {
                return { ...item, cantidadProducto: item.cantidadProducto + 1 };
            }
            return item;
        });
        setCarrito(nuevoCarrito);
    };

    // Función para disminuir cantidad
    const disminuirCantidad = (nombre: string) => {
        const nuevoCarrito = carrito.map(item => {
            if (item.nombreProducto === nombre && item.cantidadProducto > 0) {
                return { ...item, cantidadProducto: item.cantidadProducto - 1 };
            }
            return item;
        });
        setCarrito(nuevoCarrito);
    };

    // Calcular TOTAL FINAL (La mejora)
    const totalPagar = carrito.reduce((acc, item) => acc + (item.precioProducto * item.cantidadProducto), 0);
    const totalFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(totalPagar);

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
                    {carrito.map((item) => (
                        <CarritoCompras 
                            key={item.nombreProducto} 
                            name={item.nombreProducto} 
                            quantity={item.cantidadProducto} 
                            price={item.precioProducto}
                            onAdd={() => aumentarCantidad(item.nombreProducto)}
                            onSubstract={() => disminuirCantidad(item.nombreProducto)}
                        />
                    ))}
                </div>

                {/* --- SECCIÓN TOTAL A PAGAR (MEJORA) --- */}
                <div className="row mt-5 mb-4 text-center">
                    <div className="col-12">
                        <div className="total-final">
                            TOTAL A PAGAR: {totalFormateado}
                        </div>
                    </div>
                </div>

                {/* Botón de Pagar */}
                <div className="row pb-5">
                    <div className="col-12 text-center">
                        <button className="btn btn-lg" style={{
                            backgroundColor: '#39ff14', 
                            border: 'none', 
                            fontFamily: 'Orbitron',
                            fontWeight: 'bold',
                            padding: '15px 50px',
                            color: 'black',
                            fontSize: '1.2rem',
                            boxShadow: '0 0 20px rgba(57, 255, 20, 0.4)'
                        }}>
                            CONFIRMAR COMPRA
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}