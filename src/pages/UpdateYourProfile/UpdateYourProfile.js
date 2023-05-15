import { useQuery } from '@tanstack/react-query';
import { Axios } from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { divisions } from './district';
import Input from './Input';

const UpdateYoueProfile = () => {



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
                        number: data.number,
                        purchase: data.purchase,
                        location: data.location,
                        description: data.description,
                        status: "available",
                        img: imgData.data.url,
                        pdf: data.file
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
                            toast.success(`${data.name} is added successfully`);
                            navigate('/viewprofile')
                        })
                }
            })
    }


    const [posting, setPosting] = useState(false);
    // const { user, userID } = useAuth();
    const [img, setImg] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    // const useNavigate = useNavigate();
    // const { data, isLoading } = useQuery(["categories"], () =>
    //     Axios.get("/api/categories").then((result) => result.data)
    // );

    const submitHandler = async (e) => {
        e.preventDefault();
        setPosting(true);
        const form = e.target;
        const productName = form.productName.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const category = form.category.value;
        const location = form.location.value;
        // const condition = form.condition.value;
        const description = form.description.value;
        const useDuration = form.useDuration.value;
        const sellerPhone = form.sellerPhone.value;

        const formData = new FormData();

        formData.append("image", selectedFile);
        try {
            const fetchData = await fetch(
                "https://api.imgbb.com/1/upload?key=c1dadbc894ea0599486c64901c3740cb",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const response = await fetchData.json();

            if (response) {
                const productInfo = {
                    productName,
                    originalPrice,
                    resalePrice,
                    category,
                    location,
                    // condition,
                    description,
                    useDuration,
                    sellerPhone: sellerPhone,
                    productImage: response?.data?.url,
                    email: user.email,
                    // userID: userID,
                };
                fetch('https://assignment-twelfth-server.vercel.app/profile', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(productInfo)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        toast.success(` is update successfully`);
                        navigate('/')
                    })
                // Axios.post(`https://assignment-twelfth-server.vercel.app/product`, productInfo)
                //     .then((result) => {
                //         form.reset();
                //         setPosting(false);
                //         // notify("Product Published Successfully !!");
                //         navigate("/");
                //     })
                //     .catch((err) => {
                //         setPosting(false);
                //         console.log(err);
                //     });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
        if (event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener("load", () => {
                setImg(reader.result);
            });
        }
    };

    // if (isLoading || posting) {
    //     return <isLoading />;
    // }


    return (
        <div className='p-7 flex flex-col justify-center items-center bg-gray-100 '>
            {/* <h2 className="text-4xl mb-5">Upadte Your Profile</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Upadate Your Image</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input  w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs border-none">
                    <label className="label border-none"> <span className="label-text border-none">Full Name</span></label>
                    <input type="text" defaultValue={user?.displayName} disabled {...register("name", {

                    })} className="input border-none w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>




                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Designation</span></label>
                    <input type="text" {...register("designation", {
                        required: "Designation is Required"
                    })} className="input  w-full max-w-xs" />
                    {errors.designation && <p className='text-red-500'>{errors.designation.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Question</span></label>
                    <input type="file" {...register("file", {
                        required: "file is Required"
                    })} className="input  w-full max-w-xs" />
                    {errors.file && <p className='text-red-500'>{errors.file.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resaleprice", {
                        required: "resaleprice is Required"
                    })} className="input  w-full max-w-xs" />
                    {errors.resaleprice && <p className='text-red-500'>{errors.resaleprice.message}</p>}
                </div>
             
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Phone Number</span></label>
                    <input type="text" {...register("number", {
                        required: "Phone number  is Required"
                    })} className="input  w-full max-w-xs" />
                    {errors.number && <p className='text-red-500'>{errors.number.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
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
                </div>


                <input className='btn font-bold text-white btn-accent w-full mt-4' value="Update" type="submit" />
            </form>
 */}



            {/* <Page title="Add Products"> */}
            <div className="mt-5 mb-12 md:col-span-2 md:mt-0">
                <form onSubmit={submitHandler}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className=" bg-white px-4 py-5 sm:p-6">
                            <div className="">
                                <Input
                                    title="Your Name"
                                    placeholder="Your Name"
                                    name="productName"
                                    type="text"
                                />
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                                    <Input
                                        title="Qualification"
                                        placeholder="Qualification"
                                        name="resalePrice"
                                        type="text"
                                    />
                                    <Input
                                        title="University Name"
                                        placeholder="University Name"
                                        name="originalPrice"
                                        type="text"
                                    />
                                    <div className="col-span-2 md:col-span-1">
                                        <Input
                                            title="Contact Number"
                                            placeholder="Phone Number "
                                            name="sellerPhone"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-5">
                                    <div>
                                        {/* <label
                                            htmlFor="category"
                                            className="block text-sm font-medium text-gray-700 mt-5"
                                        >
                                            Department
                                        </label> */}
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <div className="flex justify-center">
                                                <div className="flex grow">
                                                    <Input
                                                        title="Department"
                                                        placeholder="Department"
                                                        name="category"
                                                        type="text"
                                                    />
                                                    {/* <select
                                                        name="Department"
                                                        className="  border p-2  rounded"
                                                        required
                                                    >
                                                        <option className="w-full ">Select Category</option>
                                                        {data.map((cat) => (
                                                            <option
                                                                key={cat._id}
                                                                className="w-full"
                                                                value={cat._id}
                                                            >
                                                                {cat.name}
                                                            </option>
                                                        ))}
                                                    </select> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="location"
                                            className="block text-sm font-medium text-gray-700 mt-5"
                                        >
                                            Location
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <div className="flex justify-center">
                                                <div className="flex grow">
                                                    <select
                                                        name="location"
                                                        className="  border p-2  rounded"
                                                        required
                                                    >
                                                        <option className="w-full ">
                                                            Select Your Location
                                                        </option>
                                                        {divisions.map((division) => (
                                                            <option
                                                                key={division.id}
                                                                className="w-full"
                                                                value={division.name}
                                                            >
                                                                {division.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Input
                                        title="Years Of Experience"
                                        placeholder="Years Of Experience"
                                        name={"useDuration"}
                                        type="number"
                                    />
                                </div>
                                <div>
                                    <Input
                                        title="Descriptions "
                                        placeholder="Descriptions"
                                        name="description"
                                        type="textarea"
                                    />
                                </div>
                                {/* <div className="mt-5">
                                    <p>Please select your Product Quality:</p>
                                    <input
                                        type="radio"
                                        id="Good"
                                        name="condition"
                                        value="Good"
                                        defaultChecked
                                    />
                                    <label className="ml-2" htmlFor="Good">
                                        Good
                                    </label>
                                    <br />
                                    <input
                                        type="radio"
                                        id="excellent"
                                        name="condition"
                                        value="excellent"
                                    />
                                    <label className="ml-2" htmlFor="excellent">
                                        Excellent
                                    </label>
                                    <br />
                                    <input type="radio" id="fair" name="condition" value="fair" />
                                    <label className="ml-2" htmlFor="fair">
                                        Fair
                                    </label>
                                </div> */}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mt-5">
                                    Update Image
                                </label>
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-white"
                                >
                                    <div className="flex flex-col overflow-hidden items-center justify-center pt-5 pb-6">
                                        {img ? (
                                            <div className="p-5">
                                                <img src={img} className="h-48" alt="s" />
                                            </div>
                                        ) : (
                                            <>
                                                {/* <FaCloudUploadAlt className="text-4xl text-gray-600" /> */}
                                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                    <span className="font-semibold">Click to upload</span>{" "}
                                                </p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                                </p>
                                            </>
                                        )}
                                    </div>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        onChange={handleFileSelect}
                                        hidden
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="block w-full md:w-auto md:inline-flex justify-center rounded-md border border-transparent bg-[#FF6801] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#FF6801] focus:outline-none focus:ring-2 focus:ring-[#FF6801] focus:ring-offset-2"
                            >
                                Update Prifile
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* </Page> */}







        </div>
    );
};

export default UpdateYoueProfile;