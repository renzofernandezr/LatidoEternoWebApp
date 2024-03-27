import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SubirBanner = ({ onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showCropper, setShowCropper] = useState(false);

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
    setShowCropper(true); // Show cropper when file selected
  };

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onZoomChange = (zoom) => {
    setZoom(zoom);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
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
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, "image/jpeg");
    });
  };

  useEffect(() => {
    // Disable scrolling on the body when the pop-up is open
    document.body.style.overflow = showCropper ? "hidden" : "auto";
  }, [showCropper]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 pl-6 pr-6 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Subir Banner</h2>
        <div className="mb-4 border-dashed border-2 border-gray-400 rounded-md p-4">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Arrastra la imagen aquí o haz clic para seleccionar</p>
          </div>
        </div>
        {selectedFile && showCropper && (
          <>
            <div className="mb-4 relative w-full" style={{ height: "300px" }}>
              <div className="w-4/5 mx-auto">
                <Cropper
                  image={URL.createObjectURL(selectedFile)}
                  crop={crop}
                  zoom={zoom}
                  aspect={3 / 1}
                  onCropChange={onCropChange}
                  onZoomChange={onZoomChange}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </div>
            <p className="text-xs text-center text-gray-600 mt-2">
              Usa los dedos o la rueda del mouse para hacer zoom y seleccionar una imagen más precisa.
            </p>
          </>
        )}

{!showCropper && (
  <div className="mb-4">
    <h3 className="text-lg mb-2 text-center">Fondos Predeterminados</h3>
    <Carousel
      showThumbs={false}
      showIndicators={false}
      selectedItem={selectedImageIndex}
      onClickItem={(index) => handleImageClick(index)}
      centerMode
      centerSlidePercentage={80}
      infiniteLoop
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
          >
            {"<"}
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
          >
            {">"}
          </button>
        )
      }
    >
      <div className="flex justify-center">
        <img
          src="/2.png"
          alt="Banner 1"
          className={`cursor-pointer ${selectedImageIndex === 0 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(0)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/3.png"
          alt="Banner 2"
          className={`cursor-pointer ${selectedImageIndex === 1 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(1)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/4.png"
          alt="Banner 3"
          className={`cursor-pointer ${selectedImageIndex === 2 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(2)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/5.png"
          alt="Banner 4"
          className={`cursor-pointer ${selectedImageIndex === 3 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(3)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/6.png"
          alt="Banner 5"
          className={`cursor-pointer ${selectedImageIndex === 4 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(4)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/7.png"
          alt="Banner 6"
          className={`cursor-pointer ${selectedImageIndex === 5 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(5)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/8.png"
          alt="Banner 7"
          className={`cursor-pointer ${selectedImageIndex === 6 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(6)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/9.png"
          alt="Banner 8"
          className={`cursor-pointer ${selectedImageIndex === 7 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(7)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/10.png"
          alt="Banner 9"
          className={`cursor-pointer ${selectedImageIndex === 8 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(8)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
      <div className="flex justify-center">
        <img
          src="/11.png"
          alt="Banner 10"
          className={`cursor-pointer ${selectedImageIndex === 9 ? "border border-rojo" : ""}`}
          onClick={() => handleImageClick(9)}
          style={{ width: "auto", height: "auto", maxWidth: "100%" }}
        />
      </div>
    </Carousel>
  </div>
)}


        <div className="flex justify-between mt-4">
          <button className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubirClick}>
            Subir
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2
- px-4 rounded" onClick={handleClose}>
Cancelar
</button>
</div>
</div>
</div>
);
};

export default SubirBanner;
