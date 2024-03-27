import React, { useEffect } from 'react';

const Anular = ({ onClose, onConfirm }) => {
  const handleClose = () => {
    onClose(); // Llama a la función onClose pasada como una prop
  };
  
  useEffect(() => {
    // Deshabilita el desplazamiento en el cuerpo cuando se abre el popup
    document.body.style.overflow = "hidden";

    // Vuelve a habilitar el desplazamiento en el cuerpo cuando se cierra el popup
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
        <h2 className="text-xl font-semibold mb-4 text-center">¿Estás seguro que quieres anularlo?</h2>
        <p className="text-gray-700 mb-4">
          Si anulas este comentario, los cambios serán irreversibles. Si consideras que este comentario es inapropiado, por favor haz clic en el botón de reportar.
        </p>
        <div className="flex justify-center mb-4">
          <button onClick={onConfirm} className="bg-rojo hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
            Anular
          </button>
          <button onClick={onConfirm} className="bg-rojo hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
            Anular y Reportar
          </button>
          <button onClick={handleClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            No anular
          </button>
        </div>
      </div>
    </div>
  );
};

export default Anular;
