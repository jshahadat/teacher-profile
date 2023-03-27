import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SideNavbar from '../Sheared/Navbar/SideNavbar/SideNavbar';
import MyProfilesCard from './MyProfilesCard';
// import './MyProfile.css'

const MyProfiles = () => {


    const { user } = useContext(AuthContext);
    console.log(user?.department);
    console.log(user?._id);

    const [userProfile, SetUserProfile] = useState([])

    const [updProfiles, setUpdProfile] = useState([])
    console.log(updProfiles._id);

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => SetUserProfile(data))
    }, [user?.email])




    const handleMakeComplete = id => {
        fetch(`https://mockup-todos-server.vercel.app/todos/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // toast.success('Make Verified successful.')
                    window.location.reload()
                }
            })
    }



    return (
        <div className='flex'>


            <div className='lg:ml-20 lg:mt-20'>
                <div className='lg:flex'>

                    <div className='grid lg:grid-cols-1 lg:w-96' >

                        < div className='  flex justify-center justify-items-center lg:w-96'>

                            {
                                userProfile.email ?
                                    <>
                                        y
                                    </>
                                    :
                                    <>




                                        <div>



                                            <div class="flex items-center  w-full justify-center">

                                                <div class="max-w-xs">
                                                    <div class="bg-white shadow-xl rounded-lg py-3 lg:w-96 border border-red-500">
                                                        <div class="photo-wrapper p-2">
                                                            <img class="w-32 h-32 rounded-full mx-auto" src="https://cdn4.iconfinder.com/data/icons/men-avatars-icons-set-1/256/6-512.png" alt="John Doe" />
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
                                                                <Link to={`/updateprofile/${updProfiles._id}`}><button className='btn btn-outline btn-primary'>Update Pr0file</button></Link>
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

                    <div className='grid lg:grid-cols-3 grid-cols-2 md:grid-cols-2 gap-4 lg:ml-12'>

                        <Link to="/coursesyllabus">
                            <div className=" bg-base-100 shadow-xl image-full lg:w-64 h-40" style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10)", backgroundPosition: "center", backgroundSize: "cover" }}>
                                {/* <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure> */}
                                <div className="shadow-xl lg:w-64 h-40">
                                    <h2 className="card-title text-center ">COURSE SYLLABUS</h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    {/* <div className="card-actions justify-center lg:mt-12">

                                <Link to="/addsyllabus"><button class="btn btn-primary">ADD SYLLABUS</button></Link>
                                <Link to="/findsyllabus"><button class="btn btn-primary">GET SYLLABUS</button></Link>
                            </div> */}
                                </div>
                            </div>
                        </Link>


                        <Link to="/questionbank">
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">MY QUESTION BANK</h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    {/* <div className="card-actions justify-center lg:mt-12">

                                <Link to="/addquestion"><button class="btn btn-primary">ADD QUESTION</button></Link>
                                <Link to="/findsyllabus"><button class="btn btn-primary">GET QUESTION</button></Link>
                            </div> */}
                                </div>
                            </div>
                        </Link>

                        <Link to="/allquestionbank">
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ALL QUESTION BANK</h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    {/* <div className="card-actions justify-center lg:mt-12">

                                <Link to="/addquestion"><button class="btn btn-primary">ADD QUESTION</button></Link>
                                <Link to="/findsyllabus"><button class="btn btn-primary">GET QUESTION</button></Link>
                            </div> */}
                                </div>
                            </div>
                        </Link>

                        <Link>
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                                <figure><img src="https://t3.ftcdn.net/jpg/03/09/59/80/360_F_309598037_FrfMLAfTQrstsVg5SZMaGH1Uef6s69EB.webp" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">ASSAIGNMENT TOPICS</h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    {/* <div className="card-actions justify-center lg:mt-12">

                                <Link to="/addassignment"><button class="btn btn-primary">ADD ASSAIGNMENT</button></Link>
                                <Link to="/findsyllabus"><button class="btn btn-primary">GET ASSAIGNMENT</button></Link>
                            </div> */}
                                </div>
                            </div>
                        </Link>

                        <Link>
                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full lg:overflow-auto overflow-x-hidden">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlsOKHcijHP2tC9A1KPuv7crel4QRyWXPW-laDbuclJ9Lz63zvCycUNRlxKUPowaoELI&usqp=CAU" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">PRESENTATION TOPICS</h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    {/* <div className="card-actions justify-center lg:mt-12">

                                // <Link to="/addpresentation"><button class="btn btn-primary">ADD PRESENTATION tOPIC</button></Link>
                                // <Link to="/findsyllabus"><button class="btn btn-primary">GET PRESENTATION tOPIC</button></Link>
                            </div> */}
                                </div>
                            </div>

                        </Link>


                        <Link>

                            <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center">PROJECTS IDEAS</h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    {/* <div className="card-actions justify-center lg:mt-12">

                                <Link to="/addproject"><button class="btn btn-primary">ADD PROJECTS IDEAS</button></Link>
                                <Link to="/findsyllabus"><button class="btn btn-primary">GET PROJECTS IDEAS</button></Link>
                            </div> */}
                                </div>
                            </div>
                        </Link>
                    </div>

                </div >
            </div >


            {/* 
            <h1>OL circle cards</h1>
            <ol>
                <li >
                    <div class="icon"><i class="fa-solid fa-bicycle"></i></div>
                    <div class="title">Step 1</div>
                    <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                </li>

                <li >
                    <div class="icon"><i class="fa-solid fa-car"></i></div>
                    <div class="title">Step 2</div>
                    <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                </li>

                <li >
                    <div class="icon"><i class="fa-solid fa-helicopter"></i></div>
                    <div class="title">Step 3</div>
                    <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                </li>

                <li >
                    <div class="icon"><i class="fa-solid fa-plane"></i></div>
                    <div class="title">Step 4</div>
                    <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                </li>

                <li >
                    <div class="icon"><i class="fa-solid fa-rocket"></i></div>
                    <div class="title">Step 5</div>
                    <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                </li>

                <li >
                    <div class="icon"><i class="fa-solid fa-bus"></i></div>
                    <div class="title">Step 6</div>
                    <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div>
                </li>

            </ol>
            <div class="credits">
                <a target="_blank" href="https://www.freepik.com/premium-vector/vector-infographic-design-template-with-icons-8-options-steps_10571883.htm">inspired by</a>
            </div> */}
            <div className=' fixed'>
                <SideNavbar></SideNavbar>
            </div>

        </div>
    );
};

export default MyProfiles;