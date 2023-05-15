import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PresentationTopic from './PresentationTopic';

const PresentationTopics = () => {
    const handleClick = () => {
        window.location.reload();
    }

    const { courseCode, courseTitle } = useLoaderData();
    console.log(courseCode);
    const [presentationTopics, setPresentationTopics] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    const randomPresentationTopics = randomArrayValue(presentationTopics, 5);
    // console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/presentationtopics?courseCode=${courseCode}`, {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setPresentationTopics(data))
    }, [])
    return (
        <div className='diu'>
            <section className='sectiones'>
                <h1 class="text-shadow titlessss"> -- {courseTitle} ({courseCode}) -- </h1>
                <div class="tags">
                    <p class="text-shadow text-3xl text-black">Presentation Topics</p>
                </div>
            </section>

            <div className='w-80 mx-auto mt-12'>
                {

                    randomPresentationTopics.map((randomPresentationTopic, i) => <PresentationTopic
                        key={randomPresentationTopic._id}
                        randomPresentationTopic={randomPresentationTopic}
                        i={i}
                    ></PresentationTopic>)
                }

            </div>
            <div className=' text-center mt-12 '>
                <button onClick={handleClick} class=" relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:translate-x-0 ease">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease"> REGENERATE</span>
                    <span class="relative invisible"> REGENERATE</span>
                </button>
            </div>

        </div>
    );
};

export default PresentationTopics;