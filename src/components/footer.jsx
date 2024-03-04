import React from "react";
import{ useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    
    setCurrentYear(new Date().getFullYear());
  }, []); 
  return (
    <footer className="footer">
    <div className="footers">

   
      <div className="footer__contacts">
        <h4>Contact Us</h4>
        <p>Email: alightrwanda@example.com</p>
        <p>Phone: 078845332</p>
      </div>
      <div className="footer__links">
        <h4> Links</h4>
        <ul>
          <li><a href="/">the summit</a></li>
          <li><a href="/about">AGENDA</a></li>
          <li><a href="/services">SPONSORS</a></li>
          <li><a href="/contact">PRACTICAL INFORMATION</a></li>
        </ul>
      </div>
      <div className="footer__resources">
        <h4>Resources</h4>
        <ul>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
      </div>
      <div className="footer__copy">
      <p>&copy; {currentYear} alight Rwanda all deserved</p>
      </div>
      
    </footer>
  );
};

export default Footer;