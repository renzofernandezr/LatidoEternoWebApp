import React from 'react';
import './ProfilePageV2.css';
import {useState} from 'react';

const ProfilePageV2 = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;
  const bannerSrc = `${process.env.PUBLIC_URL}/banner.jpg`;
  const profilePicSrc = `${process.env.PUBLIC_URL}/profile.jpg`;
  
  const [toggle,setToggle] = useState(1)
  function updateToggle(id) {setToggle(id);}

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <header className="w-full h-14 md:h-20 flex justify-center md:justify-between items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-14">
        <div className="flex-grow md:flex-grow-0 flex justify-center">
          <img src={logoSrc} alt="Logo" className="h-11 md:h-16"/>
        </div>

        <div className="hidden md:flex items-center space-x-6 mr-14">
          <p className="block text-center text-gray-400 hover:text-red-400 py-2">
            <i className="far fa-share text-xl"></i>
            <span className="ml-2">Compartir</span>
          </p>
          <p className="block text-center text-gray-400 hover:text-red-400 py-2">
            <i className="far fa-shopping-cart text-xl"></i>
            <span className="ml-2">Comprar</span>
          </p>
          <p className="block text-center text-gray-400 hover:text-red-400 py-2">
            <i className="far fa-sign-in-alt text-xl"></i>
            <span className="ml-2">Ingresar</span>
          </p>
        </div>
        
      </header>
      <div className="w-full flex flex-col items-center px-0 mt-14 md:mt-28">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">
          <img src={bannerSrc} alt="Banner" className="w-full md:rounded-t-lg" />
          <img src={profilePicSrc} alt="Profile" className="rounded-full border-6 border-white absolute left-1/2 md:left-32 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36" />
          <h2 className="text-3xl font-bold text-red-400 mt-20 md:mt-6 md:mx-60">Alberto Garcia Perez</h2>
          <p className="text-base text-gray-400 mx-20 my-3 italic transform md:mx-60 md:mb-10">Su sabiduria y generosidad serán recordados por siempre</p>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-0 mt-0 md:mt-6">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">

      <div className="my-5">
      <ul className="flex flex-wrap items-center justify-center text-black space-x-10">
        <li className={toggle === 1 ? 'selected' : ''} onClick={() => updateToggle(1)}>Mi Historia</li>
        <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(2)}>Contenido</li>
        <li className={toggle === 3 ? 'selected' : ''} onClick={() => updateToggle(3)}>Comenta</li>
      </ul>
      <div className="slate-line"></div>
            <div className={toggle === 1  ? "show-content": "content"}>
              <h1> Text 1</h1>
            </div>
            <div className={toggle === 2  ? "show-content": "content"}>
              <h1> Text 2</h1>
            </div>
            <div className={toggle === 3  ? "show-content": "content"}>
              <h1> Text 3</h1>
            </div>
          </div>



        </div>
      </div>

      {/* Navigation Bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white shadow-lg">
        <div className="flex justify-around text-gray-400">
          <p className="block text-center text-gray-400 hover:text-red-400 py-2">
            <i className="far fa-share text-2xl"></i>
            <span className="block text-xs">Compartir</span>
          </p>
          <p className="block text-center text-gray-400 hover:text-red-400 py-2">
            <i className="far fa-shopping-cart text-2xl"></i>
            <span className="block text-xs">Comprar</span>
          </p>
          <p className="block text-center text-gray-400 hover:text-red-400 py-2">
            <i className="far fa-sign-in-alt text-2xl"></i>
            <span className="block text-xs">Ingresar</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageV2;
