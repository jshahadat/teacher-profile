import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SyllabusForm = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const code = form.code.value;
        const season = form.season.value
        const section = form.section.value
        const chapter = form.chapter.value
        const addTodos = {
            email: user?.email,
            name,
            code,
            season,
            section,
            chapter
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
        <div>
            <div className='flex justify-center'>
                <div className="relative w-full max-w-lg mb-12 mt-12" >
                    <div className="absolute lg:top-0 top-0 lg:left-2 left-1 lg:w-72 w-72 lg:h-72 h-60  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" ></div >
                    <div className="absolute lg:top-0 lg:left-72 left-12 w-72  lg:h-72 h-60 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" ></div >
                    <div className="absolute lg:-bottom-8 lg:left-40 top-56 left-20 w-72 lg:h-72 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" ></div >
                    <div className="relative space-y-2" >
                        <div>
                            <form onSubmit={handleSubmit}>
                                <section className="flex lg:mr-10  ml-5 mr-5 lg:ml-10 justify-center">
                                    <div className=" flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">
                                        <div className='flex justify-center'>
                                            <div className="">
                                                <h2 className="font-bold text-2xl text-[#002D74] mb-4">Add Your Syllabus</h2>
                                                <div>
                                                    <div className='lg:flex'>
                                                        <div className=' pb-6 lg:mr-6'>
                                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="name"
                                                                placeholder="Course Title" required />
                                                        </div>
                                                        <div className=' pb-6 lg:mr-6'>
                                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="code"
                                                                placeholder="Course Code" required />
                                                        </div>
                                                    </div>
                                                    <div className='lg:flex'>
                                                        <div className=' pb-6 lg:mr-6'>
                                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="season"
                                                                placeholder="Season" required />
                                                        </div>
                                                        <div className=' pb-6 lg:mr-6'>
                                                            <input className="p-2 lg:w-64  w-80  rounded-xl border" type="text" name="section"
                                                                placeholder="Section" required />
                                                        </div>
                                                    </div>
                                                    <div className=' pb-6 lg:mr-6'>
                                                        <input className="p-2 lg:w-full lg:h-24  w-80  rounded-xl border" type="text" name="chapter"
                                                            placeholder="Chapter" required />
                                                    </div>

                                                </div>
                                                {/* <div className="mb-4 relative w-28 h-12 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                                    <div className=' w-28 h-28  bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute'>
                                                        <input className='w-28 h-28 btn btn-outline bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute' type="submit" value="Add" />
                                                    </div>
                                                    <div>
                                                    </div>
                                                </div > */}
                                                <div className=' pb-6 lg:mr-6'>
                                                    <select id="country" name="country">
                                                        <option value="australia">Australia</option>
                                                        <option value="canada">Canada</option>
                                                        <option value="usa">USA</option>
                                                    </select>

                                                </div>
                                                <div className='text-center'>
                                                    <input className='btn btn-primary text-center' type="submit" value="Add" />
                                                </div>
                                            </div >
                                        </div >
                                    </div >
                                </section >
                            </form >
                        </div >
                    </div >
                    {/* <Toaster /> */}
                </div >
            </div>

        </div>
    );
};

export default SyllabusForm;