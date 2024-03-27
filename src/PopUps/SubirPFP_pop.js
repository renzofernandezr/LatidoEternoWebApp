import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";

const SubirBanner = ({ onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const handleSubirClick = async () => {
    // Convert cropped image to base64
    const base64data = await getCroppedImg(selectedFile, crop);
    onUpload(base64data);
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const handleFileChange = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: handleFileChange,
    multiple: false,
  });

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const width = Math.min(image.width, image.height);
    const height = width;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      width,
      height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    });
  };

  useEffect(() => {
    // Disable scrolling on the body when the pop-up is open
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling on the body when the pop-up is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 pl-6 pr-6 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Subir Foto de Perfil</h2>
        <div className="mb-4 border-dashed border-2 border-gray-400 rounded-md p-4">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Arrastra la imagen aquí o haz clic para seleccionar</p>
          </div>
        </div>
        {selectedFile && (
          <>
            <div className="mb-4 relative" style={{ height: "300px", width: "100%" }}>
              <Cropper
                image={URL.createObjectURL(selectedFile)}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={onCropChange}
                onZoomChange={onZoomChange}
                cropShape="round"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <p className="text-xs text-center text-gray-600 mt-2">
              Usa los dedos o la rueda del mouse para hacer zoom y selecciónar una imagen más precisa.
            </p>
          </>
        )}
        <div className="flex justify-between mt-4">
          <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubirClick}>
            Subir
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubirBanner;
