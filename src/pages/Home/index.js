import HomeCarousel from 'components/Home/HomeCarousel';
import LocationAndTime from 'components/Home/LocationAndTime';
import Services from 'components/Home/Services';
import Wellcome from 'components/Home/Wellcome';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <HomeCarousel />
            <LocationAndTime />
            <Wellcome />
            <Services />
        </>
    );
};

export default HomePage;
