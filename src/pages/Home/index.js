import HomeCarousel from 'components/Home/HomeCarousel';
import LocationAndTime from 'components/Home/LocationAndTime';
import OurMenu from 'components/Home/OurMenu';
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
            <OurMenu />
        </>
    );
};

export default HomePage;
