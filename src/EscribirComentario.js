import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const EscribirComentario = ({ onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleSubirClick = () => {
    // Call the onUpload function with selected file
    onUpload(selectedFile);
    onClose(); // Close the modal after upload
  };

  const handleClose = () => {
    onClose();
  };

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
    maxFiles: 1, // Allow only one file
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md">
      <div className="text-center mb-4">
  <img  src='https://lh3.googleusercontent.com/a/ACg8ocJIeFrk9J4aTwaIluwcyeaJXB8LoDEUPJCuxexbPynv946X=s96-c' alt="" className="mx-auto mb-2 w-24 h-24 rounded-full" />
  <p className="text-lg font-semibold text-rojo">Renzo Fernandez</p>
  <hr className="my-4 border-gray-300" />
</div>

        <p className="mb-2 text-center ">
          Cada comentario debera ser aprobado por el propietario del perfil
        </p>
        <div className="mb-4 mt-3 md:col-span-2">
          <label htmlFor="phrase" className="font-semibold">
            Titulo:
          </label>
          <input
            type="text"
            id="phrase"
            className="mt-1 p-2 w-full border rounded"
          />
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
        <h3 className="mb-4 font-semibold">Imágenes:</h3>
        <div className="mb-4 border-dashed border-2 border-gray-400 rounded-md p-4">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Arrastra una imagen aquí o haz clic para seleccionar</p>
          </div>
          <div>
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt={`uploaded`}
                className="mt-2 rounded"
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            )}
          </div>
        </div>
        <div className="flex justify-between">
          {/* Call handleSubirClick when Subir button is clicked */}
          <button
            className="bg-rojo hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubirClick}
            disabled={!selectedFile} // Disable button if no file selected
          >
            Subir
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={handleClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EscribirComentario;
