import React from 'react';
import '../styles/TechInsightsPage.css';

const TechInsightsPage = () => {
    return (
        <div className="tech-insights-page">

            {/* Columns Section */}
            <section className="columns-section">
                <div className="column">
                    <h3>What is technology?</h3>
                    <a href="#">Definition</a>
                    <a href="#">History</a>
                    <a href="#">Impact</a>
                </div>
                <div className="column">
                    <h3>The newest tech</h3>
                    <a href="#">AI</a>
                    <a href="#">Blockchain</a>
                    <a href="#">Quantum Computing</a>
                </div>
                <div className="column">
                    <h3>Positives about tech</h3>
                    <a href="#">Efficiency</a>
                    <a href="#">Connectivity</a>
                    <a href="#">Innovation</a>
                </div>
                <div className="column">
                    <h3>Negatives about tech</h3>
                    <a href="#">Privacy</a>
                    <a href="#">Addiction</a>
                    <a href="#">Job Displacement</a>
                </div>
            </section>

            {/* Newest Tech Section */}
            <section className="newest-tech-section">
                <h2>Newest Tech</h2>
                <div className="tech-cards">
                    <div className="tech-card">
                        <div className="image-placeholder"></div>
                        <p>Tech Name</p>
                        <p>Short Description</p>
                        <p>More Info</p>
                    </div>
                    <div className="tech-card">
                        <div className="image-placeholder"></div>
                        <p>Tech Name</p>
                        <p>Short Description</p>
                        <p>More Info</p>
                    </div>
                    <div className="tech-card">
                        <div className="image-placeholder"></div>
                        <p>Tech Name</p>
                        <p>Short Description</p>
                        <p>More Info</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TechInsightsPage;