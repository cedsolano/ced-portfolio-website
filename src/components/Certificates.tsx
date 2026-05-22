import React from 'react';
import './Certificates.css';
import { FaCertificate } from 'react-icons/fa';

const Certificates: React.FC = () => {
  const certificates = [
    {
      id: 1,
      title: 'Certified Associate in Application Defense (PUP-CAAD)',
      issuer: 'PUP Quezon City | Issued Jun 2025',
      credentialId: '6850fe298c150f5946a434f8',
      image: '/pic/pup acad.png',
    },
    {
      id: 2,
      title: 'mabl Skills Certification: Foundations',
      issuer: 'mabl | Issued May 2024',
      credentialId: 'pxxo9ogohkgv',
      image: '/pic/mabl.png',
    },
    {
      id: 3,
      title: 'CS406: Information Security',
      issuer: 'Saylor Academy | Issued Mar 2025',
      credentialId: '8322773263CS',
      image: '/pic/saylor acad.png',
    }
  ];

  return (
    <section id="certificates" className="section container">
      <div className="section-header">
        <span className="section-label">Credentials</span>
        <h2 className="section-main-title">Certifications</h2>
      </div>
      <div className="cert-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="cert-card glass">
            <div className="cert-logo-box">
              <img src={cert.image} alt={cert.issuer} className="cert-logo" />
            </div>
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <span className="cert-id">Credential ID: {cert.credentialId}</span>
              <span className="cert-badge"><FaCertificate /> Verified</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
