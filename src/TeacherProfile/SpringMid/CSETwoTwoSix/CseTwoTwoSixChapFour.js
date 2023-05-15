import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import CseTwoTwoSixChapFourQuestion from './CseTwoTwoSixChapFourQuestion';

const CseTwoTwoSixChapFour = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const handleClick = () => {
        window.location.reload();
    }


    const [chapterFours, setChapterFours] = useState([])

    function randomArrayValue(arr, count = 1) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    const chapterFourRandomQuestions = randomArrayValue(chapterFours, 5);
    // console.log(chapterOneRandomQuestions);


    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/twotwosixchapterfour?chapCode=4CSE-226Spring", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setChapterFours(data))
    }, [])
    return (
        <div>

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
                                <h2 className=' font-bold'>Course Code: CSE-226 (Day)</h2>
                                <h2 className=' font-bold'>Course Title: Numerical Methods</h2>
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


                                <div>
                                    {

                                        chapterFourRandomQuestions.map(chapterFourQuestion => <CseTwoTwoSixChapFourQuestion
                                            key={chapterFourQuestion._id}
                                            chapterFourQuestion={chapterFourQuestion}
                                        ></CseTwoTwoSixChapFourQuestion>)
                                    }

                                </div>

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
                                        <div>
                                            {

                                                chapterFourRandomQuestions.map(chapterFourQuestion => <CseTwoTwoSixChapFourQuestion
                                                    key={chapterFourQuestion._id}
                                                    chapterFourQuestion={chapterFourQuestion}
                                                ></CseTwoTwoSixChapFourQuestion>)
                                            }

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' ml-96 mb-20'>
                        <div className=''>
                            <button className='btn' onClick={handleClick}>
                                REGENERATE
                            </button>
                            <button onClick={handlePrint} className="btn ml-10">  Print question </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default CseTwoTwoSixChapFour;