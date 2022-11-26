import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GoVerified } from 'react-icons/go'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { MdReport } from 'react-icons/md';

const CategoryItemCard = ({ data }) => {
    const { user } = useContext(AuthContext);
    const [isVerified, setIsVerified] = useState(false);
    const onSubmit = (data) => {
        console.log(data);
        //modal data
    }
    useEffect(() => {
        fetch(`http://localhost:5000/sellerVerified?email=${data.sellerEmail}`)
            .then(res => res.json())
            .then(data => setIsVerified(data.isVerified))
    }, [data.sellerEmail])

    const reportItem = id => {
        fetch(`http://localhost:5000/reportedproduct?id=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully Reported')
            })
    }

    const { register, handleSubmit } = useForm();
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
            {/* card */}
            <div className="flex space-x-4">
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
                <div className='my-2'>
                    <button onClick={() => reportItem(data._id)} className='btn btn-error btn-xs'>Report to Admin
                        <MdReport className='ml-1' />
                    </button>
                </div>
            </div>
            <div className="">
                <label htmlFor="my-modal-3" className='btn btn-success w-full font-semibold'>Book Now</label>

            </div>

            {/* Booking Modal*/}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle bg-info border-none absolute right-4 top-4">✕</label>
                    <h1 className='text-4xl font-bold merFont text-center my-2'>Book Now</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 text-black w-full">
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            {...register("name")}
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Full Name" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            {...register("email")}
                            disabled
                            defaultValue={user?.email}
                            placeholder="Email" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            {...register("item")}
                            disabled
                            defaultValue={data.name}
                            placeholder="Item" />
                        <input
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            {...register("price")}
                            disabled
                            defaultValue={data.resalePrice}
                            placeholder="price" />
                        <input
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            {...register("phoneNumber")}
                            placeholder="Phone Number" />
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            {...register("location")}
                            placeholder="Location" />

                        <label
                            htmlFor="my-modal-3"
                            onClick={() => toast.success('Successfully Booked')}
                            className="w-full text-center py-3 rounded bg-info text-white hover:bg-info-focus focus:outline-none my-1"
                        ><input type='submit' className='w-full' /> </label>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryItemCard;