import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import AssignmentCourse from './AssignmentCourse';

const AssignmentCourses = () => {
    const { user } = useContext(AuthContext);

    const [assigbnmentCourses, setAssigbmentCourses] = useState()
    // console.log(syllabusCourse.length);

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/assigncourses?email=${user?.email}`, {

        })
            .then(res => res.json())
            .then(data => setAssigbmentCourses(data))
    }, [user?.email])

    return (

        <div className='back_ani' style={{ height: "100vh" }}>
            <h1 className='cour text-center'>"GET <span className='spaOne text-red-600'>ASSIGNMENT</span> <span className='spaTwo '>TOPICS"</span></h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    assigbnmentCourses?.map(assigbnmentCourse => <AssignmentCourse
                        key={assigbnmentCourse._id}
                        assigbnmentCourse={assigbnmentCourse}
                    ></AssignmentCourse>)
                }
            </div>
        </div>
    );
}

export default AssignmentCourses;