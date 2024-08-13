import React, {FC} from 'react';
import styles from './PosterPreviewComponent.module.css'

interface IProps {
    movie: any
}

const PosterPreviewComponent:FC<IProps> = ({movie}) => {
    return (
        <div className={styles.PosterPreviewComponent}>

        </div>
    );
};

export default PosterPreviewComponent;