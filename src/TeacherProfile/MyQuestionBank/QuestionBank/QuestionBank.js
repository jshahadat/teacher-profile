import React from 'react';
import { Link } from 'react-router-dom';
import "./QuestionBank.css"

const QuestionBank = () => {
    return (
        <div className='back_ani' style={{ height: "100vh" }}>

            <h1 className='cour text-center'><span className='spaOne'>QUESTION</span> <span className='spaTwo'>BANK</span></h1>
            <div></div>
            <div className='flex justify-center justify-items-center mx-auto'>
                <div className='grid lg:grid-cols-4 grid-cols-2 md:grid-cols-2 gap-4 '>


                </div>
            </div>
            {/* <div className='flex justify-evenly '>
                <Link to="/generatequestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>

                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center"> GENERATE QUESTION</h2>
                        </div>
                    </div>

                </Link>
                <Link to="/createquestion" className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4'}>

                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center"> CREATE QUESTION</h2>
                        </div>
                    </div>

                </Link>
            </div> */}








            {/* <div className='flex items-center justify-around'>
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

            </div> */}



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









            <div className='flex justify-evenly'>
                <Link to="/generatequestion">

                    <section>
                        <div class="ca_rd" style={{ color: "hsl(357, 100%, 49%)" }}>
                            <div class="card__border"></div>
                            <div class="card__border-line"></div>
                            <div class="card__inner">
                                <div class="card__img">
                                    <div class="img__team">
                                        {/* <img src="https://i.pinimg.com/originals/86/30/83/863083894905bc5140b054917fe597d5.png" alt="Team: Ferrari logo" /> */}
                                    </div>
                                    <div class="img__athlete">
                                        {/* <img src="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png" alt="Charles Leclerc" /> */}
                                    </div>
                                </div>
                                <div class="card__text">
                                    <div class="card__type" style={{ background: " hsl(40, 100%, 50%)" }}>DIU</div>
                                    <h1 class="na_me text-center">GENERATE QUESTION</h1>
                                    {/* <p class="points">36 PTS</p> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </Link>
                <Link to="/createquestion">


                    <section>
                        <div class="ca_rd" style={{ color: "hsl(357, 100%, 49%)" }}>
                            <div class="card__border"></div>
                            <div class="card__border-line"></div>
                            <div class="card__inner">
                                <div class="card__img">
                                    <div class="img__team">
                                        {/* <img src="https://i.pinimg.com/originals/86/30/83/863083894905bc5140b054917fe597d5.png" alt="Team: Ferrari logo" /> */}
                                    </div>
                                    <div class="img__athlete">
                                        {/* <img src="https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png" alt="Charles Leclerc" /> */}
                                    </div>
                                </div>
                                <div class="card__text">
                                    <div class="card__type" style={{ background: " hsl(40, 100%, 50%)" }}>DIU</div>
                                    <h1 class="na_me text-center">CREATE QUESTION</h1>
                                    {/* <p class="points">36 PTS</p> */}
                                </div>
                            </div>
                        </div>
                    </section>
                </Link>
            </div >







        </div >
    );
};

export default QuestionBank;