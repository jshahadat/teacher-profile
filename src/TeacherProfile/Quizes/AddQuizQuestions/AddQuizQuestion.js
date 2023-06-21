import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddQuizQuestion = () => {



    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
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
                        img: imgData.data.url,
                        chapterNo: data.chapterNo,
                        chapterName: data.chapterName,
                        courseCode: data.courseCode,
                        chapCode: data.chapterNo + data.courseCode + data.semester,
                        number: "5",


                    }

                    fetch('https://assignment-twelfth-server.vercel.app/product', {
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
                            // toast.success(`${data.name} is added successfully`);

                            // navigate('/dashboard/myproducts')
                        })
                }
            })
    }


    return (
        <div>
            {/* Open the modal using ID.showModal() method */}

            <div className='p-7 flex flex-col justify-center items-center bg-gray-100 '>
                <h2 className="text-4xl mb-5">Add Quiz Question</h2>
                <div className='relative space-y-2'>
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        <section className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
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
                            <div className='-mx-3 md:flex mb-6'>
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
                            <div class="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Update Your Question</span></label>
                                    <input type="text" {...register("question", {
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.question && <p className='text-red-500'>{errors.question.message}</p>}
                                </div>
                            </div>
                            <div className='-mx-3 md:flex mb-6'>
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">OR image</span></label>
                                    <input type="file" {...register("image", {
                                        required: "Photo is Required"
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                                </div>
                            </div>


                            <div className='-mx-3 md:flex mb-6'>
                                <div className="md:w-2/3 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">If option (a) </span></label>
                                    <input type="text" {...register("optionA", {
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.optionA && <p className='text-red-500'>{errors.optionA.message}</p>}
                                </div>
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">OUTCOME</span></label>
                                    <input type="number" {...register("outComeA", {
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.outComeA && <p className='text-red-500'>{errors.outComeA.message}</p>}
                                </div>

                            </div>
                            <div className='-mx-3 md:flex mb-6'>
                                <div className="md:w-2/3 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">If option (b) </span></label>
                                    <input type="text" {...register("optionB", {
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.optionB && <p className='text-red-500'>{errors.optionB.message}</p>}
                                </div>
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">OUTCOME</span></label>
                                    <input type="number" {...register("outComeB", {
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.outComeB && <p className='text-red-500'>{errors.outComeB.message}</p>}
                                </div>

                            </div>
                            <div className='-mx-3 md:flex mb-6'>
                                <div className="md:w-2/3 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">If option (c) </span></label>
                                    <input type="text" {...register("optionC", {
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.optionC && <p className='text-red-500'>{errors.optionC.message}</p>}
                                </div>
                                <div className="md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">OUTCOME</span></label>
                                    <input type="number" {...register("outComeC", {
                                    })} className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
                                    {errors.outComeC && <p className='text-red-500'>{errors.outComeC.message}</p>}
                                </div>

                            </div>

                            <div className='-mx-3 md:flex mb-2'>
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="lauppercase tracking-wide text-black text-xs font-bold mb-2"> <span className="label-text">Semester</span></label>
                                    <select
                                        {...register('semester')}
                                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded">
                                        <option>Spring</option>
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
                            <input className='btn font-bold text-white btn-primary w-full mt-4' value="Add" type="submit" />
                        </section>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddQuizQuestion;