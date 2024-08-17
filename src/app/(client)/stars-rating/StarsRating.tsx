'use client'

import React from 'react';
import ReactStars from 'react-rating-stars-component';

interface StarRatingProps {
    rating: number;
}

const StarsRating: React.FC<StarRatingProps> = ({ rating }) => {
    return (
        <ReactStars
            count={10}
            value={rating}
            size={30}
            activeColor="gold"
            edit={false}
        />
    );
};

export default StarsRating;



