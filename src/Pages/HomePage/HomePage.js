import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import HomeCategory from './HomeCategory';
import FeatureComponent from './FeatureComponent';
import HeroComponent from './HeroComponent';

const HomePage = () => {
    return (
        <>
            <HeroComponent />
            <FeatureComponent />
            <HomeCategory />
            <AdvertisedItems />
        </>
    );
};

export default HomePage;