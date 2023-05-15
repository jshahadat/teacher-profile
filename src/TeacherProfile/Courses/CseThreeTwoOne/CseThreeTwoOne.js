import React, { useEffect, useState } from 'react';
import ChapOne from './ChapOne';

const CseThreeTwoOne = () => {


    const [chapterOnes, setChapterOnes] = useState([])


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/chapterone?chapCode=1CSE-321", {

        })
            .then(res => res.json())
            .then(data => setChapterOnes(data))
    }, [])
    return (
        <div className='mt-20' style={{ width: "60vw", margin: "auto", marginTop: "30px", marginBottom: "40px" }}>
            <div>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold'>Course Title :</h1>
                    <h1 className='text-2xl font-bold mb-20'>Course Code: CSE-321</h1>
                </div>
                <div >
                    <h1 className=' font-bold text-xl mb-2'>A. Origin & Identity of  the People of Bangladesh</h1>
                    <p className='font-semibold mt-2 text-justify'>*Anthropologists agree that Bangladesh has historically been a land of many races. Long before the arrival of the Aryans in the 5th and 6th centuries B.C., the Bangalees were already racially mixed. It says that the origin of human beings is Africa, but that some of them at first moved into the northern part of the Middle East and then dispersed across the world.
                    </p>
                    <p className='font-semibold mt-2 text-justify'>*Why ??? The main reasons for coming to Bengal were first the zeal to conquer and occupy a new region, and the second was to do business in the wealthy and prosperous Bengal and third was environmental.
                    </p>
                    <p className='font-semibold mt-2 text-justify'>
                        *The groups of the people who went to South-East Asia had crossed the land of Bangladesh more than fifty thousand years ago. These people developed languages, known as Austric Languages with their name Austric or Austro-Asiatic people. These people entered Bangladesh several thousand years ago from South-East Asia. Near about the same time or later some other people, whom we now classify as Mongoloid also entered the territories of Bangladesh from the East and spread mainly into the uplands and hilly areas.

                    </p>

                </div>
                <h1 className='text-xl font-bold mt-3 mb-2'>Chpater Related Question</h1>

                {

                    chapterOnes.map(chapterOne => <ChapOne
                        key={chapterOne._id}
                        chapterOne={chapterOne}
                    ></ChapOne>)
                }

            </div>

        </div>
    );
};

export default CseThreeTwoOne;