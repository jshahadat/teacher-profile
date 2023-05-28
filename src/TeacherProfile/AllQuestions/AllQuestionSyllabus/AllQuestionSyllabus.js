import React, { useEffect, useState } from 'react';
import AllquestionSyllabusCard from './AllquestionSyllabusCard';

const AllQuestionSyllabus = () => {

    const [allCousrses, setAllCourses] = useState([])
    const allCousressByOne = [];

    allCousrses.forEach(obj => {
        // Check if the object is already in the new array
        const existingObj = allCousressByOne.find(o => o.courseTitle === obj.courseTitle);
        if (!existingObj) {
            // If the object is not already in the new array, add it
            allCousressByOne.push(obj);
        }
    });
    console.log(allCousressByOne);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/allcourses")
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    allCousressByOne.map(allsSyllabusChapterCard => <AllquestionSyllabusCard
                        key={allsSyllabusChapterCard._id}
                        allsSyllabusChapterCard={allsSyllabusChapterCard}
                    ></AllquestionSyllabusCard>)
                }
            </div>

        </div>
    );
};

export default AllQuestionSyllabus;