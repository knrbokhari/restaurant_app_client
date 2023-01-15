import React from 'react';
import { Carousel } from 'antd';
import second from '../../image/bg1.webp';

const contentStyle = {
    display: 'block',
    height: '750px',
    background: 'red',
    backgroundImage: 'url(https://i.ibb.co/Qc9Fmsm/bg1.webp)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
};

const HomePage = () => {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle}>
                        <h3>1</h3>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </div>
            </Carousel>
        </>
    );
};

export default HomePage;
