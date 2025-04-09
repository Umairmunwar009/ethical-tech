import React from 'react';
import '../styles/Footer.css'; // Adjust the path as necessar

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2023 Ethical Tech. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;