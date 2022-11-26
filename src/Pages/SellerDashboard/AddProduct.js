import React from 'react';

const AddProduct = () => {
    return (
        <div className='container mx-auto bg-gray-100'>
            <h1 className='text-4xl font-bold merFont text-center my-5'>Add Product</h1>
            <div class=" p-0 sm:p-12">
                <div class="mx-auto max-w-lg px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <form id="form" novalidate>
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            required
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <input
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <input
                            type="file"
                            name="email"
                            placeholder="email"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />
                        <label className='text-gray-400'>Upload Product Image</label>

                        <fieldset class="w-full ">
                            <legend class=" text-gray-500 pt-4">Product's Condition</legend>
                            <div class="block pt-3 pb-2 space-x-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="1"
                                        class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Option 1
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="2"
                                        class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Option 2
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value="3"
                                        class="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                    />
                                    Option 3
                                </label>
                            </div>
                        </fieldset>



                        <div class="flex flex-row space-x-4">

                            <input
                                type="text"
                                name="date"
                                placeholder="Resale Price"
                                onclick="this.setAttribute('type', 'date');"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <input
                                type="text"
                                name="time"
                                placeholder="Original Price"
                                onclick="this.setAttribute('type', 'time');"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <input
                                type="text"
                                name="used Time"
                                placeholder="Product Used"
                                onclick="this.setAttribute('type', 'time');"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                        </div>

                        <input
                            type="text"
                            name="Location"
                            placeholder="Location"
                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <textarea
                            type="text"
                            name="duration"
                            placeholder="Description"
                            class="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                        />

                        <button
                            id="button"
                            type="button"
                            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none
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