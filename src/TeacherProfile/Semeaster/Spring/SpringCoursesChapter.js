import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SpringCoursesChapterCard from './SpringCoursesChapterCard';

const SpringCoursesChapter = () => {
    const { courseTitle, courseCode, _id } = useLoaderData();

    const [springAllChapters, setSpringAllChapters] = useState([])
    const { user } = useContext(AuthContext)

    const newArray = [];

    springAllChapters.forEach(obj => {
        // Check if the object is already in the new array
        const existingObj = newArray.find(o => o.chapterNo === obj.chapterNo);
        if (!existingObj) {
            // If the object is not already in the new array, add it
            newArray.push(obj);
        }
    });

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://assignment-twelfth-server.vercel.app/chpters?courseCode=${courseCode}&&email=${user?.email}`)
                .then(response => response.json())
                .then(json => {
                    const result = json.sort((chapter1, chapter2) => chapter1.chapterNo.localeCompare(chapter2.chapterNo));
                    setSpringAllChapters(result);
                })
                .catch(e => {
                    console.log('Error:', e);
                });
        };

        fetchData();
    }, [courseCode && user?.email]);


    return (
        <div>
            <div >

                <div className='flex justify-center'>
                    <div>
                        <NavLink className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                            <div class="ag-format-container">
                                <div class="ag-courses_box">
                                    <div class="ag-courses_item">
                                        <a href="#" class="ag-courses-item_link w-96" style={{ width: "300px" }}>
                                            <div class="ag-courses-item_bg"></div>

                                            <div class="ag-courses-item_title">
                                                QUIZ
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                            <div class="ag-format-container flex">
                                <div class="ag-courses_box">
                                    <div class="ag-courses_item hidden">
                                        <a href="#" class="ag-courses-item_link w-80">
                                            <div class="ag-courses-item_bg"></div>

                                            <div class="ag-courses-item_title">
                                                QUIZ
                                            </div>
                                        </a>
                                    </div>

                                    <div class="ag-courses_item hidden">
                                        <a href="#" class="ag-courses-item_link w-80">
                                            <div class="ag-courses-item_bg"></div>

                                            <div class="ag-courses-item_title">
                                                SUMMER
                                            </div>

                                            {/* <div class="ag-courses-item_date-box">
                                        Start:
                                        <span class="ag-courses-item_date">
                                            04.11.2022
                                        </span>
                                    </div> */}
                                        </a>
                                    </div>

                                    <div class="ag-courses_item">
                                        <a href="#" class="ag-courses-item_link w-80">
                                            <div class="ag-courses-item_bg"></div>

                                            <div class="ag-courses-item_title">
                                                SPRING
                                            </div>

                                            {/* <div class="ag-courses-item_date-box">
                                        Start:
                                        <span class="ag-courses-item_date">
                                            04.11.2022
                                        </span>
                                    </div> */}
                                        </a>
                                    </div>

                                    <div class="ag-courses_item hidden">
                                        <a href="#" class="ag-courses-item_link">
                                            <div class="ag-courses-item_bg"></div>

                                            <div class="ag-courses-item_title">
                                                Graphic Design
                                            </div>

                                            <div class="ag-courses-item_date-box">
                                                Start:
                                                <span class="ag-courses-item_date">
                                                    04.11.2022
                                                </span>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="ag-courses_item">
                                        <a href="#" class="ag-courses-item_link w-80">
                                            <div class="ag-courses-item_bg"></div>

                                            <div class="ag-courses-item_title">
                                                {courseTitle} ({courseCode})
                                            </div>
                                        </a>
                                    </div>

                                    {/* <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        Front-end development&#160;+ jQuery&#160;+ CMS
                                    </div>
                                </a>
                            </div> */}

                                    {/* <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg">
                                    </div>
                                    <div class="ag-courses-item_title">
                                        Digital Marketing
                                    </div>
                                </a>
                            </div> */}

                                    {/* <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        Interior Design
                                    </div>

                                    <div class="ag-courses-item_date-box">
                                        Start:
                                        <span class="ag-courses-item_date">
                                            31.10.2022
                                        </span>
                                    </div>
                                </a>
                            </div> */}

                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>

                {/* <section className='sectiones'>
                    <h1 class="text-shadow titlessss"> -- {courseTitle} ({courseCode}) -- </h1>
                </section> */}
                {/* <h1 className='text-center'> {courseTitle} ({courseCode})</h1> */}
                {/* <h1>{semester}-({year})</h1> */}
                {/* <h1 className=' ml-16 mt-12 chapterTitle'>ALL CHAPTER</h1> */}
                <div className='grid grid-cols-4 gap-4'>
                    {
                        newArray.map(springChapter => <SpringCoursesChapterCard
                            key={springChapter._id}
                            springChapter={springChapter}
                        ></SpringCoursesChapterCard>)
                    }

                </div>

                {/* <div>
                    <Link to={`/spring/1,2/${_id}`}> <button className='btn'>1,2</button ></Link>
                    <button className='btn'>1,2,3</button>
                </div> */}
            </div>

        </div >
    );
};

export default SpringCoursesChapter;