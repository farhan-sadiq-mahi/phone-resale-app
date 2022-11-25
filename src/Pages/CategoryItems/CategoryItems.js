import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryItems = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            Hello to items
        </div>
    );
};

export default CategoryItems;