import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SummerCoursesChapterCard from './SummerCoursesChapterCard';

const SummerCoursesChapter = () => {

    const { courseTitle, courseCode } = useLoaderData();

    const [summerAllChapters, setSummerAllChapters] = useState([])
    const { user } = useContext(AuthContext)

    const newArray = [];

    summerAllChapters.forEach(obj => {
        // Check if the object is already in the new array
        const existingObj = newArray.find(o => o.chapterNo === obj.chapterNo);
        if (!existingObj) {
            // If the object is not already in the new array, add it
            newArray.push(obj);
        }
    });

    console.log(newArray);

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://assignment-twelfth-server.vercel.app/chpters?courseCode=${courseCode}&&email=${user?.email}`)
                .then(response => response.json())
                .then(json => {
                    const result = json.sort((chapter1, chapter2) => chapter1.chapterNo.localeCompare(chapter2.chapterNo));
                    setSummerAllChapters(result);
                })
                .catch(e => {
                    console.log('Error:', e);
                });
        };

        fetchData();
    }, [courseCode && user?.email]);
    return (
        <div >

            <section className='sectiones'>
                <h1 class="text-shadow titlessss"> -- {courseTitle} ({courseCode}) -- </h1>
            </section>
            {/* <h1 className='text-center'> {courseTitle} ({courseCode})</h1> */}
            {/* <h1>{semester}-({year})</h1> */}
            {/* <h1 className=' ml-16 mt-12 chapterTitle'>ALL CHAPTER</h1> */}
            <div className='grid grid-cols-4 gap-4 ml-16'>
                {
                    newArray.map(summerChapter => <SummerCoursesChapterCard
                        key={summerChapter._id}
                        summerChapter={summerChapter}
                    ></SummerCoursesChapterCard>)
                }

            </div>


        </div>
    );
};

export default SummerCoursesChapter;