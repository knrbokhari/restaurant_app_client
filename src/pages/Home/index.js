import BookATable from 'components/Home/BookATable';
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
            <BookATable />
        </>
    );
};

export default HomePage;
