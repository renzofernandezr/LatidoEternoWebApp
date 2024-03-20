import React from "react";

const EditProfileComp = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="bg-white w-full">
        <h1 className="text-base font-semibold text-left">Editar Perfil</h1>
        <div className="pt-0 md:pt-4">
          <h2 className="text-sm pt-4 text-left">Detalles Personales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
            <div className="mb-4 mt-3" >
              <label htmlFor="firstName" className="block text-gray-700 text-left">Nombre:</label>
              <input type="text" id="firstName" placeholder="Renzo" className="mt-1 p-2 w-full border rounded" />
            </div>
            <div className="mb-4 mt-3" >
              <label htmlFor="lastName" className="block text-gray-700 text-left">Apellido:</label>
              <input type="text" id="lastName" placeholder="Fernandez" className="mt-1 p-2 w-full border rounded" />
            </div>
          </div>
        </div>
        <div className="pt-0 md:pt-4">
          <h2 className="text-sm pt-4 text-left">Detalles de Ubicación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
          <div className="mb-4 mt-3" >
              <label htmlFor="state" className="block text-gray-700 text-left">País:</label>
              <input type="text" id="state" placeholder="País en donde te ubicas." className="mt-1 p-2 w-full border rounded" />
            </div>
            <div className="mb-4 mt-3" >
              <label htmlFor="city" className="block text-gray-700 text-left">Región:</label>
              <input type="text" id="city" placeholder="Región/Provincia/Estado/Departamento." className="mt-1 p-2 w-full border rounded" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
  <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    Guardar Cambios
  </button>
  <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    Finalizar Sesion
  </button>
</div>

      </div>
    </div>
  );
};

export default EditProfileComp;
