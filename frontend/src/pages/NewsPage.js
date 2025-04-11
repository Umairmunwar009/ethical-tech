import React from 'react';
import '../styles/NewsPage.css';

const NewsPage = () => {
    return (
        <div className="news-page">

            {/* News Section */}
            <section className="news-section">
                <h1>NEWS</h1>
                <div className="news-grid">
                    {/* Large News Item */}
                    <div className="large-news">
                        <a href="#">Breaking News: AI Revolution</a>
                        <a href="#">How AI is Changing the World</a>
                        <a href="#">Ethical Concerns in AI</a>
                        <img src="https://via.placeholder.com/400x200" alt="Large News" />
                        <p className="timestamp">45 mins ago</p>
                    </div>

                    {/* News Cards */}
                    <div className="news-cards">
                        <div className="news-card">
                            <img src="https://via.placeholder.com/200x150" alt="News 1" />
                            <a href="#">Tech News 1</a>
                            <a href="#">Subtitle 1</a>
                            <a href="#">Read More</a>
                        </div>
                        <div className="news-card">
                            <img src="https://via.placeholder.com/200x150" alt="News 2" />
                            <a href="#">Tech News 2</a>
                            <a href="#">Subtitle 2</a>
                            <a href="#">Read More</a>
                        </div>
                        <div className="news-card">
                            <img src="https://via.placeholder.com/200x150" alt="News 3" />
                            <a href="#">Tech News 3</a>
                            <a href="#">Subtitle 3</a>
                            <a href="#">Read More</a>
                        </div>
                        <div className="news-card">
                            <img src="https://via.placeholder.com/200x150" alt="News 4" />
                            <a href="#">Tech News 4</a>
                            <a href="#">Subtitle 4</a>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Info Section */}
            <section className="articles-info">
                <h2>Articles Info</h2>
                <ul>
                    <li><a href="#">Article 1: Understanding Blockchain</a></li>
                    <li><a href="#">Article 2: The Future of Quantum Computing</a></li>
                    <li><a href="#">Article 3: Ethical Challenges in Tech</a></li>
                    <li><a href="#">Article 4: How to Stay Safe Online</a></li>
                </ul>
            </section>

            {/* Back to Top Button */}
            <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ↑ Back to Top
            </button>
        </div>
    );
};

export default NewsPage;