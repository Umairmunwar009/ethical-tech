const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Route to get all news articles
router.get('/', newsController.getAllNews);

// Route to get a single news article by ID
router.get('/:id', newsController.getNewsById);

// Route to create a new news article
router.post('/', newsController.createNews);

// Route to update a news article by ID
router.put('/:id', newsController.updateNews);

// Route to delete a news article by ID
router.delete('/:id', newsController.deleteNews);

module.exports = router;