import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpringCard from './SpringCard';
import './Spring.css'

const Spring = () => {
    const [springCourses, setSpringCourses] = useState([])



    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/spring?semeaster=spring", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setSpringCourses(data))
    }, [])
    return (
        <div>


            <div className='flex justify-center'>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                        <div class="ag-format-container">
                            <div class="ag-courses_box">
                                <div class="ag-courses_item">
                                    <a href="#" class="ag-courses-item_link w-80 h-32">
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
                        <div class="ag-format-container">
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
                                    <a href="#" class="ag-courses-item_link w-80 h-32">
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

                                {/* <div class="ag-courses_item">
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
                            </div> */}

                                {/* <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        Motion Design
                                    </div>

                                    <div class="ag-courses-item_date-box">
                                        Start:
                                        <span class="ag-courses-item_date">
                                            30.11.2022
                                        </span>
                                    </div>
                                </a>
                            </div> */}

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



            <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-4'>
                {

                    springCourses.map(springCourese => <SpringCard
                        key={springCourese._id}
                        springCourese={springCourese}
                    ></SpringCard>)
                }


            </div>

        </div>
    );
};

export default Spring;