import React from 'react';

const NotFoundPage = () => {
    const NotFoundSrc = `${process.env.PUBLIC_URL}/404.png`;
    const logoSrc = `${process.env.PUBLIC_URL}/logoh.png`;
    const sadFaceSrc = `${process.env.PUBLIC_URL}/sadface.png`;

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <header className="w-full h-14 md:h-20 flex justify-center md:justify-between items-center bg-white fixed top-0 z-50 shadow-md px-4 md:px-20">
                <div className="flex flex-grow justify-center">
                    <img src={logoSrc} alt="Logo" className="h-11 md:h-16"/>
                </div>
            </header>
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white rounded-lg shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <img src={NotFoundSrc} alt="404 Not Found" className="w-full" />
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-xl mb-2 text-rojo">Página no encontrada.</h1>
                        <p className="text-gray-700 text-base">
                        ¡Lo lamentamos! La página a la que intentas acceder puede estar caducada, eliminada o no existe.
                        </p>
                    </div>
                    <div className="flex justify-center mb-2">
                        <img src={sadFaceSrc} alt="carita triste" className="h-10 my-4"/>
                    </div>

                    <div className="flex justify-center">
                        <a href="https://www.latidoeterno.com/" className="inline-block bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Regresar a tienda
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
