import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../SharedComponent/Loader';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['products', user],
        queryFn: () => fetch(`http://localhost:5000/myproducts?email=${user.email}`)
            .then(res => res.json())
    }, {
        refetchInterval: 1000,
    })

    const handleProductDelete = (id) => {
        fetch(`http://localhost:5000/deletemyproduct?email=${user.email}&id=${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data)
            })
    }



    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='container mx-auto h-screen bg-gray-100'>
            <h1 className='text-4xl font-bold merFont text-center my-5'>My Products</h1>
            <div className="overflow-x-auto w-full">
                {data.products.length ?
                    <table className="table w-full">

                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.products.map(product => <tr key={product._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.productImg} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{product.name}</div>
                                                <div className="text-sm opacity-50">{product.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='font-semibold'>${product.resalePrice}</p>
                                    </td>
                                    <td>
                                        {product?.isSold ? <p className='badge badge-success'>SOLD</p> : <p className='badge badge-info'>UNSOLD</p>}
                                    </td>
                                    <td>
                                        {!product?.isSold ? <button className="btn btn-secondary btn-xs"
                                        >Advertise</button> : <button disabled className="btn btn-secondary btn-xs"
                                        >Advertise</button>}

                                    </td>
                                    <th>
                                        <button onClick={() => handleProductDelete(product._id)} className="btn btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                    : <h1 className='text-2xl font-semibold text-center my-5'>You Don't Have Any Product Right Now, <br /> Add Products <Link className='underline' to={'/dashboard/addproduct'}>Here</Link></h1>
                }
            </div>
        </div>
    );
};

export default MyProducts;