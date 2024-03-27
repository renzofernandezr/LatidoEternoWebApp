import React, { useEffect } from 'react';

const ComoVerificar = ({ onClose, onConfirm }) => {
  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop
  };
  
  useEffect(() => {
    // Disable scrolling on the body when the popup is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the popup is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50 pl-6 pr-6">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <div className="flex justify-end mb-2">
          <button onClick={handleClose} className="text-gray-600 hover:text-gray-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-center">¿Cómo verificar tu medallón?</h2>
        <p className="text-gray-700 mb-4">
          Si tu perfil creado aparece como no verificado, significa que aún no has vinculado ningún medallón con tu perfil.
          Para ver un tutorial de cómo funciona, por favor haz clic en el botón debajo.
        </p>
        <div className="flex justify-center mb-4">
          <button onClick={onConfirm} className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">
            Ver video tutorial 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComoVerificar;
