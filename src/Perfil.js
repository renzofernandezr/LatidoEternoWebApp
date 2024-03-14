import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default react-tabs styling
import './Profile.css'; // Custom CSS for profile page

const ProfilePage = () => {
  const { uid } = useParams();
  const [memberData, setMemberData] = useState(null);
  const [ubigeoData, setUbigeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.latidoeterno.com/medallon/${uid}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMemberData(data.Miembro);
        return fetch(`https://api.latidoeterno.com/ubigeo/${data.Miembro.idUbigeo}`);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(ubigeoData => {
        setUbigeoData(ubigeoData);
      })
      .catch(error => {
        console.error('Fetch error:', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uid]);

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('es-ES', {
      day: 'numeric', month: 'numeric', year: 'numeric'
    });
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!memberData) {
    return <div className="profile-container">No se encontraron datos para el UID: {uid}</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        {memberData.FotoUrl && (
          <img src={memberData.FotoUrl} alt={`${memberData.Nombre} ${memberData.Apellido}`} className="profile-photo" />
        )}
        <h1 className="member-name">{`${memberData.Nombre} ${memberData.Apellido}`}</h1>
        <p className="member-frase">{memberData.Frase}</p>
        <div className="country-info">
        {ubigeoData && ubigeoData.urlImagePais && (
          <img src={ubigeoData.urlImagePais} alt="Country" className="country-flag"/>
        )}
        <span className="country-description">{ubigeoData ? ubigeoData.FullDescripcion : ''}</span>
      </div>
        <Tabs>
          <TabList>
            <Tab>Mi Historia</Tab>
            <Tab>Fotos</Tab>
            <Tab>Videos</Tab>
          </TabList>

          <TabPanel>
            <div className="date-bio-card">
              <div className="date-titles-row">
                <div className="date-title">Nacimiento</div>
                <div className="date-title">Partida</div>
              </div>
              <div className="dates">
                <span className="date">{formatDate(memberData.FechaDeNacimiento)}</span>
                <span className="date">{formatDate(memberData.FechaDePartida)}</span>
              </div>
              <h2 className="bio-title">Biografía</h2>
              <p className="biography">{memberData.Biografia}</p>
            </div>
          </TabPanel>
          <TabPanel>
            {/* Here, you would render the member's photos */}
            <p>El contenido de Fotos estará disponible aquí.</p>
          </TabPanel>
          <TabPanel>
            {/* And here, you would render the member's videos */}
            <p>El contenido de Videos estará disponible aquí.</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
