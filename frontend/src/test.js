import React, { useState } from 'react';
import axios from 'axios';

const AddArticle = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      console.log(selectedFile)

      axios.post('http://127.0.0.1:8000/ext/', formData)
        .then(response => {
          console.log(response.data);
          // Gérer la réponse du backend, peut-être mettre à jour l'état du composant pour refléter le succès.
        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi du fichier:', error);
          // Gérer les erreurs, informer l'utilisateur, etc.
        });
    } else {
      // Gérer le cas où aucun fichier n'est sélectionné
      console.warn('Aucun fichier sélectionné.');
    }
  };

  return (
    <div>
      <button onClick={() => document.getElementById('fileInput').click()}>
        Ajouter un article
      </button>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Télécharger</button>
    </div>
  );
};

export default AddArticle;
