import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../SharedComponent/Loader';

const AllSellers = () => {
    const { user } = useContext(AuthContext);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`http://localhost:5000/getallsellers?email=${user.email}`)
            .then(res => res.json())
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
                            <th>Status</th>
                            <th></th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(seller =>
                                <tr key={seller._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={seller.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{seller.name}</div>
                                                <div className="text-sm opacity-50">{seller.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            seller?.isVerified ? <button className='btn btn-success btn-xs'>Verified</button> :
                                                <button className='btn btn-info btn-xs'>Verify Now</button>
                                        }
                                    </td>
                                    <td></td>
                                    <th>
                                        <button onClick={() => deleteHandler(seller._id)} className="btn btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
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

export default AllSellers;