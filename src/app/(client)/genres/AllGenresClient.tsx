'use client';

import React from 'react';
import styles from './AllGenresClient.module.css';
import {IGenre} from "@/models/IGenre";
import Link from "next/link";

interface IProps {
    genres: IGenre[];
}

const AllGenresClient: React.FC<IProps> = ({genres}) => {
    const toggleGenres = () => {
        const genreList = document.getElementById('genreList');
        const arrow = document.getElementById('arrow');

        if (genreList?.classList.contains(styles.open)) {
            genreList.classList.remove(styles.open);
            arrow!.textContent = '∧';
        } else {
            genreList?.classList.add(styles.open);
            arrow!.textContent = '∨';
        }
    };

    return (
        <div className={styles.container}>
            <button onClick={toggleGenres} className={styles.toggle_button}>
                <span id="arrow">&#8744;</span>
                <Link href={'/movies'} className={styles.toggle_button_link}>All Genres</Link>
            </button>
            <div id="genreList" className={styles.genre_list}>
                {genres.map((genre) => (
                    <div key={genre.id} className={styles.genre_item}>
                        <Link href={{
                            pathname: '/genre/' + genre.id,
                            query: {data: JSON.stringify(genre)}}} className={styles.toggle_button_link}>
                            {genre.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div> //todo
    );
};

export default AllGenresClient;