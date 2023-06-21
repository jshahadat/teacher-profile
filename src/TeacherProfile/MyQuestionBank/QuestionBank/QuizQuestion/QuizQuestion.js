import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const QuizQuestion = () => {
    return (
        <div className='back_ani pt-12' style={{ height: "88vh" }}>
            <div className='text-center'>
                {/* <h1>MY QUESTION BANK</h1> */}
            </div>
            <div className='flex justify-center justify-items-center mx-auto'>
                <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-4 '>


                </div>
            </div>

            <div className=''>
                <div className='w-1/3 mx-auto'>
                    <NavLink className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                        <div class="ag-format-container ml-20">
                            <div class="ag-courses_box ml-16">
                                <div class="ag-courses_item mx-auto">
                                    <a href="#" class="ag-courses-item_link w-80">
                                        <div class="ag-courses-item_bg"></div>

                                        <div class="ag-courses-item_title">
                                            QUIZ
                                        </div>
                                    </a>
                                </div>

                                {/* <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                UX/UI Web-Design&#160;+ Mobile Design
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
                        <a href="#" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Annual package "Product+UX/UI+Graph designer&#160;2022"
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
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                Front-end development&#160;+ jQuery&#160;+ CMS
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
                        <a href="#" class="ag-courses-item_link">
                            <div class="ag-courses-item_bg">
                            </div>
                            <div class="ag-courses-item_title">
                                Digital Marketing
                            </div>
                        </a>
                    </div>

                    <div class="ag-courses_item">
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


                {/* <NavLink to="/midquestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>

                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center"> MID</h2>
                        </div>
                    </div>

                </NavLink>

                <NavLink to="/finaleexamquestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>
                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                        <figure><img src="https://t3.ftcdn.net/jpg/03/09/59/80/360_F_309598037_FrfMLAfTQrstsVg5SZMaGH1Uef6s69EB.webp" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">FINALE</h2>
                        </div>
                    </div>
                </NavLink> */}

            </div>



            <div className='flex justify-center'>
                <div style={{ position: "absolute", top: "179px", right: "938px" }}>
                    <img className='w-48' src="https://i.ibb.co/VpZjJTZ/se-removebg-preview.png" alt="" />
                </div>
                <div style={{ position: "absolute", top: "163px", left: "905px" }}>
                    <img className='w-48' src="https://i.ibb.co/0nrt5cQ/local-beauty-1-removebg-preview.png" alt="" />
                </div>


                <Link className='mr-52' to="/spring">
                    <div class="ag-format-container">
                        <div class="ag-courses_box">
                            <div class="ag-courses_item hidden">
                            </div>
                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link w-80">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title text-center">
                                        SPRING
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </Link>

                <Link>
                    <div class="ag-format-container">
                        <div class="ag-courses_box">
                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item hidden">
                            </div>

                            <div class="ag-courses_item">
                                <a href="#" class="ag-courses-item_link w-80">
                                    <div class="ag-courses-item_bg"></div>

                                    <div class="ag-courses-item_title text-center my-12">
                                        FALL
                                    </div>
                                </a>
                            </div>

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
                </Link>
            </div>

















        </div>
    );
};

export default QuizQuestion;