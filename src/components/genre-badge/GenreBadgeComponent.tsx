import React, {FC} from 'react';
import styles from "./GenreBadgeComponent.module.css";
import {IGenre} from "@/models/IGenre";
import Link from "next/link";
import {getGenres} from "@/services/api.service";

interface Props {
    genres: IGenre[];
    genresIds: number[];
}

const GenreBadgeComponent: FC<Props> = async ({genresIds, genres}) => {


    return (
        <div className={styles.genre_badge_component}>
            {
                genres
                    .filter(genre => genresIds.includes(genre.id))
                    .map(genre => (
                        <div key={genre.id} className={styles.genre_item}>
                            <Link
                                href={{
                                    pathname: '/genre/[id]' + genre.id,
                                    query: {data: JSON.stringify(genre)}
                                }}
                                className={styles.genre_budge_link}
                            >
                                <button className={styles.genre_budge}>
                                    {genre.name}
                                </button>
                            </Link>
                        </div>
                    ))
            }
        </div>
    );
};

export default GenreBadgeComponent;