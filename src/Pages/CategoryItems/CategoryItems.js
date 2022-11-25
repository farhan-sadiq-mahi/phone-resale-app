import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../SharedComponent/Loader';
import CategoryItemCard from './CategoryItemCard';

const CategoryItems = () => {
    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: [id, 'category'],
        queryFn: () => fetch(`http://localhost:5000/category/${id}`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='container mx-auto my-10 p-5'>
            <h1 className='text-4xl font-bold merFont text-center my-5'>{id}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(e => <CategoryItemCard key={e._id} data={e} />)
                }
            </div>
        </div>
    );
};

export default CategoryItems;