import HeaderComp from './Componentes/header_comp';
import EditProfileComp from './Componentes/editarperfil_com';
import MembersList from './Componentes/memberview';
import CrearPerfilComp from './Componentes/crearmedallon_com';
import FavoritosComp from './Componentes/favoritos';
import CommentDash from './Componentes/comentariodash';
import SubirPFP from './PopUps/SubirPFP_pop';


import React, { useState,  } from 'react';
import './Css/Dashboard.css';

const DashBoard = () => {
    const [toggle, setToggle] = useState(1);
    const [showCreateProfile, setShowCreateProfile] = useState(false);
    const [PFPPopupOpen, setPFPPopupOpen] = useState(false); 
    const [EditCuenta, setEditCuenta] = useState(false); // 


    const userId = 1;

   

    function updateToggle(id) {
        setToggle(id);
    }

   

    function handleLogoutClick() {
        // Handle logout functionality
    }

    
    
      
    return (
        <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
            <HeaderComp  onLogoutClick={handleLogoutClick} />
            <div className="w-full flex flex-col items-center px-0 mt-14 md:mt-28 mb-20">
                <div className="w-full max-w-5xl bg-white md:shadow-lg relative  text-center md:text-left md:rounded-lg px-10">

                    <div className="flex flex-col md:flex-row items-center md:space-x-6 my-6">
                        <div className="w-full md:w-auto relative">
                            <img alt="Profile" className="h-44 md:bottom-2 rounded-full mx-auto relative z-10 mt-6 mb-3" src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c' />
                            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 justify-center md:bottom-2 md:right-4 bg-black text-white rounded-full h-8 w-8 flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-125 z-20" onClick={() => setPFPPopupOpen(true)}>
                                <i className="fas fa-camera"></i>
                            </button>
                        </div>

                        <div className='flex flex-col justify-center text-center md:text-left'>
                            <h1 className="text-xl md:text-2xl font-bold m-1">Renzo Fernandez</h1>
                            <h2 className="text-md m-1">Email: renzofernandezg.rf@gmail.com</h2>
                            <h2 className="text-md m-1">Se unio hace 1 dia</h2>
                        </div>
                    </div>

                    <div className="my-5">
                        <ul className="flex flex-wrap items-center justify-center text-black space-x-10">
                            <li className={toggle === 1 ? 'selected' : ''} onClick={() => updateToggle(1)}>Perfiles</li>
                            <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(2)}>Favoritos</li>
                            <li className={toggle === 3 ? 'selected' : ''} onClick={() => updateToggle(3)}>Publicaciones</li>
                        </ul>
                        <div className="slate-line"></div>

                        <div className={toggle === 1 ? "show-content1" : "content1"}>
                            {showCreateProfile ? (
                                <>
                                    <div className="flex justify-center md:mt-0 mt-6">
                                        <button className="bg-rojo transition duration-300 ease-in-out transform hover:scale-110 text-white py-2 px-4 rounded" onClick={() => setShowCreateProfile(false)}>
                                            Volver
                                        </button>
                                    </div>
                                    <CrearPerfilComp />
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center md:mt-0 mt-6">
                                        <button className="bg-rojo transition duration-300 ease-in-out transform hover:scale-110 text-white py-2 px-4 rounded" onClick={() => setShowCreateProfile(true)}>
                                            + Crear un nuevo perfil
                                        </button>
                                    </div>
                                    <div className="flex justify-center mt-6">
                                        <MembersList userId={userId} />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={toggle === 2 ? "show-content1" : "content1"}>
                            <FavoritosComp></FavoritosComp>
                        </div>
                        <div className={toggle === 3 ? "show-content1" : "content1"}>
                            <CommentDash></CommentDash>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="md:hidden fixed inset-x-0 bottom-0 bg-white" style={{ boxShadow: '1px -1px 4px 0px rgba(88,88,88,0.19)' }}>
                <div className="flex justify-around">
                    <p className="block text-center text-black py-2">
                    <i className="fas fa-home text-xl"></i>
                        <span className="block text-xs">Tienda</span>
                    </p>
                    <p className="block text-center text-black py-2 ">
                    <i className="fas fa-user text-xl"></i>
                        <button className="block text-xs" onClick={() => setEditCuenta(true)} >Mi Cuenta</button>
                        </p>
                    <p className="block text-center text-black py-2">
                    <i className="fas fa-sign-out-alt text-xl"></i>
                        <span className="block text-xs">Salir</span>
                    </p>
                </div>
            </div>
           
      
      {PFPPopupOpen && (
        <SubirPFP onClose={() => setPFPPopupOpen(false)} />
      )}
      {EditCuenta && (
        <EditProfileComp onClose={() => setEditCuenta(false)} />
      )}
        </div>
    );
};

export default DashBoard;
