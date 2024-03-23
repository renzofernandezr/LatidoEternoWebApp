import React, { useState } from 'react';
import './ProfilePageV2.css';
import CrearPerfilComp from './crearperfil_com';
import UploadModal from './UploadModal';

const EditMedallon = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;
  const [toggle, setToggle] = useState(1);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  function updateToggle(id) {
    setToggle(id);
  }

  const handleFileUpload = (files) => {
    setMediaFiles([...mediaFiles, ...files]);
    setModalOpen(false);
  };

  const removeFile = (index) => {
    const updatedFiles = [...mediaFiles];
    updatedFiles.splice(index, 1);
    setMediaFiles(updatedFiles);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <header className="w-full h-14 md:h-20 flex justify-center md:justify-between items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-20">
        <div className="flex-grow md:flex-grow-0 flex justify-center">
          <img src={logoSrc} alt="Logo" className="h-11 md:h-16"/>
        </div>
      </header>

      <div className="mb-20 w-full flex flex-col items-center px-0 mt-14 md:mt-28">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">
          <div className="bg-white md:rounded-lg mb-6 md:mb-0">
            <img src="banner.jpg" alt="Banner" className="w-full md:rounded-t-lg" />
            <div className="relative">
              <img src="banner.jpg" alt="Profile" className="rounded-full border-6 border-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-0 mt-0 md:mt-6">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">
          <div className="my-5">
            <ul className="flex flex-wrap items-center justify-center text-black space-x-10">
              <li className={toggle === 1 ? 'selected' : ''} onClick={() => updateToggle(1)}>Datos Personales</li>
              <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(2)}>Subir Contenido</li>
              <li className={toggle === 3 ? 'selected' : ''} onClick={() => updateToggle(3)}>Comentarios (0)</li>
            </ul>
            <div className="slate-line"></div>
            
            {toggle === 1 && (
              <div className="show-content">
                <CrearPerfilComp />
              </div>
            )}

            {toggle === 2 && (
              <div className="show-content">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-12 mt-3 pb-20 md:pb-10">
                  {mediaFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <button className="absolute top-0 right-0 text-red-500" onClick={() => removeFile(index)}>Remove</button>
                      {file.type.startsWith('image/') ? (
                        <img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} className="w-full h-auto max-h-52 object-contain rounded-md" />
                      ) : (
                        <video controls className="w-full h-auto max-h-52 object-contain rounded-md">
                          <source src={URL.createObjectURL(file)} type={file.type} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  ))}
                  <div className="bg-gray-200 cursor-pointer rounded-lg overflow-hidden relative flex justify-center items-center" style={{ paddingTop: '100%' }} onClick={() => setModalOpen(true)}>
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <p className="text-gray-400 text-sm mt-1">Upload</p>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <UploadModal onClose={() => setModalOpen(false)} onUpload={handleFileUpload} />
      )}
    </div>
  );
};

export default EditMedallon;
