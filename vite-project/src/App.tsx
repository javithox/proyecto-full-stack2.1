import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./paginas/Home/Home";
import Productos from "./paginas/Productos/Productos";
import Login from "./paginas/Login/Login";
import Registrar from "./paginas/Registrar/Registrar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppCarro } from "./paginas/Carrito-Compras/AppCarro";


function App() {
  return (
    <Router>
        <div className="App">
           <Header/>
           <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/productos" element={<Productos/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registrar" element={<Registrar/>}/>
                <Route path="/Carrito" element={<AppCarro/>}/>
           </Routes>
           <Footer/>
        </div>
    </Router>
  );
}

export default App;