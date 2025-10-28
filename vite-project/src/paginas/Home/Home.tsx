import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import CartaProductos from "../../Components/Carta-Productos/Carta-Productos";
import Footer from '../../Components/Footer/Footer.tsx';



const Home = () => {
    return(
        <div className="home">
            <Header/>
            <Hero/>
            <section className="product-grid">
                <li className="product-card">
                        <CartaProductos
                            image="https://cdn.mos.cms.futurecdn.net/UeHpVSg7S6sSwoLkjWbMdL-1200-80.jpg"
                            name="GPU"
                            attributes="Esta GPU gamer mejorara tu pc de una manera que no sabias que esa velocidad de tu pc existia"
                            price="$110.000"
                        />
                    </li>
                    <li className="product-card">
                        <CartaProductos 
                            image="https://c4.wallpaperflare.com/wallpaper/655/177/151/msi-gtx980-pc-gaming-minimalism-wallpaper-preview.jpg"
                            name="GPU roja"
                            attributes="Esta Gpu roja tiene mas velocidad para tu pc y los juegos que piden harta tarjeta grafica"
                            price="$120.000"
                        />
                    </li>
                    <li className="product-card">
                        <CartaProductos 
                            image="https://img.freepik.com/premium-photo/game-keyboard-with-color-rgb-backlight-black-background_445701-727.jpg"
                            name="Teclado Gamer"
                            attributes="Teclado gamer busca la comodidad del jugador para juegos que requieren de alta jugabilidad"
                            price="$30.000"
                        />
                    </li>
                    <li className="product-card">
                        <CartaProductos 
                            image="https://img.freepik.com/premium-photo/black-wireless-headphones-isolated-black-background_95544-15.jpg"
                            name="Auriculares"
                            attributes="Los auriculares gamer tiene la capacidad de cubrir los sonidos provenientes de afuera de la habitacion"
                            price="$25.000"
                        />
                    </li>
                    <li className="product-card">
                        <CartaProductos 
                            image="https://png.pngtree.com/background/20230525/original/pngtree-black-chair-with-a-neon-light-is-shown-isolated-picture-image_2729118.jpg"
                            name="Sillas Gamer"
                            attributes="Esta silla gamer tiene la comodidad para poder jugar varias horas sin la incomodidad de una silla comun y corriente."
                            price="$55.000"
                        />
                    </li>
                    <li className="product-card">
                        <CartaProductos
                            image="https://i.pinimg.com/736x/a5/c7/99/a5c7997ca72d6754c217b779f2a37dcd.jpg"
                            name="Computadores de escritorio"
                            attributes="Computadores desde grandes hasta pequeños, de gran capacidad o menor capacidad para la comunidad gamer"
                            price="$450.000"
                        />
                    </li>
                    <li className="product-card">
                        <CartaProductos 
                            image="https://images.ctfassets.net/w5r1fvmogo3f/7MciI3OwWnNx6GqXJmDlUd/4b76fab1150bef702a58b62974100f01/1920x_feature_qck_3layer.jpg?fm=webp&q=90&fit=scale&w=1920"
                            name="Mousepad"
                            attributes="fundas para mouse de distintos diseños o colores todo a sus gusto"
                            price="$5.000 - $10.000"
                        />
                    </li>
                    <li className="product-card">
                        <CartaProductos 
                            image="https://cdn.mos.cms.futurecdn.net/eKXV4y3YnwTQTz7RkoaTgB.jpg"
                            name="Procesadores"
                            attributes="tenemos procesadores de todo tipo desde procesadores soldados hasta procesadores que son desmontables"
                            price="$40.000 - $80.000"
                        />
                    </li>
            </section>
            <Footer/>
        </div>
    );
};
export default Home;