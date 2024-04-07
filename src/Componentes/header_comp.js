import React from 'react'; // Import React

const HeaderComp = ({ onMiCuentaClick, onLogoutClick }) => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;

  return (
    <header className="w-full h-20 flex items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-20">
      {/* Center the logo for mobile */}
      <div className="flex items-center justify-center md:justify-start w-full md:w-auto"> 
        <img src={logoSrc} alt="Logo" className="h-14" />
      </div>
      <div className="hidden md:flex items-center ml-auto space-x-6">
        <a href="https://www.latidoeterno.com/">
          <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            <i className="fas fa-home text-xl"></i>
            <span className="ml-2">Tienda</span>
          </button>
        </a>
        <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            <i className="fas fa-user text-xl"></i>
            <span className="ml-2">Mi Cuenta</span>
        </button>
        <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
            <i className="fas fa-sign-out-alt text-xl"></i>
            <span className="ml-2">Finalizar Sesion</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderComp;
