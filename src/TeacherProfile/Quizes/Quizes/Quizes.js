import React from 'react';
import "./Quizes.css"
import { Link } from 'react-router-dom';

const Quizes = () => {
    return (
        <div className='flex justify-center mt-20'>
            <Link to="/generatequizquestion" >

                <div class="quiz_card">
                    <h4 className='text-center my-12 font-bold text-xl'>GENERSTE QUIZ QUESTION</h4>
                </div>
            </Link>
            <Link to="/addquizquestion">

                <div class="quiz_card">
                    <h4 className='text-center my-12 font-bold text-xl'>ADD QUIZ QUESTION</h4>
                </div>
            </Link>


        </div>
    );
};

export default Quizes;