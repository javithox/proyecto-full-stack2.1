import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./paginas/Home/Home";
import Productos from "./paginas/Productos/Productos";
import Login from "./paginas/Login/Login";
import Registrar from "./paginas/Registrar/Registrar";
import Nosotros from "./paginas/Nosotros/Nosotros";
import Blogs1 from './paginas/Blogs/blog1';
import Blogs2 from './paginas/Blogs/blog2';
import Blogs3 from './paginas/Blogs/blog3';
import Contacto from "./paginas/Contacto/contacto";
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
                <Route path="/nosotros" element={<Nosotros/>}/>
                <Route path="/blogs" element={<Blogs1/>}/>
                <Route path="/blog2" element={<Blogs2/>}/>
                <Route path="/blog3" element={<Blogs3/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path="/Carrito" element={<AppCarro/>}/>
                <Route path="/Carrito" element={<AppCarro/>}/>
           </Routes>
           <Footer/>
        </div>
    </Router>
  );
}

export default App;