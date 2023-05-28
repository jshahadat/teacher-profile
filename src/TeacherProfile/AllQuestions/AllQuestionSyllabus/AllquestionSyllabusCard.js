import React from 'react';
import { Link } from 'react-router-dom';

const AllquestionSyllabusCard = ({ allsSyllabusChapterCard }) => {
    return (
        <div>
            <div class="courses-container">
                <div class="course">
                    <div class="course-preview">
                        <h6>Course</h6>
                        <h2>{allsSyllabusChapterCard.courseTitle}</h2>
                    </div>
                    <div class="course-info">
                        <div class="progress-container">
                            <div class="progress"></div>
                            <span class="progress-text">
                                {/* 6/9 Challenges */}
                            </span>
                        </div>
                        <h6>{allsSyllabusChapterCard.courseCode}</h6>
                        <h2>{allsSyllabusChapterCard.courseTitle}</h2>
                        <Link class="btnones" to={`/allquestionchapter/${allsSyllabusChapterCard._id}`}>  <button>View all chapters </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllquestionSyllabusCard;