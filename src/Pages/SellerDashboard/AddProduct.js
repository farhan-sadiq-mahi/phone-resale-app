import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        const sellerName = user.displayName;
        const sellerEmail = user.email;
        const uploadTime = format(new Date(), 'PP');
        const productDetails = { ...data, sellerEmail, sellerName, uploadTime }

        fetch(`http://localhost:5000/addproduct?email=${user.email}`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    reset();
                    navigate('/dashboard/myproducts')
                }
            });




    }
    return (
        <div className='container mx-auto bg-gray-100'>
            <h1 className='text-4xl font-bold merFont text-center my-5'>Add Product</h1>
            <div className=" p-0 sm:p-12">
                <div className="mx-auto max-w-lg px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            {...register("name")}
                            placeholder="Product Name"
                            required
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <input
                            type="number"
                            required
                            {...register("phoneNumber")}
                            placeholder="Phone Number"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <input
                            type="text"
                            required
                            name="productImg"
                            {...register("productImg")}
                            placeholder="Image Link"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        {/* <input
                            type="text"
                            required
                            {...register("category")}
                            placeholder="Category"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        /> */}

                        <fieldset className="w-full"
                        >
                            <legend className=" text-gray-500 pt-4">Product's Category</legend>
                            <div className="block pt-3 pb-2 space-x-4">
                                <label>
                                    <input
                                        {...register("category")}
                                        type="radio"
                                        value="Iphone"

                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Iphone
                                </label>
                                <label>
                                    <input
                                        {...register("category")}
                                        type="radio"
                                        value="Samsung"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Samsung
                                </label>
                                <label>
                                    <input
                                        {...register("category")}
                                        type="radio"
                                        value="Oneplus"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />Oneplus
                                </label>
                            </div>
                        </fieldset>



                        <fieldset className="w-full"
                        >
                            <legend className=" text-gray-500 pt-4">Product's Condition</legend>
                            <div className="block pt-3 pb-2 space-x-4">
                                <label>
                                    <input
                                        {...register("condition")}
                                        type="radio"
                                        value="excellent"

                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Excellent
                                </label>
                                <label>
                                    <input
                                        {...register("condition")}
                                        type="radio"
                                        value="good"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Good
                                </label>
                                <label>
                                    <input
                                        {...register("condition")}
                                        type="radio"
                                        value="fair"
                                        className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />Fair
                                </label>
                            </div>
                        </fieldset>



                        <div className="flex flex-row space-x-4">

                            <input
                                required
                                type="text"
                                {...register("resalePrice")}
                                placeholder="Resale Price"
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <input
                                required
                                type="text"
                                {...register("originalPrice")}
                                placeholder="Original Price"
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <input
                                required
                                type="text"
                                {...register("usedTime")}
                                placeholder="Product Used"
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                        </div>

                        <input
                            required
                            type="text"
                            {...register("location")}
                            placeholder="Location"
                            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <textarea
                            required
                            type="text"
                            {...register("description")}
                            placeholder="Description"
                            className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <button
                            type="submit"
                            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none
                            bg-info hover:shadow-lg focus:outline-none"
                        >
                            Add Item
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;