import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      background: 'rgba(244, 180, 213, 0.6)', 
      color: 'black',
      textAlign: 'center',
   
      position: 'fixed',
      left: '0',
      bottom: '0',
      width: '100%',
      fontFamily: 'Arial, sans-serif',
    }}>
      <p> © Carlos Calleja Sáez</p>
      <a href="linkedin.com/in/carlos-calleja-saez" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
        <FaLinkedin size="30" />
      </a>
      <a href="https://github.com/CarlosCallejaSaez" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white' }}>
        <FaGithub size="30" />
      </a>
    </footer>
  );
}

export default Footer;
