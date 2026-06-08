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
    <section id="certificates" className="section container" style={{ position: 'relative', overflow: 'visible', paddingBottom: '220px' }}>
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

      {/* ── BOTTOM WAVE — mirrors the Contact top wave (reflection effect) ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        lineHeight: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ width: '100%', height: '200px', display: 'block', transform: 'scaleY(-1)' }}>
          <path fill="var(--wave-1)" d="M0,0L0,80L60,70C120,60,240,40,360,45C480,50,600,80,720,90C840,100,960,85,1080,70C1200,55,1320,40,1380,35L1440,30L1440,0Z" />
          <path fill="var(--wave-2)" d="M0,0L0,110L60,100C120,90,240,70,360,72C480,74,600,100,720,108C840,116,960,102,1080,90C1200,78,1320,65,1380,60L1440,55L1440,0Z" />
          <path fill="var(--wave-3)" d="M0,0L0,135L60,128C120,120,240,106,360,108C480,110,600,130,720,138C840,146,960,135,1080,124C1200,113,1320,102,1380,97L1440,92L1440,0Z" />
        </svg>
      </div>
    </section>
  );
};

export default Certificates;
