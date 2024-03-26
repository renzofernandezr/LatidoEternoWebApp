import React from "react";
const HeaderComp = () => {  
    
    const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;

  return (
    <header className="w-full h-14 md:h-20 flex justify-center md:justify-between items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-20">
    <div className="flex-grow md:flex-grow-0 flex justify-center">
      <img src={logoSrc} alt="Logo" className="h-11 md:h-16"/>
    </div>
    <div className="hidden md:flex items-center space-x-10 mr-20">
      <a href='https://www.latidoeterno.com/'>
      <p className="block text-center text-white py-2 hover:cursor-pointer rounded-full bg-black p-3">
        <i className="far fa-home text-xl"></i>
        <span className="ml-2">Tienda</span>
      </p>
      </a>
    <div className="flex-grow md:flex-grow-0 flex justify-center">
      <img src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c' alt="Logo"
       className="h-11 md:h-16 rounded-full"/>
    </div>
    </div>
  </header>


    );
};

export default HeaderComp;