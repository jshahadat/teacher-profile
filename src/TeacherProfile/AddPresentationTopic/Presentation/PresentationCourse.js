import React from 'react';
import { Link } from 'react-router-dom';
import './Presentation.css'

const PresentationCourse = ({ presentationCourse }) => {
    return (
        <div>
            <div class="courses-container">
                <div class="presentationCourse">
                    <div class="presentationCourse-preview">
                        <h6>Course</h6>
                        <h2>{presentationCourse.courseTitle}</h2>
                    </div>
                    <div class="presentationCourse-info">
                        <div class="presentationProgress-container">
                            <div class="presentationProgress"></div>
                            <span class="presentationProgress-text">
                            </span>
                        </div>
                        <h6>{presentationCourse.courseCode}</h6>
                        <h2>{presentationCourse.courseTitle}</h2>
                        <Link class="presentationBtnones" to={`/prsentationcourse/${presentationCourse._id}`}>  <button>Get Presentation Topics</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PresentationCourse;