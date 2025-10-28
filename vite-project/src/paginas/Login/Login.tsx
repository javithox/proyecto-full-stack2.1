import React from "react";
import logo from '../../assets/logo-image/image-removebg-preview.png';

const Login = () => {
    return(
        <main className="main-container">
            <section className="main-header bg-black">
                <img src={logo} alt="logo" className="logo" height='150' width='150'/>
                <div className="contenedor-iniciar">
                    <div className="justify-content-center">
                        <h1 style={{color:' #39ff14'}}>Iniciar Sesion</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md6 col-lg-5">
                            <form action="#" method="post" className="p-4 border rounded bg-light shadow-sm">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nombre de Usuario</label>
                                    <input type="text" id="username" className="form-control" placeholder="Ingresa tu nombre de usuario" required autoComplete="username"/>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Ingresa tu Contraseña" required autoComplete="current-password"/>
                                </div>

                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn-btn-primary"style={{backgroundColor: '#1e90ff'}}>Iniciar Sesion</button>
                                </div>

                                <div className="text-center">
                                    <a href="registro.html" className="text-decoration-none" style={{color:'#39ff14'}}>¿Has olvidado la contraseña?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;