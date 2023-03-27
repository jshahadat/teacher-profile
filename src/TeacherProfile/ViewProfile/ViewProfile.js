import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ViewProfileCard from './ViewProfileCard';

const ViewProfile = () => {
    const { user } = useContext(AuthContext);

    const [profileCards, setProfileCard] = useState([])
    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/myproducts?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProfileCard(data))
    }, [user?.email])
    return (
        <div>
            {
                profileCards?.map(profileCard => <ViewProfileCard
                    key={profileCard._id}
                    profileCard={profileCard}
                ></ViewProfileCard>)
            }
        </div>
    );
};

export default ViewProfile;