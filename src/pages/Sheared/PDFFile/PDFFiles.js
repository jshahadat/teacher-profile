import React, { useEffect, useState } from 'react';
import PDFFile from './PDFFile';

const PDFFiles = () => {


    const [count, setCount] = useState(0);

    const [chapterOnes, setChapterOnes] = useState([])
    console.log(chapterOnes);



    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }


    const randomValue = randomArrayValue(chapterOnes);


    const chapterOneRandomQuestions = randomArrayValue(chapterOnes, 5);
    console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/chapterone?chapCode=1CSE-321", {
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

                chapterOneRandomQuestions.map(chapterOneQuestion => <PDFFile
                    key={chapterOneQuestion._id}
                    chapterOneQuestion={chapterOneQuestion}
                ></PDFFile>)
            }
        </div>
    );
};

export default PDFFiles;