import React, { useState } from 'react';
import Anular from '../PopUps/Anular_pop';


const CommentCard = ({ author, text, timestamp, showButtons }) => {
  const [anular, setAnular] = useState(false); // 

  return (
    <div className="relative mx-auto my-8 max-w-screen-sm rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      {/* Main content */}
      <div className="flex items-center p-4">
        <img src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c' alt="Profile" className="h-12 w-12 rounded-full object-cover mr-4" />
        <div>
          <h3 className="text-lg font-medium text-gray-800 font-semibold">Renzo Fernandez</h3>
          <p className="text-sm text-gray-600">27 de Mayo, 2024</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <h4 className="text-lg font-medium text-black  mb-2">Buenos Recuerdos</h4>
        <p className="text-base text-black">Hoy estoy aquí para recordarte con cariño y gratitud. Tus enseñanzas y tu amor siguen viviendo en nuestros corazones.</p>
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
        {showButtons && (
          <div className="flex justify-center space-x-3.5">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded mx-1 md:mx-0">
              Aprovar
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded mx-1 md:mx-0" onClick={() => setAnular(true)}>
              Anular
            </button>
          </div>
        )}
      </div>
      {anular && (
        
        <Anular onClose={() => setAnular(false)} />
        )}
    </div>
  );
}

export default CommentCard;