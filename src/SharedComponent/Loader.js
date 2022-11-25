import React from 'react';
import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
    return (
        <div className='flex justify-center p-36'>
            <GridLoader color="#2d61e6" />
        </div>
    );
};

export default Loader;