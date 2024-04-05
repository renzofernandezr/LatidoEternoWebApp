import React, { useEffect } from 'react';

const Eliminar = ({ onClose, onConfirm }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };

  useEffect(() => {
    // Disable scrolling on the body when the pop-up is open
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling on the body when the pop-up is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 pl-6 pr-6">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">¿Estás seguro de quieres eliminarlo?</h2>
        <p className="text-gray-700 mb-4">Esta acción es irreversible. ¿Estás seguro de que deseas eliminarlo?</p>
        <div className="text-center mb-2">
          <img src="sadface.png" alt="Sad face" className="mx-auto w-10 h-8 mb-6" /> {/* Set width and height */}
        </div>
        <div className="flex justify-center">
          <button className="bg-rojo hover:bg-red-400 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleClose}>
            No, me arrepentí
          </button>
          <button onClick={onConfirm} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Sí, quiero hacerlo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eliminar;
