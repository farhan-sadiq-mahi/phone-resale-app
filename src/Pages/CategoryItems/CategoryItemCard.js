import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { GoVerified } from 'react-icons/go'
import { MdReport } from 'react-icons/md';


const CategoryItemCard = ({ data: cardData, setModalData, setModalStatus }) => {

    const [isVerified, setIsVerified] = useState(false);
    const modalDetails = () => {
        setModalStatus(true);
        setModalData(cardData)

    }

    useEffect(() => {
        fetch(`http://localhost:5000/sellerVerified?email=${cardData.sellerEmail}`)
            .then(res => res.json())
            .then(data => setIsVerified(data.isVerified))
    }, [cardData.sellerEmail])

    const reportItem = id => {
        fetch(`http://localhost:5000/reportedproduct?id=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully Reported')
            })
    }

    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
            {/* card */}
            <div className="flex space-x-4">
                <div className="flex flex-col space-y-1">
                    <p>seller : <span className="text-sm font-semibold">{cardData.sellerName}</span>{
                        isVerified && <span title='verified'><GoVerified className='inline ml-2  text-blue-700' /></span>
                    }
                    </p>
                    <span className="text-xs dark:text-gray-400">{cardData.uploadTime}</span>
                </div>
            </div>
            <div>
                <img src={cardData.productImg} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-bold inline">{cardData.name}</h2>{cardData?.condition && <span className='badge badge-success ml-2 font-bold'>{cardData?.condition}</span>}
                <h3>Original Price: <span className='font-semibold'>${cardData.originalPrice}</span> </h3>
                <h3>Resale Price: <span className='font-semibold'>${cardData.resalePrice}</span> </h3>
                <h3>Used: <span className='font-semibold'>{cardData.usedTime} Year</span> </h3>
                <div className='my-2'>
                    <button onClick={() => reportItem(cardData._id)} className='btn btn-error btn-xs'>Report to Admin
                        <MdReport className='ml-1' />
                    </button>
                </div>
            </div>
            <div className="">
                <label htmlFor="my-modal-3" className='btn btn-success w-full font-semibold' onClick={modalDetails}>Book Now</label>

            </div>
        </div>
    );
};

export default CategoryItemCard;