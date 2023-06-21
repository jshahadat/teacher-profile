import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Infos.css'

const Infos = () => {

    return (
        <div className='ifos-box pb-36'>
            <ol>
                <Link to="/generatequestion">
                    <li >
                        <div class="icon"><i class="fa-solid fa-list-check"></i></div>
                        <div class="text-lg font-bold">QUESTION</div>
                        {/* <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div> */}
                    </li>
                </Link>

                <Link to='/coursesyllabus'>  <li >
                    <div class="icon"><i class="fa-brands fa-sellsy"></i></div>
                    <div class=" text-lg font-bold">COURSE SYLLABUS</div>
                    {/* <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div> */}
                </li></Link>
                <Link to="/assignment">
                    <li >
                        <div class="icon"><i class="fa-sharp fa-solid fa-bars-progress"></i></div>
                        <div class="text-lg font-bold">ASSIGNMENT TOPIC</div>
                        {/* <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div> */}
                    </li>
                </Link>
                <Link to="/presentation">
                    <li >
                        <div class="icon"><i class="fa-regular fa-nfc-pen"></i></div>
                        <div class="text-lg font-bold">PRESENTATION TOPIC</div>
                        {/* <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div> */}
                    </li>
                </Link>
                <Link>
                    <li >
                        <div class="icon"><i class="fa-solid fa-rocket"></i></div>
                        <div class="text-lg font-bold">PROJECT IDEAS</div>
                        {/* <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div> */}
                    </li>
                </Link>
                <Link to='/allquestion'>
                    <li >
                        <div class="icon"><i class="fa-solid fa-pen-field"></i></div>
                        <div class="text-lg font-bold">ALL QUESTON BANK</div>
                        {/* <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, porro.</div> */}
                    </li>
                </Link>
            </ol>


        </div >
    );
};

export default Infos;