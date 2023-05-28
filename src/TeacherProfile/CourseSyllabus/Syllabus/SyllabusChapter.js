import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SyllabusChaptDetail from './SyllabusChaptDetail';
import './Syllabus.css'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SyllabusChapter = () => {
    const { courseTitle, courseCode } = useLoaderData();

    const [allChapters, setAllChapters] = useState([])
    const { user } = useContext(AuthContext)

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

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://assignment-twelfth-server.vercel.app/chpters?courseCode=${courseCode}&&email=${user?.email}`)
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
    }, [courseCode && user?.email]);

    return (
        <div className='back_ani'>

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

                <Link to='/addchapter'>
                    <div className='mb-12'>

                        <div >
                            <div>

                                <div class="face face1 reddds h-40 w-72 mt-28">
                                    <div class="content">
                                        <img alt='' className='w-28 mt-12 mx-auto' src="https://i.ibb.co/kKMQSPQ/plus-removebg-preview.png" />
                                        <h1 className='text-center text-white text-lg font-bold mb-5'>ADD CHAPTER</h1>

                                    </div>
                                </div>

                                <div class="face face2">

                                </div>
                            </div>

                        </div>

                    </div></Link>
            </div>


        </div>
    );
};

export default SyllabusChapter;