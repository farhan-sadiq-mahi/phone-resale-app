import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../SharedComponent/Loader';

const ReportedItems = () => {
    const { user } = useContext(AuthContext);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: () => fetch(`http://localhost:5000/reporteditems?email=${user.email}`)
            .then(res => res.json())
    })


    const deleteHandler = id => {
        fetch(`http://localhost:5000/deleteitem?email=${user.email}&id=${id}`, {
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
    console.log(data)
    return (
        <div className='container'>
            <h1 className='text-4xl font-bold merFont text-center my-5'>Reported Items</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th></th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(product =>
                                <tr key={product._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.productImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="badge badge-warning gap-2">
                                            {product.category}
                                        </div>
                                    </td>
                                    <td></td>
                                    <th>
                                        <button onClick={() => deleteHandler(product._id)} className="btn btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }

                    </tbody>
                    {/* <!-- foot --> */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
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

export default ReportedItems;