import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';
import bridgePhoto from '../assets/bridge_portrait.jpg';

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-form-container">
                <h2>Contact Me!</h2>
                <p>Please feel free to reach out with questions, oppurtunities, or other inquiries.</p>
                <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                    <input type="hidden" name="apikey" value="ebbf215a-4b13-4536-b57c-985efceec014" />
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                    <input type="text" id="subject" name="subject" placeholder="Subject" required />
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                <div className="contact-links">
                    <a href="https://www.linkedin.com/in/connorswanson" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://github.com/connorswanson1" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="mailto:connor.swanson.dev@gmail.com" aria-label="Email"><FaEnvelope /></a>
                </div>
            </div>
            <div className="contact-info-container">
                <img src={bridgePhoto} alt="Your Name" className="contact-photo" />
            </div>
        </div>
    );
}

export default Contact;
