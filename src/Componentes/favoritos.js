import React, { useState } from 'react';
import Eliminar from '../PopUps/Eliminar_pop';

const FavoritosComp = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState('right'); // Default direction
  const [eliminar, setEliminar] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    setDropdownDirection('right'); // Reset direction on toggle
  };

  const handleDeleteProfile = () => {
    // Implement delete profile functionality here
    console.log("Eliminar Perfil");
    setEliminar(true); // Set eliminarcomment to true when the button is clicked
  };

  const handleDropdownPosition = () => {
    const cardRect = document.querySelector('.max-w-sm').getBoundingClientRect();
    const dropdownWidth = 200; // Adjust this based on your dropdown content width
    const rightOffset = window.innerWidth - cardRect.right;
    if (rightOffset < dropdownWidth) {
      setDropdownDirection('left');
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 mt-6 relative">
      <div className="absolute top-0 right-0 mt-4 mr-4">
        <button onClick={() => {toggleDropdown(); handleDropdownPosition();}} className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded inline-flex items-center">
          <span>...</span>
        </button>
        {dropdownVisible && (
          <div className={`z-50 origin-top-${dropdownDirection} absolute mt-4 ${dropdownDirection === 'right' ? 'right-0' : 'left-0'} w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button className="block px-4 py-2 text-black text-left" role="menuitem" onClick={handleDeleteProfile}>
                Eliminar de Favoritos
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mt-4">
        <img src="profile.jpg" alt="Profile" className="w-full h-full rounded-full" />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">Alberto Garcia Perez</div>
        <div className="text-sm text-gray-500 mb-6">"Su sabiduria y generosidad seran recordados por siempre"</div>
        <div className="flex justify-between">
          <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1">
            Ver
          </button>
          <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1" >
            Compartir
          </button>
        </div>
      </div>
      {eliminar && (
        <Eliminar onClose={() => setEliminar(false)} />
      )}
    </div>
  );
};

export default FavoritosComp;
