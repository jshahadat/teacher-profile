import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import PresentationCourse from './PresentationCourse';

const PresentationCourses = () => {
    const { user } = useContext(AuthContext);

    const [presentationCourses, setPresentationCourses] = useState()
    // console.log(syllabusCourse.length);

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/presentationcourses?email=${user?.email}`, {

        })
            .then(res => res.json())
            .then(data => setPresentationCourses(data))
    }, [user?.email])

    return (
        <div className='back_ani' style={{ height: "100vh" }}>
            <h1 className='cour text-center'>"GET <span className='spaOne text-indigo-600'>PRESENTATION</span> <span className='spaTwo '>TOPICS"</span></h1>

            <div className="grid grid-cols-3 gap-4">
                {
                    presentationCourses?.map(presentationCourse => <PresentationCourse
                        key={presentationCourse._id}
                        presentationCourse={presentationCourse}
                    ></PresentationCourse>)
                }
            </div>
        </div>
    );
}

export default PresentationCourses;