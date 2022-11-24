import React from 'react';
import AdvertisedCard from './AdvertisedCard';

const AdvertisedItems = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold merFont text-center my-5'>Advertised Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <AdvertisedCard />
                <AdvertisedCard />
                <AdvertisedCard />
                <AdvertisedCard />
                <AdvertisedCard />
                <AdvertisedCard />
            </div>
        </div>
    );
};

export default AdvertisedItems;