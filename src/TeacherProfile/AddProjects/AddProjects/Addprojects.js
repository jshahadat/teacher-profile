import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SideNavbar from '../../../pages/Sheared/Navbar/SideNavbar/SideNavbar';

const Addprojects = () => {

    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const courseTitle = form.courseTitle.value;
        const courseCode = form.courseCode.value;
        const semeaster = form.semeaster.value
        const year = form.year.value
        const department = form.department.value
        const projectIdea = form.projectIdea.value

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
            projectIdea

            // season,
            // section,
            // chapter,
        }
        fetch('https://assignment-twelfth-server.vercel.app/product', {
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
                    form.reset();
                    window.location.reload()
                }
            })
            .catch(er => console.error(er));
    }

    return (
        <div className='flex'>
            <div className='w-full'>
                <div>
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






                                                {/* <div className=' pb-6 lg:mr-6'>
                                                <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="section"
                                                    placeholder="Section" required />
                                            </div> */}

                                            </div>

                                            {/* <div className=' pb-6 lg:mr-6'>
                                            <input className="p-2 lg:w-full lg:h-24  w-80  rounded-xl border" type="text" name="chapter"
                                                placeholder="Chapter" required />
                                        </div> */}
                                            <div className='-mx-3 md:flex mb-6'>

                                                <div className='md:w-full  px-3'>
                                                    <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                                        Project Idea*
                                                    </label>
                                                    <input className="w-full h-36 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" name="projectIdea"
                                                        placeholder="Project Idea" required />
                                                </div>
                                            </div>






                                            <div className='text-center'>
                                                <input className='btn btn-primary text-center w-full' type="submit" value="Add Project Idea" />
                                            </div>



                                        </section >
                                    </form >





                                    {/* <form>
                                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                                    <div class="-mx-3 md:flex mb-6">

                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2"htmlFor="company">
                                                Company Name*
                                            </label>
                                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Tutsplus">
                                                <div>
                                                    <span class="text-red-500 text-xs italic">
                                                        Please fill out this field.
                                                    </span>
                                                </div>
                                        </div>

                                        <div class="md:w-1/2 px-3">
                                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2"htmlFor="title">
                                                Title*
                                            </label>
                                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Software Engineer">
                                        </div>

                                    </div>

                                    <div class="-mx-3 md:flex mb-6">
                                        <div class="md:w-full px-3">
                                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2"htmlFor="application-link">
                                                Application Link*
                                            </label>
                                            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://....">
                                        </div>
                                    </div>

                                    <div class="-mx-3 md:flex mb-2">

                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2"htmlFor="location">
                                                Location*
                                            </label>
                                            <div>
                                                <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                                    <option>Abuja</option>
                                                    <option>Enugu</option>
                                                    <option>Lagos</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="md:w-1/2 px-3">
                                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2"htmlFor="job-type">
                                                Job Type*
                                            </label>
                                            <div>
                                                <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                                                    <option>Full-Time</option>
                                                    <option>Part-Time</option>
                                                    <option>Internship</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="md:w-1/2 px-3">
                                            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2"htmlFor="department">
                                                Department*
                                            </label>
                                            <div>
                                                <select class="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                                                    <option>Engineering</option>
                                                    <option>Design</option>
                                                    <option>Customer Support</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="-mx-3 md:flex mt-2">
                                        <div class="md:w-full px-3">
                                            <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                                Button
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </form> */}













                                </div >
                            </div >
                            {/* <Toaster /> */}
                        </div >
                    </div >

                </div >
            </div >
            <div className=' fixed'>
                <SideNavbar></SideNavbar>
            </div>
        </div >
    );
};

export default Addprojects;