import React, { useEffect } from "react";
import Select from 'react-select';

const options = [];

const EditProfileComp = ({ onClose }) => {
  useEffect(() => {
    // Freeze the background when the popup is opened
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Unfreeze the background when the popup is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 z-50 p-8">
      <div className="bg-white w-full max-w-md p-6 rounded-lg">
        <div className="flex justify-between items-center pb-4">
          <h1 className="text-lg font-semibold">Mi Cuenta</h1>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div>
              <label htmlFor="firstName" className="block text-gray-700">Nombre:</label>
              <input type="text" id="firstName" placeholder="Renzo" className="mt-1 p-2 w-full border rounded" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700">Apellido:</label>
              <input type="text" id="lastName" placeholder="Fernandez" className="mt-1 p-2 w-full border rounded" />
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 ">
            <div>
              <label htmlFor="country" className="block text-gray-700">País: *</label>
              <Select
                options={options}
                placeholder="-- Selecciona o escribe --"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-700">Región: *</label>
              <Select
                options={options}
                placeholder="-- Selecciona o escribe --"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4">
            Guardar Cambios
          </button>
          <button onClick={onClose} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileComp;
