const Quiz = require('../models/Quiz');

// Fetch all quizzes
exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quizzes', error });
    }
};

// Save user answers
exports.saveUserAnswers = async (req, res) => {
    const { quizId, userAnswers } = req.body;

    try {
        const quiz = await Quiz.findById(quizId);
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // Here you would typically save the user's answers to a separate collection or update the quiz
        // For simplicity, we are just returning the answers
        res.status(200).json({ message: 'Answers saved successfully', userAnswers });
    } catch (error) {
        res.status(500).json({ message: 'Error saving answers', error });
    }
};