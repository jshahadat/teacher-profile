import React from 'react';

const AssignmentTopic = ({ randomAssignmentTopic, i }) => {
    const { assignmentTopic } = randomAssignmentTopic;
    return (
        <div>
            <h1 className='text-xl font-bold p-2'>({i + 1}) {assignmentTopic}</h1>
        </div>
    );
};

export default AssignmentTopic;