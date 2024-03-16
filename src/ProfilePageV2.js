import React from 'react';

const ProfilePageV2 = () => {
  const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;
  const bannerSrc = `${process.env.PUBLIC_URL}/banner.jpg`; // Path to the banner image

  return (
    <div className="min-h-screen flex flex-col bg-white md:bg-gray-100">
      <header className="w-full h-14 md:h-20 flex items-center md:justify-start justify-center bg-white fixed top-0 z-50 shadow-md">
        <img src={logoSrc} alt="Logo" className="h-11 md:h-16 md:ml-9"/>
      </header>
      <div className="w-full flex flex-col items-center px-0 mt-28">
        <div className="w-full max-w-4xl bg-white shadow-lg">
          <img src={bannerSrc} alt="Banner" className="w-full" style={{ height: '70%' }} />
          <h2 className="text-xl font-semibold p-4">Title Text Here</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageV2;
