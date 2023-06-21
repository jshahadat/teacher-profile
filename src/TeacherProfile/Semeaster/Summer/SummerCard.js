import React from 'react';
import { Link } from 'react-router-dom';

const SummerCard = ({ summerCourese }) => {
    return (
        <div>
            <h1>{summerCourese.courseCode}</h1>
            <h1>{summerCourese.courseTitle}</h1>
            <Link to={`/summer/${summerCourese._id}`}><button>Select Course</button></Link>

        </div>
    );
};

export default SummerCard;