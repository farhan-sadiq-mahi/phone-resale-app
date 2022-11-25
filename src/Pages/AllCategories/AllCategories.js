import axios from 'axios';
import React, { useState } from 'react';
import CategoryCard from './CategoryCard';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);


    axios.get('http://localhost:5000/categories')
        .then((res) => {
            setCategories(res.data);
        })
        .catch((error) => {
            // console.log(error);
        })
        .then(() => {

        })


    return (
        <div className='mb-24'>
            <h1 className='text-4xl font-bold merFont text-center mb-24 mt-8'>All Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map(category => <CategoryCard key={category._id} data={category} />)
                }

            </div>

        </div>
    );
};

export default AllCategories;