import React, {FC} from 'react';
import styles from './PosterPreviewComponent.module.css'
import {imgUrl} from "@/constants/constants";
import {IMovie} from "@/models/IMovie";

interface Props {
    movie:IMovie
    posterUrl?:string
}

const PosterPreviewComponent:FC<Props> = ({movie, posterUrl}) => {
    return (
        <div className={styles.poster_preview_component}>
            <img src={`${imgUrl}${posterUrl}`} alt={movie.title}/>
        </div>
    );
};

export default PosterPreviewComponent;