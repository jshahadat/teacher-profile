import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SideNavbar from '../../../pages/Sheared/Navbar/SideNavbar/SideNavbar';

const AddPresentation = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const courseTitle = form.courseTitle.value;
        const courseCode = form.courseCode.value;
        const semeaster = form.semeaster.value
        const year = form.year.value
        const department = form.department.value
        const presentationTopic = form.presentationTopic.value

        // const season = form.season.value
        // const section = form.section.value
        // const chapter = form.chapter.value
        const addTodos = {
            email: user?.email,
            courseTitle,
            courseCode,
            semeaster,
            year,
            department,
            presentationTopic
        }
        fetch('https://assignment-twelfth-server.vercel.app/addpresentation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(addTodos)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    // toast('Your ToDo Add successfully')
                    // form.reset();
                    // window.location.reload()
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div className='back_ani' style={{ height: "100vh" }}>
            <div className='flex '>
                <div className='w-full'>
                    <div className='flex justify-center'>
                        <div className="relative w-full max-w-lg mb-12 mt-12" >
                            <div className="absolute lg:top-0 top-0 lg:left-2 left-1 lg:w-72 w-72 lg:h-72 h-60  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" ></div >
                            <div className="absolute lg:top-0 lg:left-72 left-12 w-72  lg:h-72 h-60 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" ></div >
                            <div className="absolute lg:-bottom-8 lg:left-40 top-56 left-20 w-72 lg:h-72 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" ></div >
                            <div className="relative space-y-2" >
                                <div>
                                    <form onSubmit={handleSubmit}>

                                        <section className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">


                                            {/* <h2 className="font-bold text-2xl text-[#002D74] mb-4">Add Your Syllabus</h2> */}


                                            <div className='-mx-3 md:flex mb-6'>

                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                                                        Course Title*
                                                    </label>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" name="courseTitle"
                                                        placeholder="Course Title" required />
                                                </div>


                                                <div className=' md:w-1/2 px-3'>
                                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="title">
                                                        Course Code*
                                                    </label>
                                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" name="courseCode"
                                                        placeholder="Course Code" required />
                                                </div>
                                            </div>

                                            <div class="-mx-3 md:flex mb-2">

                                                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                                        Semester*
                                                    </label>
                                                    <div>
                                                        <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location " name='semeaster'>
                                                            <option value="spring">Spring</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="fall">Fall</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="md:w-1/2 px-3">
                                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
                                                        Year*
                                                    </label>
                                                    <div>
                                                        <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" name='year' id="job-type">
                                                            <option value="2023">2023</option>
                                                            <option value="2022">2022</option>
                                                            <option value="2021">2021</option>
                                                        </select>
                                                    </div>
                                                </div>


                                                <div class="md:w-1/2 px-3">
                                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
                                                        Department*
                                                    </label>
                                                    <div>
                                                        <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department" name='department'>
                                                            <option value="engineering">Engineering</option>
                                                            <option value="design">Design</option>
                                                            <option value="BBA">BBA</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className='-mx-3 md:flex mb-6'>

                                                <div className='md:w-full  px-3'>
                                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                                        ADD PRESENTATION TOPIC*
                                                    </label>
                                                    <input className="w-full h-36 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" name="presentationTopic"
                                                        placeholder=" ADD PRESENTATION TOPIC" required />
                                                </div>
                                            </div>

                                            <div className='text-center'>
                                                <input className='btn btn-primary text-center w-full' type="submit" value="Add Presentation Topic" />
                                            </div>
                                        </section >
                                    </form >
                                </div >
                            </div >
                            {/* <Toaster /> */}
                        </div >
                    </div >

                </div >
                <div className=' fixed'>
                    <SideNavbar></SideNavbar>
                </div>
            </div >
        </div>
    );
};

export default AddPresentation;