import axios from 'axios';
import React, { useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);


    axios.get('http://localhost:5000/categories')
        .then((res) => {
            // console.log(res.data)
            setCategories(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => {

        })

    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-4xl font-semibold merFont text-center my-24'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    categories.map(data => <div key={data._id} className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
                        <figure><img src={data.img} alt="mobiles" /></figure>
                        <div className="card-body">
                            <h2 className="font-bold text-center mb-20 text-white">{data.name}</h2>
                            <button className="btn btn-outline btn-success">See All</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;