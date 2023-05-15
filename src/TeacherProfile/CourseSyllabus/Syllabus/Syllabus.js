import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNavbar from '../../../pages/Sheared/Navbar/SideNavbar/SideNavbar';
import SyllabusCouress from './SyllabusCouress';
import "./Syllabus.css"
const Syllabus = () => {
    return (
        <div className='back_ani' style={{ height: "100vh" }}>


            <div>

                <h1 className='cour text-center'>"MY <span className='spaOne  '>COURSE</span> <span className='spaTwo text-blue-800'>SYLLABUS"</span></h1>
                {/* <div className='text-center'>
                    <h1>MY COURSE SYLLABUS</h1>
                </div> */}
                <div className='flex justify-center justify-items-center mx-auto'>
                    <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-4 '>


                    </div>
                </div>

                <div>
                    <SyllabusCouress></SyllabusCouress>
                </div>






                {/* <div className='flex  justify-evenly'>
                    <NavLink to="/cse-321" >
                        <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" ard-title text-center">CSE-321</h2>
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to="/midquestion">

                        <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" ard-title text-center">COURSE TITLE(COURSE CODE)</h2>
                                <h1 className=" ard-title text-center">SEMESTER-YEAR</h1>
                            </div>
                        </div>

                    </NavLink>

                    <NavLink to="/finaleexamquestion" >
                        <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                            <figure><img src="https://t3.ftcdn.net/jpg/03/09/59/80/360_F_309598037_FrfMLAfTQrstsVg5SZMaGH1Uef6s69EB.webp" alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" ard-title text-center">COURSE TITLE(COURSE CODE)</h2>
                                <h1 className=" ard-title text-center">SEMESTER-YEAR</h1>
                            </div>
                        </div>
                    </NavLink>

                </div> */}
            </div>




        </div>
    );
};

export default Syllabus;