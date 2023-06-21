import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SpringCoursesChapterQuestionsCard from './SpringCoursesChapterQuestionsCard';
import { useReactToPrint } from 'react-to-print';

const SpringCoursesChapterQuestions = () => {
    const { courseTitle, courseCode, chapCode, displayName, chapterNo } = useLoaderData();
    console.log(chapCode, courseTitle, courseCode, displayName, chapterNo);

    const { user } = useContext(AuthContext);
    const [springCoursesQuestions, setSpringCoursesQuestion] = useState([]);

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }


    const randomValue = randomArrayValue(springCoursesQuestions);


    const chapterQuestionRandomQuestions = randomArrayValue(springCoursesQuestions, 3);
    // console.log(allChapters);

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/questionemail?chapCode=${chapCode}&&email=${user?.email}`, {

        })
            .then(res => res.json())
            .then(data => setSpringCoursesQuestion(data))
    }, [chapCode && user?.email])


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const handleClick = () => {
        window.location.reload();
    }


    return (
        <div>
            <div className=''>
                <div className='w-1/2 mx-auto mt-20'>
                    <div className='flex'>
                        <h1>Name:____________________________</h1>
                        <h1 className='ml-6'>Id:___________________</h1>
                        <h1 className='ml-6'>Date:____________</h1>
                    </div>
                    <div className='ml-12 mt-16'>
                        {
                            chapterQuestionRandomQuestions.map((springCoursesQuestion, i) => <SpringCoursesChapterQuestionsCard
                                key={springCoursesQuestion._id}
                                springCoursesQuestion={springCoursesQuestion}
                                i={i}
                            ></SpringCoursesChapterQuestionsCard>)
                        }
                    </div>


                </div>
            </div>
            <div className='hidden'>
                <div ref={componentRef} className='ml-6 mt-20'>
                    <div className='flex'>
                        <h1>Name:____________________________</h1>
                        <h1 className='ml-6'>Id:___________________</h1>
                        <h1 className='ml-6'>Date:____________</h1>
                    </div>
                    <div className='ml-12 mt-16'>
                        {
                            chapterQuestionRandomQuestions.map((springCoursesQuestion, i) => <SpringCoursesChapterQuestionsCard
                                key={springCoursesQuestion._id}
                                springCoursesQuestion={springCoursesQuestion}
                                i={i}
                            ></SpringCoursesChapterQuestionsCard>)
                        }
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
    );
};

export default SpringCoursesChapterQuestions;