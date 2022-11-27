import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../SharedComponent/Loader';

const MyOrders = () => {
    const { user, logOut } = useContext(AuthContext);
    const { data, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetch(`http://localhost:5000/mybooking?email=${user.email}`, {
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

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='container'>
            <h1 className='text-4xl font-bold merFont text-center my-5'> My Orders</h1>
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
                            data.map(order =>
                                <tr key={order._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.productImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.productName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {order.price}
                                    </td>
                                    <td></td>
                                    <th>
                                        {
                                            order.paid ? <button className="btn btn-success btn-xs disabled">Paid</button> :
                                                <Link to={`/dashboard/payment/${order._id}`}>
                                                    <button className="btn btn-info btn-xs">Pay Now</button>
                                                </Link>
                                        }
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

export default MyOrders;