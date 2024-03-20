import React from "react";

const CrearPerfilComp = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="bg-white w-full">
        <h1 className="text-base font-semibold text-left">Detalles Personales</h1>
        <p className="text-sm text-left mt-2 mb-4"> Tendrás la oportunidad de actualizar esto más tarde.</p>
        <div className="grid grid-cols-1 gap-4 border-t">
          <div className="mb-4 mt-3">
            <label htmlFor="firstName" className="block text-gray-700 text-left">Primer Nombre: *</label>
            <input type="text" id="firstName" placeholder="Ingrese el primer nombre" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="middleName" className="block text-gray-700 text-left">Segundo Nombre:</label>
            <input type="text" id="middleName" placeholder="Ingrese el segundo nombre" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="lastName" className="block text-gray-700 text-left">Apellido: *</label>
            <input type="text" id="lastName" placeholder="Ingrese el apellido" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="phrase" className="block text-gray-700 text-left">Frase:</label>
            <input type="text" id="phrase" placeholder="Ejemplo: 'Su sabiduría y generosidad serán recordadas por siempre'" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="relationship" className="block text-gray-700 text-left">Relación:</label>
            <select id="relationship" className="mt-1 p-2 w-full border rounded">
              <option value="">-- Selecciona una opción --</option>
              {/* Add options for relationships */}
            </select>
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="country" className="block text-gray-700 text-left">País:</label>
            <select id="country" className="mt-1 p-2 w-full border rounded">
              <option value="">-- Selecciona una opción --</option>
              {/* Add options for countries */}
            </select>
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="region" className="block text-gray-700 text-left">Región:</label>
            <select id="region" className="mt-1 p-2 w-full border rounded">
              <option value="">-- Selecciona una opción --</option>
              {/* Add options for regions */}
            </select>
          </div>
        </div>
        <div className="pt-0 md:pt-4">
          <h2 className="text-sm pt-4 text-left">Información Biográfica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
            <div className="mb-4 mt-3 col-span-2">
              <label htmlFor="biography" className="block text-gray-700 text-left">Biografía:</label>
              <textarea id="biography" placeholder="Ingrese la biografía..." className="mt-1 p-2 w-full border rounded h-32"></textarea>
            </div>
            <div className="mb-4 mt-3">
              <label htmlFor="birthDate" className="block text-gray-700 text-left">Fecha de Nacimiento: *</label>
              <input type="text" id="birthDate" placeholder="mm/dd/yyyy" className="mt-1 p-2 w-full border rounded" />
            </div>
            <div className="mb-4 mt-3">
              <label htmlFor="deathDate" className="block text-gray-700 text-left">Fecha de Defunción:</label>
              <input type="text" id="deathDate" placeholder="mm/dd/yyyy" className="mt-1 p-2 w-full border rounded" />
            </div>
          </div>
        </div>
        <div className="pt-0 md:pt-4">
          <h2 className="text-sm pt-4 text-left">Carga de Contenido</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
            <div className="mb-4 mt-3 col-span-2">
              <label htmlFor="profilePicture" className="block text-gray-700 text-left">Foto de Perfil:</label>
              <input type="file" id="profilePicture" className="mt-1 p-2 w-full border rounded" />
            </div>
            <div className="mb-4 mt-3 col-span-2">
              <label htmlFor="banner" className="block text-gray-700 text-left">Banner:</label>
              <input type="file" id="banner" className="mt-1 p-2 w-full border rounded" />
            </div>
            <div className="mb-4 mt-3 col-span-2">
              <label htmlFor="photos" className="block text-gray-700 text-left">Fotos:</label>
              <input type="file" id="photos" multiple className="mt-1 p-2 w-full border rounded" />
            </div>
            <div className="mb-4 mt-3 col-span-2">
              <label htmlFor="videos" className="block text-gray-700 text-left">Videos:</label>
              <input type="file" id="videos" multiple className="mt-1 p-2 w-full border rounded" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Crear Nuevo Perfil
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default CrearPerfilComp;
