import React from 'react';

const FavoritosComb = ({ member }) => {
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
        <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1">
          <i className="fas fa-trash"></i>
        </button>
      </div>
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





// import React, { useState } from 'react';
// import Eliminar from '../PopUps/Eliminar_pop';

// const FavoritosComp = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [dropdownDirection, setDropdownDirection] = useState('right'); // Default direction
//   const [eliminar, setEliminar] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//     setDropdownDirection('right'); // Reset direction on toggle
//   };

//   const handleDeleteProfile = () => {
//     // Implement delete profile functionality here
//     console.log("Eliminar Perfil");
//     setEliminar(true); // Set eliminarcomment to true when the button is clicked
//   };

//   const handleDropdownPosition = () => {
//     const cardRect = document.querySelector('.max-w-sm').getBoundingClientRect();
//     const dropdownWidth = 200; // Adjust this based on your dropdown content width
//     const rightOffset = window.innerWidth - cardRect.right;
//     if (rightOffset < dropdownWidth) {
//       setDropdownDirection('left');
//     }
//   };

//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 mt-6 relative">
//       <div className="absolute top-0 right-0 mt-4 mr-4">
//         <button onClick={() => {toggleDropdown(); handleDropdownPosition();}} className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded inline-flex items-center">
//           <span>...</span>
//         </button>
//         {dropdownVisible && (
//           <div className={`z-50 origin-top-${dropdownDirection} absolute mt-4 ${dropdownDirection === 'right' ? 'right-0' : 'left-0'} w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
//             <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//               <button className="block px-4 py-2 text-black text-left" role="menuitem" onClick={handleDeleteProfile}>
//                 Eliminar de Favoritos
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mt-4">
//         <img src="profile.jpg" alt="Profile" className="w-full h-full rounded-full" />
//       </div>
//       <div className="px-6 py-4 text-center">
//         <div className="font-bold text-xl mb-2">Alberto Garcia Perez</div>
//         <div className="text-sm text-gray-500 mb-6">"Su sabiduria y generosidad seran recordados por siempre"</div>
//         <div className="flex justify-between">
//           <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1">
//             Ver
//           </button>
//           <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded w-5/12 mx-1" >
//             Compartir
//           </button>
//         </div>
//       </div>
//       {eliminar && (
//         <Eliminar onClose={() => setEliminar(false)} />
//       )}
//     </div>
//   );
// };

// export default FavoritosComp;
