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
      <div className="contact-wrapper">
        <div className="contact-info glass">
          <h3>Get In Touch</h3>
          <p className="contact-description">
            Feel free to connect with me through the social media below!
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="contact-social-links">
            <a href="https://facebook.com/cedricmark.solano.3" target="_blank" rel="noreferrer" className="contact-icon fb" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/cedsolano_" target="_blank" rel="noreferrer" className="contact-icon ig" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com/cedsolano" target="_blank" rel="noreferrer" className="contact-icon gh" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/cedric-mark-solano-6309122b9" target="_blank" rel="noreferrer" className="contact-icon li" title="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <form className="contact-form glass" onSubmit={onSubmit}>
          <h3>Send a Message</h3>
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
          {status !== "idle" && <span className={`form-result ${status}`}>{message}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
