import React from 'react';
import "./Syllabus.css"

const QuestionSyllabus = ({ questions, i }) => {
    return (
        <div className=''>
            <h1 className='text-xl font-bold p-2'>({i + 1}) {questions.question}</h1>

        </div>
    );
};

export default QuestionSyllabus;