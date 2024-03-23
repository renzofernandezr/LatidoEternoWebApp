import React, { useState } from "react";

const EscribirComentario = ({ onClose, onUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
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

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
      <div className="text-center mb-4">
          <img src="/profile.jpg" alt="Profile" className="mx-auto mb-2 w-24 h-24 rounded-full" />
          <p className="text-lg font-semibold">Renzo Fernandez</p>
                  </div>
        <p className="mb-2 text-center ">Cada comentario debe ser aprobado por el propietario del perfil</p>
        <div className="mb-4 mt-3 md:col-span-2">
          <label htmlFor="phrase" className="font-semibold">Titulo:</label>
          <input type="text" id="phrase"  className="mt-1 p-2 w-full border rounded" />
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Comentario:</h3>
          <textarea
            rows="3"
            placeholder="Escribe alguna memoria que te gustaria compartir."
            value={description}
            onChange={handleDescriptionChange}
            className="mt-1 p-2 w-full border rounded"
          ></textarea>
        </div>
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

export default EscribirComentario;
