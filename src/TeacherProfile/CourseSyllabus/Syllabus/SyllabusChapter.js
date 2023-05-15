import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SyllabusChaptDetail from './SyllabusChaptDetail';
import './Syllabus.css'

const SyllabusChapter = () => {
    const { courseTitle, courseCode } = useLoaderData();

    const [allChapters, setAllChapters] = useState([])

    const newArray = [];

    allChapters.forEach(obj => {
        // Check if the object is already in the new array
        const existingObj = newArray.find(o => o.chapterNo === obj.chapterNo);
        if (!existingObj) {
            // If the object is not already in the new array, add it
            newArray.push(obj);
        }
    });

    console.log(newArray);

    // useEffect(() => {
    //     fetch(`https://assignment-twelfth-server.vercel.app/chpters?courseCode=${courseCode}`, {

    //     })
    //         .then(res => res.json())
    //         .then(data => setAllChapters(data))
    // }, [courseCode])

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://assignment-twelfth-server.vercel.app/chpters?courseCode=${courseCode}`)
                .then(response => response.json())
                .then(json => {
                    const result = json.sort((chapter1, chapter2) => chapter1.chapterNo.localeCompare(chapter2.chapterNo));
                    setAllChapters(result);
                })
                .catch(e => {
                    console.log('Error:', e);
                });
        };

        fetchData();
    }, [courseCode]);

    return (
        <div className='back_ani' style={{ height: "100vh" }}>

            <section className='sectiones'>
                <h1 class="text-shadow titlessss"> -- {courseTitle} ({courseCode}) -- </h1>
                <div class="tags">
                    <p class="text-shadow text-2xl">ALL CHAPTER</p>
                </div>
            </section>
            {/* <h1 className='text-center'> {courseTitle} ({courseCode})</h1> */}
            {/* <h1>{semester}-({year})</h1> */}
            {/* <h1 className=' ml-16 mt-12 chapterTitle'>ALL CHAPTER</h1> */}
            <div className='grid grid-cols-4 gap-4 ml-16'>
                {
                    newArray.map(syllabusChaptDetail => <SyllabusChaptDetail
                        key={syllabusChaptDetail._id}
                        syllabusChaptDetail={syllabusChaptDetail}
                    ></SyllabusChaptDetail>)
                }
            </div>

        </div>
    );
};

export default SyllabusChapter;