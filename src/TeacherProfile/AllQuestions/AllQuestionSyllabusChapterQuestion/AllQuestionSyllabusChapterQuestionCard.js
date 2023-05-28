import React from 'react';

const AllQuestionSyllabusChapterQuestionCard = ({ questions, i }) => {
    return (
        <div>
            <div className=''>
                <h1 className='text-xl font-bold p-2'>({i + 1}) {questions.question}</h1>

            </div>
        </div>
    );
};

export default AllQuestionSyllabusChapterQuestionCard;