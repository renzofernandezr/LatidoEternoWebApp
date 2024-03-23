import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select from 'react-select';

const CrearPerfilComp = ({ hideSection }) => {
  const [birthDate, setBirthDate] = useState(new Date());
  const [deathDate, setDeathDate] = useState(new Date());
  const [showBirthCalendar, setShowBirthCalendar] = useState(false);
  const [showDeathCalendar, setShowDeathCalendar] = useState(false);

  const options = [];
  
  const handleBirthDateChange = (date) => {
    setBirthDate(date);
    setShowBirthCalendar(false);
  };

  const handleDeathDateChange = (date) => {
    setDeathDate(date);
    setShowDeathCalendar(false);
  };

  return (
    <div className="container mx-auto">
      <div className="bg-white px-4 py-6 md:w-full md:max-full md:mx-full">
        <h1 className="text-lg font-semibold text-left">Detalles Personales</h1>
        {!hideSection && (
        <p className="text-sm text-left mt-2 mb-4"> Tendrás la oportunidad de editarlo una vez publicado.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t">
          <div className="flex flex-col mb-4 mt-3">
            <label htmlFor="firstName" className="block text-gray-700 text-left">Primer Nombre: *</label>
            <input type="text" id="firstName" placeholder="Ingrese el primer nombre" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="flex flex-col mb-4 mt-3">
            <label htmlFor="middleName" className="block text-gray-700 text-left">Segundo Nombre:</label>
            <input type="text" id="middleName" placeholder="Ingrese el segundo nombre" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="flex flex-col mb-4 mt-3">
            <label htmlFor="lastName" className="block text-gray-700 text-left">Apellido: *</label>
            <input type="text" id="lastName" placeholder="Ingrese el apellido" className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="flex flex-col mb-4 mt-3">
            <label htmlFor="relationship" className="block text-gray-700 text-left">Relación: *</label>
            <Select
              options={options}
              placeholder="-- Selecciona o escriba --"
            />
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="birthDate" className="block text-gray-700 text-left">Fecha de Nacimiento: *</label>
            <input
              type="text"
              id="birthDate"
              value={birthDate.toLocaleDateString()}
              onClick={() => setShowBirthCalendar(true)}
              readOnly
              className="mt-1 w-full border rounded p-2"
            />
            {showBirthCalendar && (
              <Calendar
                onChange={handleBirthDateChange}
                value={birthDate}
                locale="es"
                className="mt-1 w-full border rounded"
              />
            )}
          </div>
          <div className="mb-4 mt-3">
            <label htmlFor="deathDate" className="block text-gray-700 text-left">Fecha de Defunción: *</label>
            <input
              type="text"
              id="deathDate"
              value={deathDate.toLocaleDateString()}
              onClick={() => setShowDeathCalendar(true)}
              readOnly
              className="mt-1 w-full border rounded p-2"
            />
            {showDeathCalendar && (
              <Calendar
                onChange={handleDeathDateChange}
                value={deathDate}
                locale="es"
                className="mt-1 w-full border rounded"
              />
            )}
          </div>
          
          <div className="flex flex-col mb-4 mt-3">
            <label htmlFor="country" className="block text-gray-700 text-left">País: *</label>
            <Select
              options={options}
              placeholder="-- Selecciona o escriba --"
            />
          </div>
          <div className="flex flex-col mb-4 mt-3">
            <label htmlFor="region" className="block text-gray-700 text-left">Región: *</label>
            <Select
              options={options}
              placeholder="-- Selecciona o escriba --"
            />
          </div>
        </div>
        <div className="mb-4 mt-3 md:col-span-2">
          <label htmlFor="phrase" className="block text-gray-700 text-left">Frase: *</label>
          <input type="text" id="phrase" placeholder="Ejemplo: 'Su sabiduría y generosidad serán recordadas por siempre'" className="mt-1 p-2 w-full border rounded" />
        </div>
        
        <div className="pt-0 md:pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="mb-4 mt-3 md:col-span-2">
              <label htmlFor="biography" className="block text-gray-700 text-left">Biografía: *</label>
              <textarea id="biography" placeholder="Ingrese la biografía..." className="mt-1 p-2 w-full border rounded h-32"></textarea>
            </div>
          </div>
          {!hideSection && (
            <div>
              <h2 className="text-lg font-semibold text-left">¿Cómo subir las fotos y videos?</h2>
              <p className="text-sm text-left mt-2 mb-4">Una vez guardes este perfil, en tu pantalla principal verás el perfil creado con un botón de "editar". Una vez ingreses, podrás subir las fotos y los videos de tus seres queridos.</p>
            </div>
          )}
        </div>
        {!hideSection && (
        <div className="flex justify-between mt-6">
          <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Crear Nuevo Perfil
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default CrearPerfilComp;
