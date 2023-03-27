import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const QuizQuestion = () => {
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



            <div className='grid lg:grid-cols-3 grid-cols-2 md:grid-cols-2 gap-4 '>

                <Link to="/coursesyllabus">
                    <div className="card bg-base-100 shadow-xl image-full lg:w-64 h-40" >
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title text-center ">SUMMER QUIZ QUESTION</h2>
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            {/* <div className="card-actions justify-center lg:mt-12">

            <Link to="/addsyllabus"><button class="btn btn-primary">ADD SYLLABUS</button></Link>
            <Link to="/findsyllabus"><button class="btn btn-primary">GET SYLLABUS</button></Link>
        </div> */}
                        </div>
                    </div>
                </Link>


                <Link to="/questionbank">
                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">SPRING QUIZ QUESTION</h2>
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            {/* <div className="card-actions justify-center lg:mt-12">

            <Link to="/addquestion"><button class="btn btn-primary">ADD QUESTION</button></Link>
            <Link to="/findsyllabus"><button class="btn btn-primary">GET QUESTION</button></Link>
        </div> */}
                        </div>
                    </div>
                </Link>

                <Link>
                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                        <figure><img src="https://t3.ftcdn.net/jpg/03/09/59/80/360_F_309598037_FrfMLAfTQrstsVg5SZMaGH1Uef6s69EB.webp" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">FINALE QUIZ QUESTION</h2>
                            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                            {/* <div className="card-actions justify-center lg:mt-12">

            <Link to="/addassignment"><button class="btn btn-primary">ADD ASSAIGNMENT</button></Link>
            <Link to="/findsyllabus"><button class="btn btn-primary">GET ASSAIGNMENT</button></Link>
        </div> */}
                        </div>
                    </div>
                </Link>
            </div>

















        </div>
    );
};

export default QuizQuestion;