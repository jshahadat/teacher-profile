import React from 'react';

const ChapOne = ({ chapterOne }) => {
    console.log(chapterOne);
    return (
        <div>
            <h1 className='mt-3 text-lg'>{chapterOne.question}</h1>

        </div>
    );
};

export default ChapOne;