import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './ProfilePageV2.css';

const ProfilePageV2 = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;
  // const bannerSrc = `${process.env.PUBLIC_URL}/banner.jpg`;
  // const profilePicSrc = `${process.env.PUBLIC_URL}/profile.jpg`;
  const [toggle, setToggle] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ url: '', description: '', fecha_creacion: '' });



  const { uid } = useParams();
  const [memberData, setMemberData] = useState(null);
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchMedallonDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.latidoeterno.com/medallon/${uid}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setMemberData(data.Miembro);
  
        // After successfully fetching member data, fetch media data
        const mediaResponse = await fetch(`https://api.latidoeterno.com/media/${data.Miembro.CodigoMiembro}`);
        if (!mediaResponse.ok) throw new Error('Media fetch failed');
        const mediaData = await mediaResponse.json();
        setMediaData(mediaData);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };
  
    if (uid) fetchMedallonDetails();
  }, [uid]);
  function updateToggle(id) {
    setToggle(id);
  }
  function openModal(item) {
    setModalContent({ url: item.url, description: item.descripcion, fecha_creacion: item.fecha_creacion });
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling
}
  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }

  
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const day = date.getDate();
    const year = date.getFullYear();
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const month = months[date.getMonth()]; // Get the first 3 letters of the month
  
    return `${day} ${month}. ${year}`;
  };


  if (loading) return <div>Loading...</div>;
  if (!memberData) return <Navigate to="/404" />;
  

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <header className="w-full h-14 md:h-20 flex justify-center md:justify-between items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-20">
        <div className="flex-grow md:flex-grow-0 flex justify-center">
          <img src={logoSrc} alt="Logo" className="h-11 md:h-16"/>
        </div>
        <div className="hidden md:flex items-center space-x-10 mr-20">
          <p className="block text-center text-white py-2 hover:cursor-pointer rounded-full bg-black p-3">
            <i className="far fa-share text-xl"></i>
            <span className="ml-2">Compartir</span>
          </p>
          <a href='https://www.latidoeterno.com/'>
            <p className="block text-center text-white py-2 hover:cursor-pointer rounded-full bg-black p-3">
              <i className="far fa-home text-xl"></i>
              <span className="ml-2">Tienda</span>
            </p>
          </a>
          <p className="block text-center text-white py-2 hover:cursor-pointer rounded-full bg-rojo p-3">
            <i className="far fa-sign-in-alt text-xl"></i>
            <span className="ml-2">Ingresar</span>
          </p>
        </div>
      </header>
      
      <div className="w-full flex flex-col items-center px-0 mt-14 md:mt-28">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">
          <img src={memberData.BannerUrl} alt="Banner" className="w-full md:rounded-t-lg" />
          <img src={memberData.AvatarUrl} alt="Profile" className="rounded-full border-6 border-white absolute left-1/2 md:left-32 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36" />
          <h2 className="text-3xl font-bold text-rojo mt-20 md:mt-6 md:mx-60">{`${memberData.Nombre} ${memberData.Apellido}`}</h2>
          <p className="text-base text-gray-400 mx-16 my-3 italic transform md:mx-60 ">{memberData.Frase}</p>
          <div className="flex justify-center md:justify-start mt-4 md:mx-60 md:mb-10">
            <img src={memberData.Pais.FlagImageUrl} alt="Country Flag" className="w-auto h-6 mr-2 rounded-md" />
            <p className="text-base">{`${memberData.Estado.Nombre}, ${memberData.Pais.NombreSpanish}`}</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-0 mt-0 md:mt-6">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">

      <div className="my-5">
      <ul className="flex flex-wrap items-center justify-center text-black space-x-10">
        <li className={toggle === 1 ? 'selected' : ''} onClick={() => updateToggle(1)}>Mi Historia</li>
        <li className={toggle === 2 ? 'selected' : ''} onClick={() => updateToggle(2)}>Contenido</li>
        <li className={toggle === 3 ? 'selected' : ''} onClick={() => updateToggle(3)}>Comentarios</li>
      </ul>
      <div className="slate-line"></div>

      <div className={toggle === 1  ? "show-content": "content"}>
        <p class="text-center">
        {`${formatDate(memberData.FechaDeNacimiento)} - ${formatDate(memberData.FechaDePartida)}`}</p>
        <p class='mt-3 px-12 pt-0 text-justify whitespace-pre-wrap pb-20 md:pb-10'>{memberData.Biografia}</p>
      </div>

      <div className={toggle === 2  ? "show-content": "content"}>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-12 mt-3 pb-20 md:pb-10">
      {mediaData.map((item) => (
          <div key={item.idContenido} className="bg-gray-200 cursor-pointer rounded-lg overflow-hidden relative" 
          style={{ paddingTop: '100%' }} onClick={() => openModal(item)}>
          {item.Tipo === 'imagen' ? (
            <img src={item.url} alt={item.nombre} className="absolute top-0 left-0 w-full h-full object-cover rounded-md" />
          ) : (
            <video controls className="absolute top-0 left-0 w-full h-full object-cover rounded-md">
              <source src={item.url} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          )}
        </div>
    ))}
  </div>
      </div>

      <div className={toggle === 3  ? "show-content": "content"}>
        <h1> Text 3</h1>
      </div>
    </div>



        </div>
      </div>

      {/* Navigation Bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 bg-white" style={{ boxShadow: '1px -1px 4px 0px rgba(88,88,88,0.19)' }}>
  <div className="flex justify-around">
    <p className="block text-center text-black py-2">
      <i className="far fa-share text-rojo text-2xl"></i>
      <span className="block text-xs">Compartir</span>
    </p>
    <a className='block text-center text-black py-2' href="https://www.latidoeterno.com/">
      <i className="far fa-home text-rojo text-2xl"></i>
      <span className="block text-xs">Tienda</span>
    </a>
    <p className="block text-center text-black py-2">
      <i className="far fa-sign-in-alt text-rojo text-2xl"></i>
      <span className="block text-xs">Ingresar</span>
    </p>
  </div>
</div>
{isModalOpen && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-screen-md max-h-screen-md overflow-auto" onClick={e => e.stopPropagation()}>
      <span className="absolute top-0 right-0 cursor-pointer text-gray-500 hover:text-gray-700" onClick={closeModal}>&times;</span>
      {modalContent.url.endsWith('.mp4') ? (
        <video controls className="mb-4 w-full" style={{ maxWidth: '100%' }}>
          <source src={modalContent.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={modalContent.url} alt="Media" className="mb-4" style={{ maxWidth: '100%', maxHeight: '70vh' }} />
      )}
      <p>{modalContent.description}</p>
      <p>{new Date(modalContent.fecha_creacion).toLocaleDateString('es-ES')}</p>
    </div>
  </div>
)}

    </div>    
  );
};

export default ProfilePageV2;
