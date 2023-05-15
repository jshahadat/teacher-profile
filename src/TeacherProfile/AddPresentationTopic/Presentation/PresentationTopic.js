import React from 'react';

const PresentationTopic = ({ randomPresentationTopic, i }) => {
    const { presentationTopic } = randomPresentationTopic;
    return (
        <div>

            <h1 className='text-xl font-bold p-2'>({i + 1}) {presentationTopic}</h1>
        </div>
    );
};


export default PresentationTopic;