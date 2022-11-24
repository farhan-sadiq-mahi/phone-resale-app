import React from 'react';

const Category = () => {
    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-4xl font-semibold merFont text-center my-24'>Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>


                <div className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg" alt="mobiles" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center mb-20 text-white">Iphone</h2>
                        <button className="btn btn-outline btn-success">Buy Now</button>
                    </div>
                </div>

                <div className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.indianexpress.com/2021/09/OnePlus-9-series-1.jpg" alt="mobiles" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center mb-20 text-white">One plus</h2>
                        <button className="btn btn-outline btn-success">Buy Now</button>
                    </div>
                </div>

                <div className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
                    <figure><img src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="mobiles" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-center mb-20 text-white">Sumsung</h2>
                        <button className="btn btn-outline btn-success">Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Category;