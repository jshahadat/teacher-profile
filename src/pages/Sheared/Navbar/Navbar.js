import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }



    const menuItems = <React.Fragment>
        <li className='text-black'><Link to="/">Home</Link></li>
        {/* <li className='text-lime-200'><Link to="/blog">Blog</Link></li> */}
        {
            user?.uid ?
                <>
                    {/* <li className='text-black'><Link to="/dashboard">Dashboard</Link></li> */}
                    <li><Link to='/myprofile'>My Profile</Link></li>
                    {/* <li><Link to='/updateprofile'>Update Your Profile</Link></li> */}
                    <li className='text-black'><button onClick={handleLogOut}>Sign out</button></li>
                </>
                :
                <li className='text-black'><Link to="/login">Login</Link></li>
        }
    </React.Fragment>


    return (



        <div className='fixed bg-stone-200 z-50 w-full px-5 py-2 flex justify-between items-center '>
            <div className="lg:pl-20 lg:pr-20 navbar bg-stone-200 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown rounded bg-stone-600">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            {/* <li><Link to="/blog">Blog</Link></li> */}
                            {
                                user?.uid ?
                                    <>
                                        <li><Link to='/myprofile'>My Profile</Link></li>
                                        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
                                        <li><button onClick={handleLogOut}>Sign out</button></li>
                                    </>
                                    :
                                    <li><Link to="/login">Login</Link></li>
                            }
                        </ul>
                    </div>
                    {/* <Link className='flex' to="/">
                        <span></span><img className='h-6 w-6 mt-3 ml-3 mr-0 pr-0 rounded-sm' src="https://i.ibb.co/yhfvGNc/favicon-2.jpg" alt="" /> <span className="btn btn-ghost normal-case text-xl animate-charcter">Garage Theatre</span> </Link> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost rounded bg-stone-600  lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label> */}
            </div>
            <div>

            </div>
        </div>
    );
};

export default Navbar;