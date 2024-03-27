import HeaderComp from './Componentes/header_comp';
import EditProfileComp from './Componentes/editarperfil_com';
import MembersList from './Componentes/memberview';
import CrearPerfilComp from './Componentes/crearmedallon_com'; // Step 1: Import the CrearPerfilComp component
import React, { useState } from 'react';
import './Css/Dashboard.css';

const DashBoard = () => {
    const [toggle, setToggle] = useState(1);
    const [showCreateProfile, setShowCreateProfile] = useState(false); // Step 2: State to manage visibility of CrearPerfilComp

    const userId = 1;

    function updateToggle(id) {
        setToggle(id);
        setShowCreateProfile(false); // Step 3: Hide CrearPerfilComp when toggling tabs
    }

    return (
        <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
            <HeaderComp></HeaderComp>
            <div className="w-full flex flex-col items-center px-0 mt-14 md:mt-28">
                <div className="w-full max-w-5xl bg-white md:shadow-lg relative  text-center md:text-left md:rounded-lg px-10">

                    <div className="flex flex-col md:flex-row items-center md:space-x-6 my-6">
                        <div className="w-full md:w-auto">
                            <img alt="Profile" className="h-44 rounded-full mx-auto"
                                src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c' />
                        </div>

                        <div className='flex flex-col justify-center text-center md:text-left'>
                            <h1 className="text-xl md:text-2xl font-bold">Renzo Fernandez</h1>
                            <h2 className="text-md">Email: renzofernandezg.rf@gmail.com</h2>
                            <h2 className="text-md">Se unio hace 1 dia</h2>
                        </div>
                    </div>

                    <div className="my-5">
                        <ul className="flex flex-wrap items-center justify-center text-black space-x-10">
                            <li className={toggle === 1 ? 'selected' : ''} onClick={() => updateToggle(1)}>Medallones</li>
                            <li className={toggle === 3 ? 'selected' : ''} onClick={() => updateToggle(2)}>Mi Cuenta</li>

                        </ul>
                        <div className="slate-line"></div>

                        <div className={toggle === 1 ? "show-content1" : "content1"}>
                            {showCreateProfile ? (
                                <>
                                    <div className="flex justify-center md:mt-0 mt-6">
                                        <button className="bg-rojo hover:bg-red-700 text-white py-2 px-4 rounded" onClick={() => setShowCreateProfile(false)}>
                                            Volver
                                        </button>
                                    </div>
                                    <CrearPerfilComp /> {/* Step 2: Render CrearPerfilComp */}
                                </>
                            ) : (
                                <>
                                    <div className="flex justify-center md:mt-0 mt-6">
                                        <button className="bg-rojo hover:bg-red-700 text-white py-2 px-4 rounded" onClick={() => setShowCreateProfile(true)}>
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
                            <EditProfileComp></EditProfileComp>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
