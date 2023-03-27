import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SyllabusList = () => {
    const { user } = useContext(AuthContext);

    const [todos, setTodos] = useState([])
    const [allTodos, setAllTodos] = useState([])

    useEffect(() => {
        fetch(`https://assignment-twelfth-server.vercel.app/myproducts?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllTodos(data))
    }, [user?.email])

    const handleMakeComplete = id => {
        fetch(`https://mockup-todos-server.vercel.app/todos/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // toast.success('Make Verified successful.')
                    window.location.reload()
                }
            })
    }

    const handleDeleteTodo = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            fetch(`https://mockup-todos-server.vercel.app/todos/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        // toast('Deleted successfully');
                        const remaining = todos.filter(odr => odr._id !== id);
                        setTodos(remaining);
                        window.location.reload()
                    }
                })
        }
    }

    return (
        <div>
            <div>
                <div className='lg:pr-20 lg:pl-20 ml-3 mr-3'>
                    <h1 className='font-extrabold text-2xl text-center mb-6'> Syllabus</h1>
                    <div className="overflow-x-auto">
                        <table className="table  w-full">
                            <thead>

                                <tr className='hover'>
                                    {/* <th></th> */}
                                    <th>Chapter</th>
                                    <th>Course Title</th>
                                    <th>Course Code</th>
                                    <th>Section</th>
                                    <th>Season</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allTodos.map((allTodo, i) => <tr className='hover' key={allTodo._id}>
                                        {
                                            allTodo.status ?
                                                <>

                                                </>
                                                :
                                                <>
                                                    {/* <th>{i + 1}</th> */}
                                                    <td>{allTodo.chapter}</td>
                                                    <td>{allTodo.name}</td>
                                                    <td>{allTodo.code}</td>
                                                    <td>{allTodo.section}</td>
                                                    <td>{allTodo.department}</td>
                                                    {/* <td><button onClick={() => handleMakeComplete(allTodo._id)} className='btn btn-xs btn-primary'>Panding</button></td>
                                                    <td><Link to={allTodo._id}><button className='btn btn-xs btn-danger'>Edit</button></Link></td>
                                                    <td><button onClick={() => handleDeleteTodo(allTodo._id)} className='btn btn-xs btn-danger'>Delete</button></td> */}
                                                </>
                                        }
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* <div>
                <div className='lg:pr-20 lg:pl-20   lg:mt-20 mt-10 mb-20 ml-3 mr-3'>
                    <h1 className='font-extrabold text-2xl text-center mb-6'>COMPLETE TASK</h1>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>

                                <tr className='hover'>
                                    <th>Todos</th>
                                    <th>Date</th>
                                    <th>Markdown</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allTodos.map((allTodo, i) => <tr className='hover' key={allTodo._id}>

                                        {
                                            allTodo.status ?
                                                <>
                                                    <td>{allTodo.name}</td>
                                                    <td>{allTodo.date}</td>
                                                    <td ><img className='w-10' src="https://i.ibb.co/1qFSWxn/tik-removebg-preview.png" alt="" /></td>
                                                    <td><Link to={allTodo._id}><button className='btn btn-xs btn-danger'>Edit</button></Link></td>
                                                    <td><button onClick={() => handleDeleteTodo(allTodo._id)} className='btn btn-xs btn-danger'>Delete</button></td>
                                                </>
                                                :
                                                <>

                                                </>
                                        }

                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default SyllabusList;