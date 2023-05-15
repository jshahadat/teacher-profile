import React from 'react';
import { Link } from 'react-router-dom';
import './Assignment.css'

const AssignmentCourse = ({ assigbnmentCourse }) => {
    return (
        <div>
            <div class="assignmentCourses-container">
                <div class="assignment_course">
                    <div class="assignmentCourse-preview">
                        <h6>Course</h6>
                        <h2>{assigbnmentCourse.courseTitle}</h2>
                    </div>
                    <div class="assignmentCourse-info">
                        <div class="assignmentProgress-container">
                            <div class="assignmentProgress"></div>
                            <span class="assignmentProgress-text">
                                {/* 6/9 Challenges */}
                            </span>
                        </div>
                        <h6>{assigbnmentCourse.courseCode}</h6>
                        <h2>{assigbnmentCourse.courseTitle}</h2>
                        <Link class="assignmentBtnones" to={`/assigncourse/${assigbnmentCourse._id}`}>  <button>Get Assignment Topics</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AssignmentCourse;