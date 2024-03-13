import React from 'react';
import './Login.css'; // Make sure the CSS file is in the same directory as this file

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="LOVETIDO ETERNO Logo" />
      </div>
      <div className="login-form">
        <div className="login-tabs">
          <button className="login-tab">Ingresar</button>
          <button className="login-tab">Registrate</button>
        </div>
        <p className="terms-text">
          Al ingresar sesion estas aceptando nuestros <br />
          <span className="highlighted-text">terminos y condiciones de privacidad</span>.
        </p>
        <input type="email" placeholder="Tu Mejor Email" />
        <input type="password" placeholder="Contraseña" />
        <div className="login-options">
          <label className="remember-me">
            <input type="checkbox" /> Recordar Contraseña
          </label>
          <p className="recover-password">Recuperar Contraseña</p>
        </div>
        <button className="login-button">Ingresar</button>
        <div className="social-icons">
          {/* Icons or images for social media would be added here */}
        </div>
      </div>
      <div className="login-footer">
        <img src={`${process.env.PUBLIC_URL}/footer.png`} alt="Footer" />
      </div>
    </div>
  );
};

export default LoginPage;
