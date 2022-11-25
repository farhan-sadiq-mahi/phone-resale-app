import React from 'react';

const CategoryItemCard = ({ data }) => {
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
            <div className="flex space-x-4">
                <div className="flex flex-col space-y-1">
                    <p>seller : <span className="text-sm font-semibold">{data.sellerName}</span>
                    </p>
                    <span className="text-xs dark:text-gray-400">{data.uploadTime}</span>
                </div>
            </div>
            <div>
                <img src={data.productImg} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-bold">{data.name}</h2>
                <h3>Original Price: <span className='font-semibold'>${data.originalPrice}</span> </h3>
                <h3>Resale Price: <span className='font-semibold'>${data.resalePrice}</span> </h3>
                <h3>Used: <span className='font-semibold'>{data.usedTime} Year</span> </h3>
            </div>
            <div className="flex flex-wrap justify-between">

            </div>
        </div>
    );
};

export default CategoryItemCard;