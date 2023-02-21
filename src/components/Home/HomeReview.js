import React from 'react';
import { Carousel, Rate } from 'antd';
import { Box, Toolbar, Typography } from '@mui/material';

const HomeReview = () => {
    const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Carousel autoplay>
            {a.map((i) => (
                <div key={i}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                        <Typography align="center" mx={5}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores accusamus autem doloribus mollitia obcaecati
                            sunt voluptates ratione eveniet officia facilis laudantium tenetur, cum quas atque molestiae repellat velit esse
                            blanditiis.
                        </Typography>
                        <Rate disabled defaultValue={5} />
                        <Typography variant="h3">Lorem ipsum {i}</Typography>
                    </Box>
                </div>
            ))}
        </Carousel>
    );
};

export default HomeReview;
