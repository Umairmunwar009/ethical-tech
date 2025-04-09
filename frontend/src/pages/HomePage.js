import React from 'react';
import '../styles/HomePage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <header className="hero-section">
                <img src="path/to/hero-image.jpg" alt="Welcome to Ethical Tech" />
                <h1>Welcome to Ethical Tech</h1>
            </header>
            <section className="newest-technologies">
                <h2>Newest Technologies</h2>
                <div className="tech-cards">
                    {/* Example card structure */}
                    <div className="tech-card">
                        <img src="path/to/tech-image.jpg" alt="Technology Name" />
                        <h3>Technology Name</h3>
                        <p>Short description of the technology.</p>
                    </div>
                    {/* Repeat for more technologies */}
                </div>
            </section>
            <section className="about-us">
                <h2>About Us</h2>
                <p>We promote awareness about ethical technology and its impact on society.</p>
            </section>
            <Footer />
        </div>
    );
};

export default HomePage;