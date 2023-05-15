import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ChapterTwo from '../Chpters/chapterTwo/ChapterTwo';

const SpringMidChapterTwo = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const handleClick = () => {
        window.location.reload();
    }
    return (
        <div>
            <div>
                <div className=' m-auto mb-24 mt-6' style={{ width: "50vw" }}>
                    <div className=' text-center'>
                        <img className='w-24 ml-80' src="https://i.ibb.co/VvPV0dV/diuLogo.png" alt="" />
                        <h1 className=' text-4xl font-bold'>Daffodil International University</h1>
                        <h2 className='text-xl  font-semibold'>Department of Computer Science and Engineering</h2>
                        <h3 className=' font-medium'>Faculty of Science and Information Technology</h3>
                        <h4 className=' font-medium'>Mid Term, Semester: Spring-2023</h4>
                        <div className='flex justify-between justify-items-center'>
                            <h2 className=' font-bold'>Course Code: CSE-321 (Day)</h2>
                            <h2 className=' font-bold'>Course Title: Computer Network</h2>
                        </div>
                    </div>
                    <div className='flex justify-between justify-items-center'>
                        <h1 className=' font-bold'>Total Marks: 25</h1>
                        <h1 className=' font-bold'>Time: 2 Hours</h1>

                    </div>
                    <div>
                        <h1 className='text-center text-lg font-bold mt-3'>Answer all of the following questions. Figures in the right-hand margin indicate full marks.</h1>
                    </div>
                    <div >
                        <div>
                            <ChapterTwo></ChapterTwo>
                        </div>
                    </div>
                </div>
                <div className='hidden'>
                    <div ref={componentRef} >
                        <div className=' m-auto mb-24 mt-6' >
                            <div className=' text-center'>
                                <img className='w-24' style={{ marginLeft: "350px" }} src="https://i.ibb.co/VvPV0dV/diuLogo.png" alt="" />
                                <h1 className=' text-4xl font-bold'>Daffodil International University</h1>
                                <h2 className='text-xl  font-semibold'>Department of Computer Science and Engineering</h2>
                                <h3 className=' font-medium'>Faculty of Science and Information Technology</h3>
                                <h4 className=' font-medium'>Mid Term, Semester: Spring-2022</h4>
                                <div className='flex justify-between justify-items-center m-10'>
                                    <h2 className=' font-bold'>Course Code: CSE 313 (Day)</h2>
                                    <h2 className=' font-bold'>Course Title: Computer Network</h2>
                                </div>
                            </div>
                            <div className='flex justify-between justify-items-center ml-10 mr-10 mb-10'>
                                <h1 className=' font-bold'>Total Marks: 25</h1>
                                <h1 className=' font-bold'>Time: 2 Hours</h1>

                            </div>
                            <div>
                                <h1 className='text-center text-lg font-semibold mt-3'>Answer all of the following questions. Figures in the right-hand margin indicate full marks.</h1>
                            </div>
                            <div >
                                <div className='ml-10 mr-10 mt-12'>
                                    <ChapterTwo></ChapterTwo>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' ml-96 mb-20'>
                    <div className=''>
                        <button onClick={handleClick} class=" relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease"> REGENERATE</span>
                            <span class="relative invisible"> REGENERATE</span>
                        </button>
                        <button onClick={handlePrint} class="ml-10 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">PRINT QUESTION</span>
                            <span class="relative invisible">PRINT QUESTION</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpringMidChapterTwo;