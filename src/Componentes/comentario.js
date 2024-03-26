import React from 'react';

const CommentCard = ({ author, text, timestamp }) => {
  return (
    <div className="mx-auto my-8 max-w-screen-sm rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img  src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c' alt="Profile" className="h-12 w-12 rounded-full object-cover mr-4" />
        <div>
          <h3 className="text-lg font-medium text-gray-800 font-semibold">Renzo Fernandez</h3>
          <p className="text-sm text-gray-600">23 de Marzo 2024</p>
        </div>
      </div>
      <div className="px-4 pb-4">
      <h4 className="text-lg font-medium text-black  mb-2">Buenos Recuerdos</h4>
        <p className="text-base text-black">Me encanta visitar tu tumba y ponerme al día con lo que estoy haciendo. Realmente me hace extrañar nuestras charlas y construir cosas juntos. Espero que encuentres nuestro nuevo proyecto "ingenioso".</p>
      </div>
      <div className="px-4 py-2">
        <img src="/lapida.jpg" alt="comment" className="w-full h-auto rounded-lg" />
      </div>
      <div className="px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button className="flex items-center focus:outline-none text-gray-600 hover:text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-lg text-gray-600">12</span>
          </button>
        </div>
      </div>
    
    </div>
  );
}

export default CommentCard;
