import React, { useEffect, useState } from 'react';
import ChapterFourQuestion from './ChapterFourQuestion';

const ChapterFour = () => {
    const [chapterFours, setChapterFours] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }


    const chapterFourRandomQuestions = randomArrayValue(chapterFours, 5);
    // console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/chapterfour?chapCode=4CSE-321Spring", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setChapterFours(data))
    }, [])
    return (
        <div>
            {

                chapterFourRandomQuestions.map((chapterFourQuestion, i) => <ChapterFourQuestion
                    key={chapterFourQuestion._id}
                    chapterFourQuestion={chapterFourQuestion}
                    i={i}
                ></ChapterFourQuestion>)
            }

        </div>
    );
};

export default ChapterFour;