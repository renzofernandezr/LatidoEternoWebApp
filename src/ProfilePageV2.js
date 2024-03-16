import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default react-tabs styling
import './tabs.css'; // Custom CSS for profile page

const ProfilePageV2 = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;
  const bannerSrc = `${process.env.PUBLIC_URL}/banner.jpg`; // Path to the banner image
  const profilePicSrc = `${process.env.PUBLIC_URL}/profile.jpg`; // Path to the profile image

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <header className="w-full h-14 md:h-20 flex items-center md:justify-start justify-center bg-white fixed top-0 z-50 shadow-md">
        <img src={logoSrc} alt="Logo" className="h-11 md:h-16 md:ml-9"/>
      </header>
      <div className="w-full flex flex-col items-center px-0 mt-14 md:mt-28">
        <div className="w-full max-w-6xl bg-white md:shadow-lg relative text-center md:text-left md:rounded-lg">
          <img src={bannerSrc} alt="Banner" className="w-full md:rounded-t-lg" />
          <img src={profilePicSrc} alt="Profile" className="rounded-full border-6 border-white absolute left-1/2 md:left-32 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36" />
          <h2 className="text-3xl font-bold text-red-400 mt-20 md:mt-6 md:mx-60">Alberto Garcia Perez</h2>
          <p className="text-base text-gray-400 mx-24 my-3 italic transform md:mx-60 md:mb-10">Su sabiduria y generosidad serán recordados por siempre</p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-0 mt-10 md:mt-6">
        <div className="w-full max-w-6xl bg-white md:shadow-lg mt-0 md:py-4 relative text-center md:rounded-lg">
        <Tabs>
          <TabList>
            <Tab>Mi Historia</Tab>
            <Tab>Contenido</Tab>
            <Tab>Tributos</Tab>
          </TabList>

          <TabPanel>
            {/* Here, you would render the member's photos */}
            <p>El contenido de Fotos estará disponible aquí.</p>
          </TabPanel>
          <TabPanel>
            {/* Here, you would render the member's photos */}
            <p>El contenido de Fotos estará disponible aquí.</p>
          </TabPanel>
          <TabPanel>
            {/* Here, you would render the member's photos */}
            <p>El contenido de Fotos estará disponible aquí.</p>
          </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageV2;
