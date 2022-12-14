import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../SharedComponent/Loader';

const AllBuyers = () => {
    const { user, logOut } = useContext(AuthContext);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: () => fetch(`http://localhost:5000/getallbuyers?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut();
                }
                return res.json()
            })
    })


    const deleteHandler = id => {
        fetch(`http://localhost:5000/deleteuser?email=${user.email}&id=${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })
    }
    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='container'>
            <h1 className='text-4xl font-bold merFont text-center my-5'>All Sellers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(buyer =>
                                <tr key={buyer._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={buyer.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{buyer.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {buyer.email}
                                    </td>
                                    <td></td>
                                    <th>
                                        <button onClick={() => deleteHandler(buyer._id)} className="btn btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default AllBuyers;