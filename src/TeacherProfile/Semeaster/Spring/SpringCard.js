import React from 'react';
import { Link } from 'react-router-dom';

const SpringCard = ({ springCourese }) => {
    return (
        <div>


            <Link to={`/spring/${springCourese._id}`}>
                <div class="ag-format-container ">
                    <div class="ag-courses_box">
                        <div class="ag-courses_item hidden">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    QUIZ
                                </div>
                            </div>
                        </div>

                        <div class="ag-courses_item hidden">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    SUMMER
                                </div>
                            </div>
                        </div>

                        <div class="ag-courses_item hidden">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    SPRING
                                </div>
                            </div>
                        </div>

                        <div class="ag-courses_item hidden">
                            <div class="ag-courses-item_link">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title">
                                    FALL
                                </div>
                            </div>
                        </div>

                        <div class="ag-courses_item">
                            <div class="ag-courses-item_link w-80 h-32">
                                <div class="ag-courses-item_bg"></div>

                                <div class="ag-courses-item_title" style={{ fontSize: "20px" }}>
                                    <h1>{springCourese.courseTitle}({springCourese.courseCode})</h1>
                                </div>
                            </div>
                        </div>

                        {/* <div class="ag-courses_item">
                                <div class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title">
                                        Front-end development&#160;+ jQuery&#160;+ CMS
                                    </div>
                                </div>
                            </div> */}

                        {/* <div class="ag-courses_item">
                                <div class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg">
                                    </div>
                                    <div class="ag-courses-item_title">
                                        Digital Marketing
                                    </div>
                                </div>
                            </div> */}

                        {/* <div class="ag-courses_item">
                                <div class="ag-courses-item_link">
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
                                </div>
                            </div> */}

                    </div>
                </div>
            </Link>
            {/* <div>

                <h1>{springCourese.courseCode}</h1>
                <h1>{springCourese.courseTitle}</h1>
                <Link to={`/spring/${springCourese._id}`}><button>Select Course</button></Link>

            </div> */}

        </div>
    );
};

export default SpringCard;