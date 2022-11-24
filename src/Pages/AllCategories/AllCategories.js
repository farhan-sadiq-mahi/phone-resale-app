import axios from 'axios';
import React, { useState } from 'react';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);


    axios.get('http://localhost:5000/categories')
        .then((res) => {
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
        .then(() => {

        })



    return (
        <div>
            <h1>hello form Categories</h1>
        </div>
    );
};

export default AllCategories;