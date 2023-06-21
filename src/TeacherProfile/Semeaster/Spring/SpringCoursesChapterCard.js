import React from 'react';
import { Link } from 'react-router-dom';

const SpringCoursesChapterCard = ({ springChapter }) => {
    return (
        <div>

            <Link to={`/springchapquestion/${springChapter._id}`}>
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

                        <div class="ag-courses_item hidden">
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

                        <div class="ag-courses_item hidden">
                            <a href="#" class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    {/* {courseTitle} ({courseCode}) */}
                                </div>
                            </a>
                        </div>

                        <div class="ag-courses_item">
                            <a href="#" class="ag-courses-item_link w-80 h-28">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    <h1 className=' text-xl'>({springChapter.chapterNo}) {springChapter.chapterName}</h1>
                                    {/* <h3 className='text-white'>{springChapter.chapterName}</h3> */}
                                </div>
                            </a>
                        </div>

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
            </Link>

            {/* <div class="container">
                <div class="sheet">
                    <div class="face face1">
                        <div class="content">
                            <img alt='' className='w-20 mx-auto' src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                            <h3 className='text-white text-sm'>Chapter No: {springChapter.chapterNo}</h3>
                            <h3 className='text-white'>{springChapter.chapterName}</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <Link to={`/chapquestion/${springChapter._id}`}>Details</Link>
                        </div>
                    </div>
                </div>

            </div> */}

        </div>
    );
};

export default SpringCoursesChapterCard;