const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Route to get all quizzes
router.get('/', quizController.getAllQuizzes);

// Route to get a specific quiz by ID
router.get('/:id', quizController.getQuizById);

// Route to save user answers for a quiz
router.post('/:id/answers', quizController.saveUserAnswers);

module.exports = router;