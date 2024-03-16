// NavigationPage.js
import React from 'react';
import './Nav.css'; // Make sure this path is correct

const NavigationPage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 pt-5 pb-24">
      <div className="px-7 bg-white shadow-lg rounded-2xl mb-5">
        <div className="flex">
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-share text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Compartir</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-shopping-cart text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Comprar</span>
              </span>
            </a>
          </div>
          <div className="flex-1 group">
            <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
              <span className="block px-1 pt-1 pb-2">
                <i className="far fa-sign-in-alt text-2xl pt-1 mb-1 block"></i>
                <span className="block text-xs pb-1">Ingresar</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationPage;
