import React, { useState } from 'react';
import './Css/Login.css'; // Make sure the CSS file is in the same directory as this file

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track whether user is in login or registration mode
  const [showPassword, setShowPassword] = useState(false); // State to track whether password should be visible or hidden
  const [password, setPassword] = useState(''); // State to store password
  const [confirmPassword, setConfirmPassword] = useState(''); // State to store confirm password

  // const toggleMode = () => {
  //   setIsLogin(!isLogin); // Toggle between login and registration mode
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle between showing and hiding password
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // Update password state
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value); // Update confirm password state
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 md:bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-center">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="LOVETIDO ETERNO Logo" className="h-16 mt-6" />
        </div>
        <div className="p-6">
          <div className="flex justify-center">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-6 py-3 text-lg font-semibold ${isLogin ? 'text-rojo border-b-4 border-black' : 'text-gray-800'} focus:outline-none`}
            >
              Ingresar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-6 py-3 text-lg font-semibold ${isLogin ? 'text-gray-800' : 'text-rojo border-b-4 border-black'} focus:outline-none`}
            >
              Regístrate
            </button>
          </div>
          <p className="mt-4 text-sm text-black text-center">
            <span className="text-lg">{isLogin ? '¡Bienvenido de vuelta!' : '¡Bienvenido!'}</span> <br />
            <span className="text-black">{isLogin ? 'Por favor ingresa tu correo electrónico y contraseña a continuación.' : 'Por favor completa los campos para registrarte.'}</span>
          </p>
          {isLogin ? (
            <form className="mt-6">
              <input className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" type="email" placeholder="Email" required />
              <div className="relative">
                <input
                  className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-6 bottom-2 px-0 py-0 mr-0 focus:outline-none"
                  onClick={() => togglePasswordVisibility()}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${showPassword ? 'ojocerrado.png' : 'ojo.png'}`}
                    alt={showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
                    className="h-8 w-8 text-gray-600"
                  />
                </button>
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm text-gray-600">
                  <input type="checkbox" className="mr-2 leading-tight" />
                  Recordar Contraseña
                </label>
                <p className="text-sm text-black hover:text-gray-600 cursor-pointer">Recuperar Contraseña</p>
              </div>
              <button className="w-full px-4 py-3 mt-2 text-lg text-white bg-rojo rounded-lg hover:bg-black focus:outline-none">Ingresar</button>
            </form>
          ) : (
            <form className="mt-6">
              <input className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" type="text" placeholder="Nombre" required />
              <input className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" type="text" placeholder="Apellido" required />
              <input className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:bg-white" type="email" placeholder="Tu Mejor Email" required />
              <div className="relative">
                <input
                  className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-6 bottom-2 px-0 py-0 mr-0 focus:outline-none"
                  onClick={() => togglePasswordVisibility()}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${showPassword ? 'ojocerrado.png' : 'ojo.png'}`}
                    alt={showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
                    className="h-8 w-8 text-gray-600"
                  />
                </button>
              </div>
              <div className="relative">
              <input
                className="w-full px-4 py-3 mb-4 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                type={showPassword ? "text" : "password"}
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <button
                  type="button"
                  className="absolute inset-y-0 right-6 bottom-2 px-0 py-0 mr-0 focus:outline-none"
                  onClick={() => togglePasswordVisibility()}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/${showPassword ? 'ojocerrado.png' : 'ojo.png'}`}
                    alt={showPassword ? "Ocultar Contraseña" : "Mostrar Contraseña"}
                    className="h-8 w-8 text-gray-600"
                  />
                </button>
              </div>
              <label className="flex items-center mt-3">
                <input type="checkbox" className="mr-2 leading-tight" required />
                <span className="text-sm text-gray-600">Acepto los términos y condiciones</span>
              </label>
              <button className="w-full px-4 py-3 mt-2 text-lg text-white bg-rojo rounded-lg hover:bg-black focus:outline-none">Registrarse</button>
            </form>
          )}
          <div className="flex justify-center mt-4">
            {/* Icons or images for social media would be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage
