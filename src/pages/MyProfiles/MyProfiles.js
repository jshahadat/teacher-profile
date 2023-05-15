import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SideNavbar from '../Sheared/Navbar/SideNavbar/SideNavbar';
import Infos from './Infos/Infos';
import MyProfilesCard from './MyProfilesCard';
// import './MyProfile.css'

const MyProfiles = () => {


    const { user } = useContext(AuthContext);
    // console.log(user?.department);
    // console.log(user?._id);

    const [userProfile, SetUserProfile] = useState([])
    // console.log(userProfile);

    const [updProfiles, setUpdProfile] = useState([])
    // console.log(updProfiles._id);

    // useEffect(() => {
    //     fetch(`https://assignment-twelfth-server.vercel.app/${user?.email}`, {
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => SetUserProfile(data))
    // }, [user?.email])




    // const handleMakeComplete = id => {
    //     fetch(`https://mockup-todos-server.vercel.app/todos/${id}`, {
    //         method: 'PUT',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 // toast.success('Make Verified successful.')
    //                 window.location.reload()
    //             }
    //         })
    // }



    return (
        <div className='flex' style={{ background: "rgba(245, 245, 245)" }}>


            <div className='lg:ml-20 lg:mt-20'>
                <div className='lg:flex'>

                    <div className='grid lg:grid-cols-1 lg:w-96' >

                        < div className='  flex justify-center justify-items-center lg:w-96 mr-28'>

                            {
                                userProfile.email ?
                                    <>
                                        <div>



                                            <div class="flex items-center  w-full justify-center">

                                                <div class="max-w-xs">
                                                    <div class=" rounded-lg py-3 lg:w-96 ">
                                                        <div class="photo-wrapper p-2">
                                                            <img class=" rounded-full mx-auto" src={userProfile.productImage} alt="John Doe" style={{ width: "15rem", height: "15rem" }} />
                                                        </div>
                                                        <div class="p-2">
                                                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user?.displayName}</h3>
                                                            {/* <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>Web Developer</p>
                </div> */}
                                                            <table class="text-xs my-3 text-center flex justify-center justify-items-center">
                                                                <tbody>
                                                                    {/* <tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                            <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                        </tr> */}
                                                                    {/* <tr>
                            <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                            <td class="px-2 py-2">+977 9955221114</td>
                        </tr> */}
                                                                    <tr>
                                                                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                                        <td class="px-2 py-2">{user?.email}</td>
                                                                    </tr>
                                                                </tbody></table>

                                                            <div className='flex justify-center justify-items-center'>
                                                                <Link to="/viewprofile"><button className='btn btn-outline btn-primary'>View Proofile</button></Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>




                                        <div>



                                            <div class="flex items-center  w-full justify-center">

                                                <div class="max-w-xs">
                                                    <div class="bg-white shadow-xl rounded-lg py-3 lg:w-96 border">
                                                        <div class="photo-wrapper p-2">
                                                            <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/6-512.png" alt="John Doe" style={{ width: "15rem", height: "15rem" }} />
                                                        </div>
                                                        <div class="p-2">
                                                            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{user?.displayName}</h3>
                                                            {/* <div class="text-center text-gray-400 text-xs font-semibold">
                                                                <p>Web Developer</p>
                                                            </div> */}
                                                            <table class="text-xs my-3 text-center flex justify-center justify-items-center">
                                                                <tbody>
                                                                    {/* <tr>
                                                                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                                                        <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                                                                    </tr> */}
                                                                    {/* <tr>
                                                                        <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                                                        <td class="px-2 py-2">+977 9955221114</td>
                                                                    </tr> */}
                                                                    <tr>
                                                                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                                                        <td class="px-2 py-2">{user?.email}</td>
                                                                    </tr>
                                                                </tbody></table>

                                                            <div className='flex justify-center justify-items-center'>
                                                                <Link to="/updateprofile"><button className='btn btn-outline btn-primary'>Update Pr0file</button></Link>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </>
                            }

                            <div>

                                <div>

                                    {
                                        updProfiles?.map(updProfile => <MyProfilesCard
                                            key={updProfile?._id}
                                            updProfile={updProfile}
                                        ></MyProfilesCard>)

                                    }
                                    {/* <h1>{user?.displayName}</h1>
                                    <h1>{updProfiles.department}</h1> */}
                                </div>
                                {/* <Link to="/viewprofile"> <button className='btn btn-outline btn-primary'>View Profile</button></Link> */}
                            </div>

                        </div >
                    </div>

                    {/* <div className='grid lg:grid-cols-3 grid-cols-2 md:grid-cols-2 gap-4 lg:ml-12'>

                        <Link to="/coursesyllabus">
                            <div className=" bg-base-100 shadow-xl image-full lg:w-64 h-40" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10)", backgroundPosition: "center", backgroundSize: "cover" }}>
                                <div className="shadow-xl lg:w-64 h-40">
                                    <h2 className="card-title text-center ">COURSE SYLLABUS</h2>
                                   
                                </div>
                            </div>
                        </Link>


                        <Link to="/questionbank">
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">MY QUESTION BANK</h2>
                                   
                                </div>
                            </div>
                        </Link>

                        <Link to="/allquestionbank">
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ALL QUESTION BANK</h2>
                                   
                                </div>
                            </div>
                        </Link>

                        <Link>
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                                <figure><img src="https://t3.ftcdn.net/jpg/03/09/59/80/360_F_309598037_FrfMLAfTQrstsVg5SZMaGH1Uef6s69EB.webp" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ASSAIGNMENT TOPICS</h2>
                                   
                                </div>
                            </div>
                        </Link>

                        <Link>
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlsOKHcijHP2tC9A1KPuv7crel4QRyWXPW-laDbuclJ9Lz63zvCycUNRlxKUPowaoELI&usqp=CAU" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">PRESENTATION TOPICS</h2>
                                    
                                </div>
                            </div>

                        </Link>


                        <Link>

                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">PROJECTS IDEAS</h2>
                                   
                                </div>
                            </div>
                        </Link>
                    </div> */}

                </div >
            </div >

            <div>
                <Infos></Infos>
            </div>
            <div className=' fixed'>
                <SideNavbar></SideNavbar>
            </div>

        </div>
    );
};

export default MyProfiles;