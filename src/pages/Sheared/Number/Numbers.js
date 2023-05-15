import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Number from './Number';

const Numbers = () => {
    const { data: number = [], refetch } = useQuery({
        queryKey: ['number'],
        queryFn: async () => {
            const res = await fetch('https://assignment-twelfth-server.vercel.app/number');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            {
                number.map(num => <Number
                    key={num._id}
                    num={num}
                ></Number>)
            }

        </div>
    );
};

export default Numbers;