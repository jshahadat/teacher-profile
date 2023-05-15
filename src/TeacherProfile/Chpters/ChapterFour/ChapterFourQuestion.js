import React from 'react';

const ChapterFourQuestion = ({ chapterFourQuestion, i }) => {
    const { question, number, } = chapterFourQuestion;
    return (
        <div>
            <div className='flex justify-between justify-items-center'>
                <h1 className='mt-3 font-semibold text-justify mr-2'>({i + 1}) {question} </h1>
                <h1 className='text-xl font-bold mt-3 ml-3'>{number}</h1>
                {/* <Link to={`/${_id}`}><button className='btn'>Edit</button></Link> */}
            </div>

        </div>
    );
};
export default ChapterFourQuestion;