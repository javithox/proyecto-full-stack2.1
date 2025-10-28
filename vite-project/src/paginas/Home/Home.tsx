import React from "react";
import Hero from "../../Components/Hero/Hero";


const Home = () => {
    return(
        <div className="home">
            <div>
                <h2 className="titulo-home" style={{color:'#39ff14', padding:0, position:"absolute", top:'120px'}}>Tienda Level-Up</h2>
                <img src="https://www.shutterstock.com/shutterstock/videos/1091492275/thumb/1.jpg?ip=x480" alt="level-up" style={{position:'absolute', top:'250px'}}/>
                <p style={{color: '#39ff14', position:'absolute', top:'470px'}}>Presentamos nuestra tienda online donde podras encontrar todo tipo de articulos gamers desde pc hasta fundas para mouses</p>
            </div>
            <Hero/>
            
        </div>
    );
};
export default Home;