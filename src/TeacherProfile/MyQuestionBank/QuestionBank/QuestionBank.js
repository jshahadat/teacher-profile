import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const QuestionBank = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>MY QUESTION BANK</h1>
            </div>
            <div className='flex justify-center justify-items-center mx-auto'>
                <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-4 '>


                </div>
            </div>








            <div className='flex items-center justify-around'>
                <NavLink to="/quizquestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">QUIZ</h2>
                        </div>
                    </div>
                </NavLink>


                <NavLink to="/midquestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>

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
                </NavLink>

            </div>



            {/* <form className='mt-10'>

                                    <div className='my-3'>
                                        <label htmlFor="email">Email Number</label> <br />
                                        <input className='mt-1 w-full py-1 borderInputCustom rounded px-2 outline-none' name='email' type="text" />
                                    </div>
                                    <div className='my-3'>
                                        <label htmlFor="Password">Password</label> <br />
                                        <input className='mt-1  w-full  py-1 borderInputCustom rounded px-2 outline-none' name='Password' type="password" />
                                    </div>


                                    <div className="mt-6">
                                        <div className='text-center flex justify-between'>
                                            <div className='pt-7'>
                                                <Link className='text-primaryColor text-md'>Forgot password</Link>
                                            </div>

                                            <div>
                                                <button className='bg-primaryColor px-4 rounded py-1 mt-6 text-center text-white font-semibold ' type="submit">Login</button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex bg-bgColor items-center mt-10 p-1'>
                                        <NavLink to="/register" className='text-primaryColor mx-auto text-lg   text-center'>Register Now</NavLink>
                                    </div>



                                </form> */}

















        </div>
    );
};

export default QuestionBank;