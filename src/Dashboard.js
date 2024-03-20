// import { useParams } from 'react-router-dom';
import HeaderComp from './header_comp';
import EditProfileComp from './editprofile_com';
import MembersList from './memberview';
import React, { useState } from 'react';
import './Dashboard.css';


const DashBoard = () => {
    const [toggle, setToggle] = useState(2);
    function updateToggle(id) {
        setToggle(id);
      }
    
      const members = [
        {
            id: 1,
            name: "Antonio Pedro Fernandez",
            photoUrl: "https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c",
            relationship: "Grandfather",
            creationDate: "03/20/2024",
            verificationStatus: "UNVERIFIED Medallion"}
      ];

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
        <HeaderComp></HeaderComp>
        <div className="w-full flex flex-col items-center px-0 mt-14 md:mt-28">
            <div className="w-full max-w-5xl bg-white md:shadow-lg relative  text-center md:text-left md:rounded-lg px-10">

            <div className="flex flex-col md:flex-row items-center md:space-x-6 my-6">
        <div className="w-full md:w-auto">
          <img alt="Profile" className="h-44 rounded-full mx-auto"
            src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c'/>
        </div>
        
        <div className='flex flex-col justify-center text-center md:text-left'>
          <h1 className="text-xl md:text-2xl font-bold">Renzo Fernandez</h1>
          <h2 className="text-md">Email: renzofernandezg.rf@gmail.com</h2>
          <h2 className="text-md">Joined: 1 day ago</h2>
        </div>
      </div>

            <div className="my-5">
            <ul className="flex flex-wrap items-center justify-center text-black space-x-10">
                <li className={toggle === 1 ? 'selected' : ''} onClick={() => updateToggle(1)}>Medallones</li>
                <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(2)}>Mi Cuenta</li>
            </ul>
            <div className="slate-line"></div>
            
            <div className={toggle === 1  ? "show-content1": "content1"}>
                <div className="flex justify-center mt-6">
                    {/* <button className="bg-rojo hover:bg-red-700 text-white py-2 px-4 rounded">
                    + Crear un nuevo perfil
                    </button> */}
                    <MembersList members={members} />
                </div>
            </div>

            <div className={toggle === 2  ? "show-content1": "content1"}>
                <EditProfileComp></EditProfileComp>
            </div>
            
            </div>
            </div>
        </div>
    </div>
    );
};

export default DashBoard;