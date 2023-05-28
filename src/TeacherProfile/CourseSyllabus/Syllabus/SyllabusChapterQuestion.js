import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionSyllabus from './QuestionSyllabus';
import "./Syllabus.css"
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SyllabusChapterQuestion = () => {
    const { courseTitle, courseCode, chapCode, displayName, chapterNo } = useLoaderData();
    console.log(chapCode, courseTitle, courseCode, displayName, chapterNo);

    const { user } = useContext(AuthContext);
    const [chaptersQuestion, setChaptersQuestion] = useState([])
    // console.log(allChapters);

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/questionemail?chapCode=${chapCode}&&email=${user?.email}`, {

        })
            .then(res => res.json())
            .then(data => setChaptersQuestion(data))
    }, [chapCode && user?.email])


    return (
        <div>

            <div className='dius'>
                <section className='sectiones'>
                    <h1 class="text-shadow titlessss"> -- {displayName} ({courseCode}) -- </h1>
                    <div class="tags">
                        <p class="text-shadow"><small>{displayName} ({courseCode})</small></p>
                    </div>
                </section>
            </div>

            <div className='diu'>
                <section className='sectiones mt-6'>
                    <h1 class="text-shadow titlessss"> Chapter No:<span className=' text-orange-300 text-5xl'>{chapterNo} </span> Related Question</h1>

                </section>
                <div className='mx-auto mt-12 '>
                    <div className=' w-64 mx-auto '>
                        {
                            chaptersQuestion?.map((questions, i) => <QuestionSyllabus
                                key={questions._id}
                                questions={questions}
                                i={i}
                            ></QuestionSyllabus>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyllabusChapterQuestion;