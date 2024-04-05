import React from 'react'; // Import React

const HeaderComp = ({ onMiCuentaClick, onLogoutClick }) => {    
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;

  return (
    <header className="w-full h-14 md:h-20 flex justify-between items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-20">
      <div className="flex items-center justify-center"> {/* Center the logo */}
        <img src={logoSrc} alt="Logo" className="h-11 md:h-16" />
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <a href="https://www.latidoeterno.com/">
          <p className="block text-center text-white py-2 hover:cursor-pointer rounded-full bg-black p-3">
            <i className="far fa-home text-xl"></i>
            <span className="ml-2">Tienda</span>
          </p>
        </a>
        <p className="block text-center text-white py-2 hover:cursor-pointer rounded-full bg-black p-3" onClick={onMiCuentaClick}>
            <i className="far fa-user text-xl"></i>
            <span className="ml-2">Mi Cuenta</span>
          </p>
        <p className="block text-center text-white py-2 hover:cursor-pointer rounded-full bg-black p-3" onClick={onLogoutClick}>
            <i className="far fa-sign-out-alt text-xl"></i>
            <span className="ml-2">Finalizar Sesion</span>
          </p>
      </div>
    </header>
  );
};

export default HeaderComp;
