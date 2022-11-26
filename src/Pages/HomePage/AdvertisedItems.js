import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../SharedComponent/Loader';
import AdvertisedCard from './AdvertisedCard';

const AdvertisedItems = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: () => fetch('http://localhost:5000/advertisedproducts')
            .then(res => res.json())
    });

    if (isLoading) {
        return <Loader />
    }

    if (data.length) {


        return (
            <div className='my-12 container mx-auto'>
                <h1 className='text-4xl font-semibold merFont text-center my-5'>Advertised Items</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        data.map(product => <AdvertisedCard key={product._id} data={product} />)
                    }

                </div>
            </div>
        );
    };
}
export default AdvertisedItems;