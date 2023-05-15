import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SyllabusCourse from './SyllabusCourse';

const SyllabusCouress = () => {
    const { user } = useContext(AuthContext);

    const [syllabusCourse, setSyllabusCourse] = useState()
    // console.log(syllabusCourse.length);

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/mycourses?email=${user.email}`, {

        })
            .then(res => res.json())
            .then(data => setSyllabusCourse(data))
    }, [user.email])

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                syllabusCourse?.map(syllabusCours => <SyllabusCourse
                    key={syllabusCours._id}
                    syllabusCours={syllabusCours}
                ></SyllabusCourse>)
            }
        </div>
    );
}

export default SyllabusCouress;

