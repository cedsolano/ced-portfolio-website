import React, { useState } from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("Sending your message...");

    const formData = new FormData(event.currentTarget);
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
        setMessage("🎉 Message sent successfully! I'll get back to you soon.");
        event.currentTarget.reset();
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
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
    <section id="contact" className="section container">
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
          
          <button type="submit" className="submit-btn-clean">Send Message</button>
          {status !== "idle" && <span className={`form-result ${status}`}>{message}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
