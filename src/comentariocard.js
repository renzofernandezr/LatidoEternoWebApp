import React from 'react';



const CommentCard = ({ author, text, timestamp }) => {
  return (
    <div className="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">
      <div className="mr-5 block h-16 w-16 max-w-full text-left align-middle sm:h-32 sm:w-32">
        <img src="/.banner3.jpg" alt="Profile" className="h-full w-full rounded-full object-cover" />
      </div>
      <div className="w-full text-left">
        <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
          <h3 className="font-medium text-lg">Daniel Guevara </h3>
          <time className="text-base">23 de Marzo 2024</time>
        </div>
        <p className="text-base">Me encanta visitar tu tumba y ponerme al día con lo que estoy haciendo. Realmente me hace extrañar nuestras charlas y construir cosas juntos. Espero que encuentres nuestro nuevo proyecto "ingenioso".</p>
        <div className="mt-5 flex items-center justify-between text-gray-600">
          <div className="group flex cursor-pointer items-center justify-around">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-full p-2 group-hover:bg-red-200 group-hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-lg">12</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
