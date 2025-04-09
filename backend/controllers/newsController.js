const News = require('../models/News');

// Fetch all news articles
exports.getAllNews = async (req, res) => {
    try {
        const newsArticles = await News.find().sort({ createdAt: -1 });
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news articles', error });
    }
};

// Fetch a single news article by ID
exports.getNewsById = async (req, res) => {
    const { id } = req.params;
    try {
        const newsArticle = await News.findById(id);
        if (!newsArticle) {
            return res.status(404).json({ message: 'News article not found' });
        }
        res.status(200).json(newsArticle);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news article', error });
    }
};

// Create a new news article
exports.createNews = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newArticle = new News({ title, content });
        await newArticle.save();
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ message: 'Error creating news article', error });
    }
};

// Update an existing news article
exports.updateNews = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedArticle = await News.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedArticle) {
            return res.status(404).json({ message: 'News article not found' });
        }
        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(500).json({ message: 'Error updating news article', error });
    }
};

// Delete a news article
exports.deleteNews = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedArticle = await News.findByIdAndDelete(id);
        if (!deletedArticle) {
            return res.status(404).json({ message: 'News article not found' });
        }
        res.status(200).json({ message: 'News article deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting news article', error });
    }
};