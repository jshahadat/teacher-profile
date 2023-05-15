import React, { useEffect, useState } from 'react';
import TwoOneQuestion from './TwoOneQuestion';

const TwoOne = () => {
    const [chapterTwos, setChapterTwos] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const chapterTwoRandomQuestions = randomArrayValue(chapterTwos, 1);
    // console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/chaptertwo?chapCode=2CSE-321Spring", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setChapterTwos(data))
    }, [])
    return (
        <div>
            {

                chapterTwoRandomQuestions.map((chapterTwoQuestion, i) => <TwoOneQuestion
                    key={chapterTwoQuestion._id}
                    chapterTwoQuestion={chapterTwoQuestion}
                    i={i}
                ></TwoOneQuestion>)
            }

        </div>
    );
};

export default TwoOne;