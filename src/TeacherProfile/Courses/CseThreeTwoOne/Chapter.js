import React from 'react';
import { Link } from 'react-router-dom';

const Chapter = () => {
    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h1 className='text-2xl font-bold'>Course Title :</h1>
                <h1 className='text-2xl font-bold mb-20'>Course Code: CSE-321</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>Chapter</th>
                            <th>Chapter Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td><Link to='/chapter-1'>Fundamental Cse</Link></td>
                            <td><Link to='/chapter-1'>go</Link></td>
                        </tr>
                        {/* row 2 */}
                        <tr className="active">
                            <th>2</th>
                            <td>Introduction</td>
                            <td>Go</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Abc</td>
                            <td>Go</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Chapter;