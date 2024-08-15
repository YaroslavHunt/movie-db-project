'use client';

import React, { useEffect, useRef } from 'react';
import styles from './AllGenresClient.module.css';
import { IGenre } from "@/models/IGenre";
import Link from "next/link";

interface IProps {
    genres: IGenre[];
}

const AllGenresClient: React.FC<IProps> = ({ genres }) => {
    const genreListRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);
    const toggleButtonRef = useRef<HTMLButtonElement>(null);

    const toggleGenres = () => {
        const genreList = genreListRef.current;
        const arrow = arrowRef.current;

        if (genreList?.classList.contains(styles.open)) {
            genreList.classList.remove(styles.open);
            arrow!.textContent = '∧';
        } else {
            genreList?.classList.add(styles.open);
            arrow!.textContent = '∨';
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (genreListRef.current &&
            !genreListRef.current.contains(event.target as Node) &&
            !toggleButtonRef.current?.contains(event.target as Node)) {
            genreListRef.current.classList.remove(styles.open);
            if (arrowRef.current) {
                arrowRef.current.textContent = '∧';
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            <button
                ref={toggleButtonRef}
                onClick={toggleGenres}
                className={styles.toggle_button}
            >
                <span ref={arrowRef}>&#8744;</span>
                <Link href={'/movies'} className={styles.toggle_button_link}>All Genres</Link>
            </button>
            <div ref={genreListRef} id="genreList" className={styles.genre_list}>
                {genres.map((genre) => (
                    <div key={genre.id} className={styles.genre_item}>
                        <Link href={{
                            pathname: '/genre/' + genre.id,
                            query: { data: JSON.stringify(genre) }
                        }} className={styles.toggle_button_link}>
                            {genre.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllGenresClient;

