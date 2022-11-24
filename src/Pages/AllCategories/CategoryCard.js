import React from 'react';

const CategoryCard = ({ data }) => {
    return (
        <div className="card w-1/2 mx-auto bg-base-100 shadow-xl image-full">
            <figure><img src={data.img} alt="mobiles" /></figure>
            <div className="card-body">
                <h2 className="font-bold text-center mb-20 text-white">{data.name}</h2>
                <button className="btn btn-outline btn-success">See All</button>
            </div>
        </div>
    );
};

export default CategoryCard;