import React from 'react';

const EliminarPerfil = ({ onClose, onConfirm }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">¿Estás seguro de eliminar tu perfil?</h2>
        <p className="text-gray-700 mb-4">Esta acción es irreversible. ¿Estás seguro de que deseas eliminar tu perfil y todos tus datos asociados?</p>
        <div className="text-center mb-2">
          <img src="sadface.png" alt="Sad face" className="mx-auto w-10 h-8 mb-6" /> {/* Set width and height */}
        </div>
        <div className="flex justify-center">
          <button className="bg-rojo hover:bg-red-400 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleClose}> {/* Reversed colors */}
            No, me arrepentí
          </button>
          <button onClick={onConfirm} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"> {/* Reversed colors */}
            Sí, quiero hacerlo
          </button>
        </div>
      </div>
    </div>
  );
};

export default EliminarPerfil;
