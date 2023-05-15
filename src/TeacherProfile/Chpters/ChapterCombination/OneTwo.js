import React, { useEffect, useState } from 'react';
import ChapterOneQuestion from '../ChpaterOne/ChapterOneQuestion';

const OneTwo = () => {
    const [chapterOnes, setChapterOnes] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const chapterOneRandomQuestions = randomArrayValue(chapterOnes, 2);
    // console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/chapterone?chapCode=1CSE-321Spring", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setChapterOnes(data))
    }, [])
    return (
        <div>


            {

                chapterOneRandomQuestions.map((chapterOneQuestion, i) => <ChapterOneQuestion
                    key={chapterOneQuestion._id}
                    chapterOneQuestion={chapterOneQuestion}
                    i={i}
                ></ChapterOneQuestion>)
            }

        </div>
    );
};

export default OneTwo;