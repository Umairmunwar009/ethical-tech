import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsPage.css';

const NewsPage = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/api/news');
                setNewsArticles(response.data);
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-page">
            <h1>News & Articles</h1>
            <div className="news-list">
                {newsArticles.map(article => (
                    <div key={article._id} className="news-item">
                        <img src={article.imageUrl} alt={article.title} />
                        <h2>{article.title}</h2>
                        <p>{new Date(article.timestamp).toLocaleString()}</p>
                        <p>{article.summary}</p>
                        <a href={`/articles/${article._id}`}>Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsPage;