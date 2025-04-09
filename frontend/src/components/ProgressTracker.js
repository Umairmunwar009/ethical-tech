import React from 'react';

const ProgressTracker = ({ currentQuestion, totalQuestions }) => {
    return (
        <div className="progress-tracker">
            <p>Question {currentQuestion} of {totalQuestions}</p>
            <div className="progress-bar">
                <div 
                    className="progress" 
                    style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }} 
                />
            </div>
        </div>
    );
};

export default ProgressTracker;