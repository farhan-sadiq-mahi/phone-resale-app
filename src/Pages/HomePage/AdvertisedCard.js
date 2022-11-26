import React, { useEffect, useState } from 'react';
import { GoVerified } from 'react-icons/go'
import { Link } from 'react-router-dom';

const AdvertisedCard = ({ data }) => {

    const [isVerified, setIsVerified] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/sellerVerified?email=${data.sellerEmail}`)
            .then(res => res.json())
            .then(data => setIsVerified(data.isVerified))
    }, [data.sellerEmail])
    return (
        <div className=''>
            <div className="flex">
                <div className="flex flex-col space-y-1">
                    <p>seller : <span className="text-sm font-semibold">{data.sellerName}</span>{
                        isVerified && <span title='verified'><GoVerified className='inline ml-2  text-blue-700' /></span>
                    }
                    </p>
                    <span className="text-xs dark:text-gray-400">{data.uploadTime}</span>
                </div>
            </div>
            <div>
                <img src={data.productImg} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-bold inline">{data.name}</h2>{data?.condition && <span className='badge badge-success ml-2 font-bold'>{data?.condition}</span>}
                <h3>Original Price: <span className='font-semibold'>${data.originalPrice}</span> </h3>
                <h3>Resale Price: <span className='font-semibold'>${data.resalePrice}</span> </h3>
                <h3>Used: <span className='font-semibold'>{data.usedTime} Year</span> </h3>
            </div>
            <div className="">
                <Link to={`/category/${data.category}`} className='btn btn-success w-full font-semibold'>Book Now</Link>

            </div>
        </div>
    );
};

export default AdvertisedCard;