import React, { useState } from 'react';
import Anular from '../PopUps/Eliminar_pop';

const CommentDash = ({ author, text, timestamp, showButtons }) => {
  const [anular, setAnular] = useState(false); 

  return (
    <div className="relative mx-auto my-8 max-w-screen-sm rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Main content */}
      <div className="flex items-center p-4">
        <img src='profile.jpg' alt="Profile" className="h-12 w-12 rounded-full object-cover mr-4" />
        <div>
          <p className="text-sm text-gray-600 text-left">Comentaste el 27 de Mayo, 2024</p>
          <h3 className="text-lg font-medium text-gray-800 font-semibold text-left">Alberto Garcia Perez</h3>
        </div>
      </div>
      <div className="px-4 pb-4">
        <h4 className="text-lg font-medium text-black mb-2 text-left">Buenos Recuerdos</h4>
        <p className="text-base text-black text-left">Hoy estoy aquí para recordarte con cariño y gratitud. Tus enseñanzas y tu amor siguen viviendo en nuestros corazones.</p>
      </div>
      <div className="px-4 py-2">
        <img src="/lapida.jpg" alt="comment" className="w-full h-auto rounded-lg" />
      </div>
      {/* Heart icon and count */}
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button className="flex items-center focus:outline-none text-gray-600 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-lg text-gray-600">12</span>
          </button>
        </div>
        {/* Conditionally render buttons */}
        <div className="flex space-x-3.5">

          <button className="bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-white py-2 px-4 border border-rojo hover:border-transparent rounded" onClick={() => setAnular(true)}>
            Eliminar Comentario
          </button>
        </div>
      </div>
      {anular && (
        <Anular onClose={() => setAnular(false)} />
      )}
    </div>
  );
}

export default CommentDash;
