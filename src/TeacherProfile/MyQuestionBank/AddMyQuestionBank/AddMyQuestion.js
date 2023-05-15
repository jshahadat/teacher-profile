import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SideNavbar from '../../../pages/Sheared/Navbar/SideNavbar/SideNavbar';
import { toast } from 'react-hot-toast';

const AddMyQuestion = () => {


    const { user } = useContext(AuthContext);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddDoctor = data => {
        // data.preventDefault();
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        // if (imgData.success) {
        const product = {
            displayName: data?.name,
            // productName: data.name,
            email: user?.email,
            resaleprice: data.resaleprice,
            originalPrice: data.originalPrice,
            condition: data.condition,
            semester: data.semester,
            year: data.year,
            department: data.department,
            question: data.question,
            chapterNo: data.chapterNo,
            chapterName: data.chapterName,
            courseCode: data.courseCode,
            chapCode: data.chapterNo + data.courseCode + data.semester,
            number: "5"
            // img: imgData.data.url,
            // purchase: data.purchase,
            // location: data.location,
            // description: data.description,
            // status: "available",
            // pdf: data.file
        }

        fetch('https://assignment-twelfth-server.vercel.app/addquestion', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`is added successfully`);
                // navigate('/viewprofile')
            })
    }
    // })
    // }


    return (
        <div className='back_ani' style={{ height: "100vh" }}>
            <div className='flex'>
                <div className='w-full'>
                    <div className='flex justify-center'>
                        <div className="relative w-full max-w-lg mb-12 mt-12" >
                            <div className="absolute lg:top-0 top-0 lg:left-2 left-1 lg:w-72 w-72 lg:h-72 h-60  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" ></div >
                            <div className="absolute lg:top-0 lg:left-72 left-12 w-72  lg:h-72 h-60 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" ></div >
                            <div className="absolute lg:-bottom-8 lg:left-40 top-56 left-20 w-72 lg:h-72 h-60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" ></div >
                            <div className="relative space-y-2" >
                                <div>




                                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                                        <section className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">

                                            <div class="-mx-3 md:flex mb-6">
                                                {/* <div className="md:w-full px-3">
                                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Upadate Your Question</span></label>
                                            <input type="file" {...register("image", {
                                                required: "Photo is Required"
                                            })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                            {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                        </div> */}
                                                <div className="md:w-full px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Update Your Question</span></label>
                                                    <input type="text" {...register("question", {
                                                        required: "Photo is Required"
                                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                                    {errors.question && <p className='text-red-500'>{errors.question.message}</p>}
                                                </div>


                                            </div>


                                            <div className='-mx-3 md:flex mb-6'>

                                                {/* <div className="">
                                            <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text border-none">Course Title</span></label>
                                            <input type="text"  {...register("name", {
                                                required: "Course Title is Required"

                                            })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                        </div> */}

                                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Chapter No.</span></label>
                                                    <input type="number" {...register("chapterNo", {
                                                        required: "Chapter No is Required"
                                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                                    {errors.chapterNo && <p className='text-red-500'>{errors.chapterNo.message}</p>}
                                                </div>


                                                <div className="md:w-2/3 px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Chapter Name</span></label>
                                                    <input type="text" {...register("chapterName", {
                                                        required: "chapterName is Required"
                                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                                    {errors.chapterName && <p className='text-red-500'>{errors.chapterName.message}</p>}
                                                </div>

                                            </div>
                                            <div className='-mx-3 md:flex mb-6'>
                                                <div className="md:w-1/3 px-3">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Course Code</span></label>
                                                    <input type="text" {...register("courseCode", {
                                                        required: "Designation is Required"
                                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                                    {errors.courseCode && <p className='text-red-500'>{errors.courseCode.message}</p>}
                                                </div>

                                                <div className="md:w-2/3 px-3 mb-6 md:mb-0">
                                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text border-none">Course Title</span></label>
                                                    <input type="text"  {...register("name", {
                                                        required: "Course Title is Required"

                                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                                </div>




                                            </div>


                                            <div className='-mx-3 md:flex mb-2'>





                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="lauppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Semester</span></label>
                                                    <select
                                                        {...register('semester')}
                                                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded">
                                                        <option>Spring</option>
                                                        <option> Summer</option>
                                                        <option> FAll</option>
                                                    </select>
                                                    {errors.option && <p className='text-red-500'>{errors.option.message}</p>}
                                                </div>



                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="lauppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Year</span></label>
                                                    <select
                                                        {...register('year')}
                                                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded">
                                                        <option>2023</option>
                                                        <option> 2022</option>
                                                        <option> 2021</option>
                                                    </select>
                                                    {errors.option && <p className='text-red-500'>{errors.option.message}</p>}
                                                </div>




                                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                                    <label className="lauppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Department</span></label>
                                                    <select
                                                        {...register('departmenttion')}
                                                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded">
                                                        <option>CSE</option>
                                                        <option> CE</option>
                                                    </select>
                                                    {errors.option && <p className='text-red-500'>{errors.option.message}</p>}
                                                </div>





                                            </div>


                                            {/* <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text">Permanent Adress</span></label>
                                    <input type="text" {...register("location", {
                                        required: "Location is Required"
                                    })} className="input  w-full max-w-xs" />
                                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                                </div>
                               
                                <div className="form-control w-full max-w-xs">
                                    <label className="label"> <span className="label-text"> Description</span></label>
                                    <input type="text" {...register("description", {
                                        required: "description is Required"
                                    })} className="input  w-full max-w-xs" />
                                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                                </div> */}


                                            <input className='btn font-bold text-white btn-primary w-full mt-4' value="Add" type="submit" />
                                        </section>
                                    </form>








                                </div >
                            </div >
                            {/* <Toaster /> */}
                        </div >
                    </div >

                </div >

                <div className=' fixed'>
                    <SideNavbar></SideNavbar>
                </div>
            </div>
        </div>
    );
};

export default AddMyQuestion;