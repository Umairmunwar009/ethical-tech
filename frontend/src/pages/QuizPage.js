import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuizTimer from '../components/QuizTimer';
import ProgressTracker from '../components/ProgressTracker';
import './QuizPage.css';

const QuizPage = () => {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(900); // 15 minutes in seconds

    useEffect(() => {
        // Fetch quiz data from the backend
        const fetchQuiz = async () => {
            const response = await fetch(`/api/quizzes/${quizId}`);
            const data = await response.json();
            setQuiz(data);
        };
        fetchQuiz();
    }, [quizId]);

    const handleAnswerSelect = (answer) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[currentQuestionIndex] = answer;
        setUserAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleSubmit = async () => {
        await fetch(`/api/quizzes/${quizId}/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ answers: userAnswers }),
        });
        // Redirect or show results
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    handleSubmit();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    if (!quiz) {
        return <div>Loading...</div>;
    }

    return (
        <div className="quiz-page">
            <h1>{quiz.title}</h1>
            <QuizTimer timeRemaining={timeRemaining} />
            <ProgressTracker currentQuestionIndex={currentQuestionIndex} totalQuestions={quiz.questions.length} />
            <div className="question">
                <h2>{quiz.questions[currentQuestionIndex].question}</h2>
                <div className="answers">
                    {quiz.questions[currentQuestionIndex].answers.map((answer, index) => (
                        <button key={index} onClick={() => handleAnswerSelect(answer)}>
                            {answer}
                        </button>
                    ))}
                </div>
            </div>
            <button onClick={handleNextQuestion} disabled={currentQuestionIndex === quiz.questions.length - 1}>
                Next Question
            </button>
            {currentQuestionIndex === quiz.questions.length - 1 && (
                <button onClick={handleSubmit}>Submit Quiz</button>
            )}
        </div>
    );
};

export default QuizPage;