import React, { useEffect, useState } from 'react';
import TwoTwoQuestion from './TwoTwoQuestion';

const TwoTwo = () => {
    const [chapterTwos, setChapterTwos] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const chapterTwoRandomQuestions = randomArrayValue(chapterTwos, 2);
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

                chapterTwoRandomQuestions.map((chapterTwoQuestion, i) => <TwoTwoQuestion
                    key={chapterTwoQuestion._id}
                    chapterTwoQuestion={chapterTwoQuestion}
                    i={i}
                ></TwoTwoQuestion>)
            }

        </div>
    );
};

export default TwoTwo;