import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SpringChapterQuestionOne from './SpringQuestion/SpringChapterQuestionOne';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SpringOneTwo = () => {
    const { courseTitle, courseCode, _id } = useLoaderData();
    const { user } = useContext(AuthContext)


    const [chapterOnes, setChapterOnes] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const chapterOneRandomQuestions = randomArrayValue(chapterOnes, 2);

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/springsone?courseCode=${courseCode}&&email=${user?.email}&&chapterNo=1`, {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setChapterOnes(data))
    }, [courseCode && user?.email])
    return (
        <div>
            <section className='sectiones'>
                <h1 class="text-shadow titlessss"> -- {courseTitle} ({courseCode}) -- </h1>
            </section>
            <div>
                {
                    chapterOneRandomQuestions.map(chapterOne => <SpringChapterQuestionOne
                        key={chapterOne._id}
                        chapterOne={chapterOne}
                    ></SpringChapterQuestionOne>)
                }
            </div>
        </div>
    );
};

export default SpringOneTwo;