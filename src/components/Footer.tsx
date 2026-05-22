import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-quote" style={{ fontFamily: 'monospace', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
          "while ( !( succeed = try () ) );"
        </p>
        <p>&copy; {new Date().getFullYear()} Cedric Mark Solano. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
