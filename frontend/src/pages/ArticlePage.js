import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArticlePage.css';

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`/api/news/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error("Error fetching the article:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return <div>Article not found.</div>;
    }

    return (
        <div className="article-page">
            <h1>{article.title}</h1>
            <p>{new Date(article.timestamp).toLocaleString()}</p>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
    );
};

export default ArticlePage;