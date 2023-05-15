import React, { useEffect, useState } from 'react';
import ThreeQuestion from './ThreeQuestion';

const Three = () => {
    const [chapterThrees, setChapterThrees] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    const chapterThreeRandomQuestions = randomArrayValue(chapterThrees, 1);
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

                chapterThreeRandomQuestions.map((chapterThreeQuestion, i) => <ThreeQuestion
                    key={chapterThreeQuestion._id}
                    chapterThreeQuestion={chapterThreeQuestion}
                    i={i}
                ></ThreeQuestion>)
            }

        </div>
    );
};
export default Three;