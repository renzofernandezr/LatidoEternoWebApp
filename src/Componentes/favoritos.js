import React, { useState } from 'react';
import Eliminar from '../PopUps/Eliminar_pop';

const FavoritosComb = ({ member }) => {
  const [eliminar, setEliminar] = useState(false); 



  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-24 h-24 rounded-full mx-auto mt-4" src="/profile.jpg" alt={member.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{member.name}</div>
        <p className="text-gray-600 text-sm text-center">
          {member.fechaNacimiento} - {member.fechaDefuncion}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1">
          <i className="fas fa-eye"></i>
        </button>
        <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1">
          <i className="fas fa-share-alt"></i>
        </button>
        <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1" onClick={() => setEliminar(true)}
>
          <i className="fas fa-trash"></i>
        </button>
      </div>
      {eliminar && (
        <Eliminar onClose={() => setEliminar(false)} />
      )}
    </div>
  );
};

const FavoritosCombList = ({ userId }) => {
  // Mock data with additional member
  const members = [
    {
      CodigoMiembro: 1,
      Nombre: "John",
      Apellido: "Doe",
      fechaNacimiento: "1990-01-01",
      fechaDefuncion: "2022-04-05",
    },
    {
      CodigoMiembro: 2,
      Nombre: "Alberto",
      Apellido: "Garcia",
      fechaNacimiento: "1985-05-15",
      fechaDefuncion: "2021-11-20",
    },
    {
      CodigoMiembro: 3,
      Nombre: "Michael",
      Apellido: "Smith",
      fechaNacimiento: "1978-10-25",
      fechaDefuncion: "2023-08-12",
    },
    // Add more members as needed
  ];

  return (
    <div className="grid justify-center md:grid-cols-3 grid-cols-1">
      {members.map((member) => (
        <FavoritosComb key={member.CodigoMiembro} member={{
          id: member.CodigoMiembro,
          name: `${member.Nombre} ${member.Apellido}`,
          fechaNacimiento: member.fechaNacimiento,
          fechaDefuncion: member.fechaDefuncion,
        }} />
      ))}
       
    </div>
  );
};

export default FavoritosCombList;

