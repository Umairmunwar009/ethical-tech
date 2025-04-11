import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <header className="hero">
                <h1>Welcome to Ethical Tech</h1>
            </header>

            {/* Featured Section */}
            <section className="newest-technologies">
                <h2>Newest Technologies</h2>
                <div className="tech-cards">
                    <div className="tech-card">
                        <img src="https://via.placeholder.com/300" alt="Technology 1" />
                        <h3>Technology 1</h3>
                        <p>Short description of Technology 1.</p>
                    </div>
                    <div className="tech-card">
                        <img src="https://via.placeholder.com/300" alt="Technology 2" />
                        <h3>Technology 2</h3>
                        <p>Short description of Technology 2.</p>
                    </div>
                    <div className="tech-card">
                        <img src="https://via.placeholder.com/300" alt="Technology 3" />
                        <h3>Technology 3</h3>
                        <p>Short description of Technology 3.</p>
                    </div>
                    <div className="tech-card">
                        <img src="https://via.placeholder.com/300" alt="Technology 4" />
                        <h3>Technology 4</h3>
                        <p>Short description of Technology 4.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-us">
                <h2>About Us</h2>
                <p>We promote awareness about ethical technology and its impact on society.</p>
            </section>

        </div>
    );
};

export default HomePage;