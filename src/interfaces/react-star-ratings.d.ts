declare module 'react-star-ratings' {
    import * as React from 'react';

    interface StarRatingsProps {
        rating: number;
        starRatedColor?: string;
        numberOfStars?: number;
        starDimension?: string;
        starSpacing?: string;
        name?: string;
    }

    export default class StarRatings extends React.Component<StarRatingsProps> {}
}

declare module 'react-rating-stars-component';