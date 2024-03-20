import { useParams } from 'react-router-dom';
import HeaderComp from './header_comp';
import React, { useState } from 'react';
import './Dashboard.css';


const DashBoard = () => {
    const [toggle, setToggle] = useState(2);
    function updateToggle(id) {
        setToggle(id);
      }
    
  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
        <HeaderComp></HeaderComp>
        <div className="w-full flex flex-col items-center px-0 mt-14 md:mt-28">
            <div className="w-full max-w-5xl bg-white md:shadow-lg relative  text-center md:text-left md:rounded-lg px-10">

            <div className='w-full flex flex-row space-x-6'>
                <div className="flex-grow md:flex-grow-0 flex my-6">
                    <img src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c' alt="Logo"
                    className="h-11 md:h-44 rounded-full"/>
                </div>
                
                <div className='flex flex-col mx-0 my-6 justify-center'>
                    <h1>Renzo Fernandez</h1>
                    <h2>Email: renzofernandezg.rf@gmail.com</h2>
                    <h2>Joined: Joined 1 day ago</h2>

                </div>
            </div>

            <div className="my-5">
            <ul className="flex flex-wrap items-center justify-center text-black space-x-10">
                <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(1)}>Medallones</li>
                <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(2)}>Mi Cuenta</li>
            </ul>
            <div className="slate-line"></div>
            
            <div className={toggle === 1  ? "show-content1": "content1"}>
                <h1> Text 1</h1>
            </div>

            <div className={toggle === 2  ? "show-content1": "content1"}>
                <h1> Text 2</h1>
            </div>
            
            </div>
            </div>
        </div>
    </div>
    );
};

export default DashBoard;