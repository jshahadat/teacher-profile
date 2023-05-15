import React, { useEffect, useState } from 'react';
import ChapterThreeQuestion from './ChapterThreeQuestion';

const ChapterThree = () => {
    const [chapterThrees, setChapterThrees] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }


    const randomValue = randomArrayValue(chapterThrees);


    const chapterThreeRandomQuestions = randomArrayValue(chapterThrees, 5);
    // console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/chapterthree?chapCode=3CSE-321Spring", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setChapterThrees(data))
    }, [])
    return (
        <div>
            {

                chapterThreeRandomQuestions.map((chapterThreeQuestion, i) => <ChapterThreeQuestion
                    key={chapterThreeQuestion._id}
                    chapterThreeQuestion={chapterThreeQuestion}
                    i={i}
                ></ChapterThreeQuestion>)
            }

        </div>
    );
};

export default ChapterThree;