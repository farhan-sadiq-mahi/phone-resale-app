import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Moda = ({ data, setModalStatus }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();

    const name = user?.displayName;
    const email = user?.email;
    const productName = data.name;
    const price = data.resalePrice;
    const productImg = data.productImg;
    const productID = data._id;

    const onSubmit = (data) => {
        const bookingDetails = {
            ...data,
            name, email, productName, price, productImg, productID
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successfully Booked');
                setModalStatus(false);
            })

    }

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle bg-info border-none absolute right-4 top-4">✕</label>
                    <h1 className='text-4xl font-bold merFont text-center my-2'>Book Now</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white px-6 py-8 text-black w-full">
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Full Name" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            disabled
                            defaultValue={user?.email}
                            placeholder="Email" />

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            disabled
                            defaultValue={data.name}
                            placeholder="Item" />
                        <input
                            type="number"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
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

                        <input
                            type='submit'
                            htmlFor="my-modal-3"
                            className="w-full text-center py-3 rounded bg-info text-white hover:bg-info-focus focus:outline-none my-1"
                        />

                    </form>
                </div>
            </div>
        </>
    );
};

export default Moda;