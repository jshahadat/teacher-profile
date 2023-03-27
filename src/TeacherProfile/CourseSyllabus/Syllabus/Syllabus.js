import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNavbar from '../../../pages/Sheared/Navbar/SideNavbar/SideNavbar';

const Syllabus = () => {
    return (
        <div className='flex'>


            <div>
                <div className='text-center'>
                    <h1>MY COURSE SYLLABUS</h1>
                </div>
                <div className='flex justify-center justify-items-center mx-auto'>
                    <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-4 '>


                    </div>
                </div>








                <div className='flex items-center justify-around'>
                    <NavLink to="" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                        <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" ard-title text-center">COURSE TITLE(COURSE CODE)</h2>
                                <h1 className=" ard-title text-center">SEMESTER-YEAR</h1>
                            </div>
                        </div>
                    </NavLink>


                    <NavLink to="/midquestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>

                        <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                            <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" ard-title text-center">COURSE TITLE(COURSE CODE)</h2>
                                <h1 className=" ard-title text-center">SEMESTER-YEAR</h1>
                            </div>
                        </div>

                    </NavLink>

                    <NavLink to="/finaleexamquestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>
                        <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                            <figure><img src="https://t3.ftcdn.net/jpg/03/09/59/80/360_F_309598037_FrfMLAfTQrstsVg5SZMaGH1Uef6s69EB.webp" alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" ard-title text-center">COURSE TITLE(COURSE CODE)</h2>
                                <h1 className=" ard-title text-center">SEMESTER-YEAR</h1>
                            </div>
                        </div>
                    </NavLink>

                </div>
            </div>




        </div>
    );
};

export default Syllabus;