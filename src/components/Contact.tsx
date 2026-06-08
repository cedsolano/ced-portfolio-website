import React, { useState } from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn, FaCheckCircle } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement; // Use event.target instead of currentTarget

    setStatus("sending");
    setMessage("Sending your message...");

    const formData = new FormData(form);
    formData.append("access_key", "123ffb31-d592-4ac4-8e4e-988b7b8860e1");

    // Customize how the email looks in your Gmail inbox
    formData.append("subject", "📬 New Message from Portfolio Website");
    formData.append("from_name", "Portfolio Contact Form");

    const object = Object.fromEntries(formData as any);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });

      if (response.ok) {
        setStatus("success");
        setMessage("");
        form.reset(); // Use the stored reference to reset the form

      } else {
        setStatus("error");
        setMessage("Something went wrong with the server.");
      }
    } catch (error) {
      console.error("Submission Error", error);
      setStatus("error");
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '220px' }}>

      {/* ── WAVE — placed at top of contact section, content flows below it ── */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        lineHeight: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ width: '100%', height: '200px', display: 'block' }}>
          <path fill="var(--wave-1)" d="M0,0L0,80L60,70C120,60,240,40,360,45C480,50,600,80,720,90C840,100,960,85,1080,70C1200,55,1320,40,1380,35L1440,30L1440,0Z" />
          <path fill="var(--wave-2)" d="M0,0L0,110L60,100C120,90,240,70,360,72C480,74,600,100,720,108C840,116,960,102,1080,90C1200,78,1320,65,1380,60L1440,55L1440,0Z" />
          <path fill="var(--wave-3)" d="M0,0L0,135L60,128C120,120,240,106,360,108C480,110,600,130,720,138C840,146,960,135,1080,124C1200,113,1320,102,1380,97L1440,92L1440,0Z" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-main-title">Let's Work Together</h2>
        </div>
        <div className="contact-wrapper-clean">
          <div className="contact-info-clean">
            <h2 className="contact-title">Get in touch</h2>

            <div className="contact-detail">
              <span className="contact-detail-label">EMAIL:</span>
              <span className="contact-detail-text">ced.solano22@gmail.com</span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">ADDRESS:</span>
              <span className="contact-detail-text">Commonwealth, Quezon City</span>
            </div>

            <button className="connect-btn">Let's connect</button>

            <div className="social-section">
              <span className="social-label">Follow us</span>
              <div className="contact-social-links-clean">
                <a href="https://facebook.com/cedricmark.solano.3" target="_blank" rel="noreferrer" className="contact-icon-clean fb" title="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com/cedsolano_" target="_blank" rel="noreferrer" className="contact-icon-clean ig" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://github.com/cedsolano" target="_blank" rel="noreferrer" className="contact-icon-clean gh" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/cedric-mark-solano-6309122b9" target="_blank" rel="noreferrer" className="contact-icon-clean li" title="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {status === "success" ? (
            <div className="contact-success-card">
              <FaCheckCircle className="success-icon" />
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
              <button onClick={() => setStatus("idle")} className="btn btn-secondary send-another-btn">
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form-clean" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="input-group-clean">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="Your full name" required />
                </div>
                <div className="input-group-clean">
                  <label>Email address</label>
                  <input type="email" name="email" placeholder="Your email address" required />
                </div>
              </div>

              <div className="input-group-clean">
                <label>Message</label>
                <textarea name="message" placeholder="Write something..." rows={6} required></textarea>
              </div>

              <button type="submit" className="submit-btn-clean" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && <span className="form-result error">{message}</span>}
            </form>
          )}
        </div>
      </div>

    </section>
  );
};

export default Contact;
