// Import necessary modules from Material-UI
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Create the Card component
const ProductCard = ({basket}) => {
    return (
        <Card>
            {/* basket image */}
            <CardMedia
                component="img"
                alt={basket.title}
                height="140"
                image={basket.image}
            />

            {/* Card content */}
            <CardContent>
                {/* basket name */}
                <Typography variant="h6" component="div">
                    {basket.title}
                </Typography>

                {/* basket price */}
                <Typography variant="body2" color="text.secondary">
                    Price: ${basket.price}
                </Typography>

                {/* Add more information or buttons as needed */}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
