import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../SharedComponent/Loader';

const Category = () => {

    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: () =>
            fetch('http://localhost:5000/categories')
                .then(res => res.json())

    })
    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-4xl font-semibold merFont text-center my-24'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    categories.map(data => <div key={data._id} className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
                        <figure><img src={data.img} alt="mobiles" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-center mb-20 text-white">{data.name}</h2>
                            <Link to={`/category/${data.name}`} className="btn btn-outline btn-success">See All</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;