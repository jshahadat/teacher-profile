import React, { useEffect, useState } from 'react';
import SummerCard from './SummerCard';
import { NavLink } from 'react-router-dom';

const Summer = () => {

    const [summerCoureses, setSummerCourses] = useState([])



    useEffect(() => {
        fetch("https://assignment-twelfth-server.vercel.app/summer?semeaster=summer", {
            // headers: {
            //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => setSummerCourses(data))
    }, [])
    return (
        <div>

            <div>
                <NavLink className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">QUIZ</h2>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink className={({ isActive }) => isActive ? 'text-xl text-black w-2/3 text-center font-semibold border-b-4' : 'text-xl text-black w-2/3 text-center border-bgColor  border-b-4 '}>
                    <div className="card bg-base-100 lg:w-64 h-40 shadow-xl image-full">
                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkMEHeS1UTlpdMOLJduwFTbSMTB7L7iK3AA4utvNktnl1T7eJukkYVz4&s=10" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center">summmer</h2>
                        </div>
                    </div>
                </NavLink>
            </div>
            <div>
                {

                    summerCoureses.map(summerCourese => <SummerCard
                        key={summerCourese._id}
                        summerCourese={summerCourese}
                    ></SummerCard>)
                }


            </div>
        </div>
    );
};

export default Summer;