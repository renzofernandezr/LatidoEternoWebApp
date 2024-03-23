import React, { useState } from "react";

const UploadModal = ({ onClose, onUpload }) => {
  const [mediaType, setMediaType] = useState("photos");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [youtubeLink, setYoutubeLink] = useState("");
  const [description, setDescription] = useState("");
  

    const handleSubirClick = () => {
      // Call the onUpload function with selected files
      onUpload(selectedFiles);
      onClose(); // Close the modal after upload
    };


  const handleClose = () => {
    onClose();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleYoutubeLinkChange = (e) => {
    setYoutubeLink(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Subir Contenido</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Selecciona el tipo de contenido:</h3>
          <select
            value={mediaType}
            onChange={(e) => setMediaType(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="photos">Fotos</option>
            <option value="videos">Videos</option>
          </select>
        </div>
        {mediaType === "photos" && (
          <div className="mb-4">
            <h3 className="font-semibold">Imágenes:</h3>
            <p className="mb-2">Arrastra imágenes o haz clic para subir imágenes</p>
            <input type="file" accept="image/*" multiple onChange={handleFileChange} className="mt-1 p-2 w-full border rounded" />
            <div>
              {selectedFiles.map((file, index) => (
                <img key={index} src={URL.createObjectURL(file)} alt={`uploaded-${index}`} className="mt-2 rounded" style={{ maxWidth: "100px", maxHeight: "100px" }} />
              ))}
            </div>
          </div>
        )}
        {mediaType === "videos" && (
          <div className="mb-4">
            <h3 className="font-semibold">Videos:</h3>
            <p className="mb-2">Arrastra videos o proporciona un enlace de YouTube</p>
            <input type="file" accept="video/*" multiple onChange={handleFileChange} className="mt-1 p-2 w-full border rounded" />
            <div className="mt-2">
              <input type="text" placeholder="Enlace de YouTube" value={youtubeLink} onChange={handleYoutubeLinkChange} className="p-2 w-full border rounded" />
            </div>
          </div>
        )}
        <div className="mb-4">
          <h3 className="font-semibold">Descripción:</h3>
          <textarea
            rows="3"
            placeholder="Agrega una descripción"
            value={description}
            onChange={handleDescriptionChange}
            className="mt-1 p-2 w-full border rounded"
          ></textarea>
        </div>
        <div className="flex justify-between">
          {/* Call handleSubirClick when Subir button is clicked */}
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

export default UploadModal;
