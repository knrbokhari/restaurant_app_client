import React from 'react';
import { Carousel, Rate } from 'antd';
import { Box, Toolbar, Typography } from '@mui/material';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
};

const HomeReview = () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
        <Carousel autoplady>
            {a.map(() => (
                <div>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                        <Typography align="center" mx={5}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus autem doloribus mollitia obcaecati
                            sunt voluptates ratione eveniet officia facilis laudantium tenetur, cum quas atque molestiae repellat velit esse
                            blanditiis.
                        </Typography>
                        <Rate disabled defaultValue={5} />
                        <Typography variant="h3">Lorem ipsum</Typography>
                    </Box>
                </div>
            ))}
        </Carousel>
    );
};

export default HomeReview;
