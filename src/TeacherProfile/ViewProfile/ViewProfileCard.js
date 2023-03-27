import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const ViewProfileCard = ({ profileCard }) => {



    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }







    const { user } = useContext(AuthContext);
    console.log(profileCard);

    const { displayName, img, description, resaleprice, condition, originalPrice, purchase, location, number, email, pdf } = profileCard

    return (
        <div>
            <div className='pb-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className='w-96 h-full' src={img} alt="Album" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <h2 className="card-title"> Full Name:{user?.displayName}</h2>
                            {/* <h2 onClick={() => handleStatuss(_id)} className="py-2 px-5 bg-lime-100 font-bold border rounded-xl hover:scale-110 duration-300 style"> {status}</h2> */}
                        </div>
                        <p>Dsignation:{description}</p>
                        {/* <h1>Resale Price: {resaleprice} $</h1> */}
                        {/* <h1>Condition : {condition}</h1> */}
                        {/* <h1>Original Price : {originalPrice}</h1> */}
                        {/* <h1>Purchase of year : {purchase} </h1> */}
                        <h1>Location : {location}</h1>
                        <h1>Mobile Number : {number}</h1>
                        <h1>Email: {email}</h1>
                        <div className="card-actions justify-between">
                            {/* <div>
                            <button onClick={() => handleDeleteProducts(_id)} className="btn btn-outline btn-warning">Delete</button>
                        </div>
                        <div>
                            {
                                status !== "available" ?
                                    <>
                                        <button disabled onClick={() => handleAdvertise(_id)} className="btn btn-primary">Advertise</button>
                                    </>
                                    :
                                    <>
                                        <button onClick={() => handleAdvertise(_id)} className="btn btn-primary">Advertise</button>
                                    </>
                            }
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfileCard;