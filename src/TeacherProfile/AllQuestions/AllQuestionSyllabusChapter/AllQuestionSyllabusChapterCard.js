import React from 'react';
import { Link } from 'react-router-dom';

const AllQuestionSyllabusChapterCard = ({ allChaptersNew }) => {
    return (
        <div>
            <div>

                <div class="container">
                    <div class="sheet">
                        <div class="face face1">
                            <div class="content">
                                <img alt='' className='w-20 mx-auto' src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                                <h3 className='text-white text-sm'>Chapter No: {allChaptersNew.chapterNo}</h3>
                                <h3 className='text-white'>{allChaptersNew.chapterName}</h3>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p> */}
                                <Link to={`/allquestionchapquestion/${allChaptersNew._id}`}>Details</Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AllQuestionSyllabusChapterCard;