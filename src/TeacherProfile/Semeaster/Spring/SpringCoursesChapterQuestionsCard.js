import React from 'react';

const SpringCoursesChapterQuestionsCard = ({ springCoursesQuestion, i }) => {
    return (
        <div>
            <h1 className='mb-96'>({i + 1}) {springCoursesQuestion.question}</h1>
        </div>
    );
};

export default SpringCoursesChapterQuestionsCard;