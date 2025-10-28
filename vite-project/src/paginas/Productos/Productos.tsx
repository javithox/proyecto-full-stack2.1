import React from "react";
import CartaProductos from "../../Components/Carta-Productos/Carta-Productos";
import { CarritoCompras } from "../Carrito-Compras/Carrito-Compras";

const Productos = [
    {
        id:1,
        name: 'GPU',
        attributes: 'Esta GPU gamer mejorara tu pc de una manera que no sabias que esa velocidad de tu pc existia',
        price: '$110.000',
        image: 'https://cdn.mos.cms.futurecdn.net/UeHpVSg7S6sSwoLkjWbMdL-1200-80.jpg'
    },
    {
        id:2,
        name: 'GPU roja',
        attributes: 'Esta Gpu roja tiene mas velocidad para tu pc y los juegos que piden harta tarjeta grafica',
        price: '$120.000',
        image: 'https://c4.wallpaperflare.com/wallpaper/655/177/151/msi-gtx980-pc-gaming-minimalism-wallpaper-preview.jpg'
    },
    {
        id:3,
        name: 'Teclado Gamer',
        attributes: 'Teclado gamer busca la comodidad del jugador para juegos que requieren de alta jugabilidad',
        price: '$30.000',
        image: 'https://img.freepik.com/premium-photo/game-keyboard-with-color-rgb-backlight-black-background_445701-727.jpg'
    },
    {
        id:4,
        name: 'Auriculares',
        attributes: 'Los auriculares gamer tiene la capacidad de cubrir los sonidos provenientes de afuera de la habitacion',
        price: '$25.000',
        image: 'https://img.freepik.com/premium-photo/black-wireless-headphones-isolated-black-background_95544-15.jpg'
    },
    {
        id:5,
        name: 'Sillas Gamer',
        attributes: 'Esta silla gamer tiene la comodidad para poder jugar varias horas sin la incomodidad de una silla comun y corriente.',
        price: '$55.000',
        image: 'https://png.pngtree.com/background/20230525/original/pngtree-black-chair-with-a-neon-light-is-shown-isolated-picture-image_2729118.jpg'
    },
    {
        id:6,
        name: 'Computadores de escritorio',
        attributes: 'Computadores desde grandes hasta pequeños, de gran capacidad o menor capacidad para la comunidad gamer',
        price: '$450.000',
        image: 'https://i.pinimg.com/736x/a5/c7/99/a5c7997ca72d6754c217b779f2a37dcd.jpg'
    },
    {
        id:7,
        name: 'Monitores',
        attributes: 'Monitores de alta resolucion y velocidad de refresco para una mejor experiencia gamer',
        price: '$200.000',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5GU3XttOVRmzYACHYVdNcPosvSQVyI0xjg&s'
    },
    {
        id:8,
        name: 'mousepad',
        attributes: 'mousepad para mouse de distintos diseños y colores',
        price: '$5.000',
        image: 'https://images.ctfassets.net/w5r1fvmogo3f/7MciI3OwWnNx6GqXJmDlUd/4b76fab1150bef702a58b62974100f01/1920x_feature_qck_3layer.jpg?fm=webp&q=90&fit=scale&w=1920'

    },
    {
        id:9,
        name: 'Procesadores',
        attributes: 'Procesadores de alta gama para un mejor rendimiento en juegos y aplicaciones pesadas',
        price: '$300.000',
        image: 'https://cdn.mos.cms.futurecdn.net/eKXV4y3YnwTQTz7RkoaTgB.jpg'
    }
];

const productos = () => {
    return(
        <main className="product-grid">
            <h1 style={{color:'#39ff14', position:"absolute", top:'150px'}}>Productos</h1>
            <ul className="product-list">
                {Productos.map(Productos => (
                    <li key={Productos.id} className="product-card">
                        <CartaProductos
                            image={Productos.image}
                            name={Productos.name}
                            attributes={Productos.attributes}
                            price={Productos.price}
                        />
                    </li>
                ))}

            </ul>
        </main>
    );
};
export default productos;