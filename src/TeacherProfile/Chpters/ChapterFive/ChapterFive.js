import React, { useEffect, useState } from 'react';
import ChapterFiveQuestion from './ChapterFiveQuestion';

const ChapterFive = () => {
    const [chapterFives, setChapterFives] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }


    const randomValue = randomArrayValue(chapterFives);


    const chapterFiveRandomQuestions = randomArrayValue(chapterFives, 5);
    // console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/chapterone?chapCode=5CSE-321Spring", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => chapterFives(data))
    }, [])
    return (
        <div>
            {

                chapterFiveRandomQuestions.map(chapterFiveQuestion => <ChapterFiveQuestion
                    key={chapterFiveQuestion._id}
                    chapterFiveQuestion={chapterFiveQuestion}
                ></ChapterFiveQuestion>)
            }

        </div>
    );
};

export default ChapterFive;