import React from 'react';
import StarsRating from './StarsRating';

interface ServerComponentProps {
    rating: number;
}

const ServerComponent: React.FC<ServerComponentProps> = ({ rating }) => {
    return <StarsRating rating={rating} />;
};

export default ServerComponent;
