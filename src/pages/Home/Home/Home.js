import React, { useState } from 'react';
import SideNavbar from '../../Sheared/Navbar/SideNavbar/SideNavbar';
// import "./Home.css"
import "./Back.css"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (

        <div >

            <div className=''>
                <div class="context ">
                </div>
                <div class="area" >
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div >
            </div>
            <div className='fixed top-20'>

                <SideNavbar></SideNavbar>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <button className="btn" onClick={() => window.my_modal_2.showModal()}>open modal</button>
            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};


export default Home;