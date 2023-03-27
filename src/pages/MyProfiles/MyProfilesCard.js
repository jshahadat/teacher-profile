import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyProfilesCard = ({ updProfile }) => {
    console.log(updProfile);


    const { user } = useContext(AuthContext);

    return (
        <div>
            {
                updProfile.img ?
                    <>
                        <div>
                            {
                                updProfile.img ?
                                    <>
                                        <div className='w-24'>
                                            <img src={updProfile.img} alt="" />
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='w-24'>
                                            <h1>Avater</h1>
                                        </div>
                                    </>
                            }
                        </div>
                        <div>
                            <h1>{updProfile.display}</h1>
                        </div>
                    </>
                    :
                    <>
                    </>
            }

        </div>
    );
};

export default MyProfilesCard;