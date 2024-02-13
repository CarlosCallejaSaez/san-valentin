import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function HomePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleShare = () => {
    if (!name.trim()) { 
        alert('Por favor, introduce el nombre de tu amado/a.'); 
        return; 
      }
    navigate(`/result/${name}`);
  };

  return (
  <>
    <div className="home-page">
      <img className="svimage" src="./san-valentin.gif" alt="San Valentín" />
      <input
        type="text"
        placeholder="Nombre de tu amado/a"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleShare}>Crear</button>
    </div>
    <Footer/>
    </>
  );
}

export default HomePage;
