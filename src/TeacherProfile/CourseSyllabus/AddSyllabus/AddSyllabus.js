import React from 'react';
import SideNavbar from '../../../pages/Sheared/Navbar/SideNavbar/SideNavbar';
import SyllabusForm from './SyllabusForm';
import SyllabusList from './SyllabusList';

const AddSyllabus = () => {
    return (
        <div className='flex'>
            <div className='w-full'>
                <SyllabusForm></SyllabusForm>
                <SyllabusList></SyllabusList>

            </div>
            <div className=' fixed'>
                <SideNavbar></SideNavbar>
            </div>
        </div>
    );
};

export default AddSyllabus;