import React, { useState } from 'react';
import './Css/ProfilePageV2.css';
import CrearPerfilComp from './Componentes/crearmedallon_com';
import CommentCard from './Componentes/comentario';
import UploadModal from './PopUps/SubirContenido_pop';
import SubirBanner from './PopUps/SubirBanner_pop';
import SubirPFP from './PopUps/SubirPFP_pop';
import EliminarPerfil from './PopUps/EliminarPerfil_pop';
import ComoVerificar from './PopUps/ComoVerificar_pop';

const EditMedallon = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;
  const [toggle, setToggle] = useState(1);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [bannerPopupOpen, setBannerPopupOpen] = useState(false); // 
  const [PFPPopupOpen, setPFPPopupOpen] = useState(false); // 
  const [eliminarperfil, setEliminarPerfil] = useState(false); // 
  const [comoverificar, setComoVerificar] = useState(false); // 



  function updateToggle(id) {
    setToggle(id);
  }

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full h-14 md:h-20 flex justify-center md:justify-between items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-20">
        <div className="flex-grow md:flex-grow-0 flex justify-center">
          <img src={logoSrc} alt="Logo" className="h-11 md:h-16" />
        </div>
      </header>

      <div className="w-full max-w-6xl bg-white md:shadow-lg mx-auto mt-14 md:mt-24 md:rounded-lg">
        <div className="mb-10 w-full flex-col px-0 relative text-center md:text-left">
          <div className="relative">
            <img src="bannerfinal.png" alt="Banner" className="w-full md:rounded-lg align-middle" />
            <p className="absolute flex items-center justify-center text-black bottom-0 right-4 md:bottom-4 md:right-4 h-12 w-12 md:w-48 py-2 px-3
             hover:cursor-pointer hover:bg-gray-200 rounded-md bg-white mb-2" onClick={() => setBannerPopupOpen(true)}>
              <i className="fas fa-upload text-l"></i>
              <span className="ml-2 text-sm hidden md:inline font-semibold">Actualizar Banner</span>
            </p>
          </div>
          <div className="relative">
            <img src="ppf.png" alt="Profile" className="rounded-full border-6 border-white absolute left-1/2 md:left-32 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36" />
            <button onClick={() => setPFPPopupOpen(true)}>            <img src="editicon2.png" className="absolute left-56 md:left-40 top-3 h-10 w-10 bg-rojo rounded-full  p-2  hover:bg-red-700 " alt="edit" ></img>
</button>
          </div>
          <h2 className="text-3xl font-bold text-black mt-20 md:mt-6 md:mx-60">Alberto Garcia Perez</h2>
          <p className="text-base mx-16 my-3 italic transform md:mx-60">
  Estado: <span className="text-gray-400"></span> <span className="text-rojo">• No verificado</span>
</p>          <button className="md:mx-60 bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">Ver Perfil Público</button>
          {/* Dropdown */}
          <div className="relative inline-block md:right-60">
            <button
              onClick={toggleDropdown}
              className="ml-2 bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              <span>...</span>
            </button>
            
            {dropdownVisible && (
  <div className="z-50 origin-top-right absolute top-12 right-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div
      className="py-1"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <button className="block px-4 py-2 text-black text-left" role="menuitem" onClick={() => setEliminarPerfil(true)}>
        Eliminar Perfil
      </button>
      <button className="block px-4 py-2 text-black  text-left" role="menuitem" onClick={() => setComoVerificar(true)}>
        Cómo Verificar Medallón
      </button>
    </div>
  </div>
)}

          </div>
          {/* End Dropdown */}
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-0 mt-0 md:mt-6">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">
          <div className="my-5">
            <ul className="flex flex-wrap flex space-x-4 items-center justify-center text-black space-x-10">
              <li className={toggle === 1 ? 'selected' : ''} onClick={() => updateToggle(1)}>Info</li>
              <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(2)}>Contenido</li>
              <li className={toggle === 3 ? 'selected' : ''} onClick={() => updateToggle(3)}>Comentarios (0)</li>
            </ul>

            <div className="slate-line"></div>
            <div className="flex"></div>
            {toggle === 1 && (
              <div className="show-content mr-8 ml-8">
                <CrearPerfilComp hideSection={true} />

              </div>
            )}
            {toggle === 2 && (
              <div className="show-content">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-12 mt-3 pb-20 md:pb-10">
                  {mediaFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <button className="absolute top-0 right-0 text-red-500" onClick={() => removeFile(index)}>Remove</button>
                      {file.type.startsWith('image/') ? (
                        <img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} className="w-full h-auto max-h-52 max-w-full object-contain rounded-md" />
                      ) : (
                          <video controls className="w-full h-auto max-h-52 object-contain rounded-md">
                            <source src={URL.createObjectURL(file)} type={file.type} />
                            Your browser does not support the video tag.
                          </video>
                        )}
                    </div>
                  ))}
                  <div className="bg-gray-200 cursor-pointer rounded-lg overflow-hidden relative flex justify-center items-center" style={{ paddingTop: '100%' }} onClick={() => setModalOpen(true)}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      <
                      img src="/iconsubir.png" className="h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" alt="Upload icon"/>
                      <p className="text-gray-500 text-sm mt-1 text-center">Click para subir</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {toggle === 3 && (
              <div className="show-content">
                {/* Comment Content */}
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pr-12 text-left pl-12">
                  {/* Comment Cards */}
                  <CommentCard showButtons={true} />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center ">
            <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4">
              Guardar y Regresar
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <UploadModal onClose={() => setModalOpen(false)} onUpload={handleFileUpload} />
      )}
       {bannerPopupOpen && (
        <SubirBanner onClose={() => setBannerPopupOpen(false)} />
      )}
      {eliminarperfil && (
        <EliminarPerfil onClose={() => setEliminarPerfil(false)} />
      )}
      {PFPPopupOpen && (
        <SubirPFP onClose={() => setPFPPopupOpen(false)} />
      )}
       {comoverificar && (
        <ComoVerificar onClose={() => setComoVerificar(false)} />
      )}
    </div>
  );
};


export default EditMedallon;
