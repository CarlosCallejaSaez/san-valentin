import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import confetti from 'canvas-confetti';

function ResultPage() {
  const { name } = useParams();
  const [showMessage, setShowMessage] = useState(false);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const audioRef = useRef(null); 
  const messages = [
    `Cada momento contigo es un regalo, ${name}.`,
  `Tu amor ilumina mi mundo`,
  `Estar a tu lado es donde pertenezco`,
  `Gracias por ser mi todo`,
    `¡Feliz San Valentín, ${name}!`
  ];


  const fireConfetti = () => {
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#bb0000', '#ffffff'], 
    });
  
    
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#bb0000', '#ffffff'],
      });
    }, 1000); 
  
   
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#bb0000', '#ffffff'],
      });
    }, 2000); 
  };
  
 

  useEffect(() => {
    let interval;
    if (showMessage && displayedMessages.length < messages.length) {
      interval = setInterval(() => {
        setDisplayedMessages(currentMessages => {
          const nextMessages = [...currentMessages, messages[currentMessages.length]];
          if(nextMessages.length === messages.length) {
            fireConfetti();
             
          }
          return nextMessages;
        });
      }, 2000); 
    }
  
    return () => clearInterval(interval);
  }, [showMessage, displayedMessages.length, messages]);
  

  const shareLink = `https://wa.me/?text=¡Mira este mensaje de San Valentín para ti! https://carloscallejasaez.github.io/san-valentin/result/${encodeURIComponent(name)}`;

  const handleButtonClick = () => {
    setShowMessage(true);
    if (audioRef.current) {
      audioRef.current.play(); 
    }
  };

  return (
    <div className="result-page" style={{ height: '100vh', color: 'white', padding: '20px', overflow: 'auto' }}>
      <h2>Para: {name} 🥰😊</h2>
      {!showMessage && <button onClick={handleButtonClick}>Hazme click</button>}
      <audio ref={audioRef} src="../../public/love.mp3" loop>
        Tu navegador no soporta el elemento de audio.
      </audio>
      {showMessage && (
        <div className="messages">
          {displayedMessages.map((message, index) => (
            <p key={index} style={{ backgroundColor: 'rgba(255,255,255,0.6)', margin: '10px 0', padding: '10px', borderRadius: '5px' }}>{message}</p>
          ))}
        </div>
      )}
      {showMessage && displayedMessages.length === messages.length && (
        <a href={shareLink} target="_blank" rel="noopener noreferrer">
          <button style={{ marginTop: '20px' }}>Compartir en WhatsApp</button>
        </a>
      )}
    </div>
  );
}

export default ResultPage;
