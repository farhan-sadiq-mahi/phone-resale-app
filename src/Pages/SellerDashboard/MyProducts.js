import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {
    const { data } = useQuery();
    return (
        <div>
            Hello form the MyProducts
        </div>
    );
};

export default MyProducts;