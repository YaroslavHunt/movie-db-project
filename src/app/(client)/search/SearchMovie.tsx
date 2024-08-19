'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { IMovie } from "@/models/IMovie";
import styles from './SerachMovie.module.css';
import Link from "next/link";

interface SearchProps {
    initialResults: IMovie[];
    initialQuery: string;
}

const Search: FC<SearchProps> = ({ initialResults, initialQuery }) => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState<IMovie[]>([]);
    const [loading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const searchContainerRef = useRef<HTMLDivElement>(null);

    const handleSearch = () => {
        if (query.trim() === '') {
            setResults([]);
            setShowResults(false);
            return;
        }

        const filteredMovies = initialResults.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredMovies);
        setShowResults(true);
    };

    useEffect(() => {
        handleSearch();
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={searchContainerRef} className={styles.search_container}>
            <div className={styles.search_bar}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for movies"
                    className={styles.search_input}
                />
                <button onClick={handleSearch} disabled={loading} className={styles.search_button}>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </div>
            {showResults && (
                <div className={`${styles.search_results_container} ${query ? styles.open : ''}`}>
                    {results.length === 0 && (
                        <h6 className={styles.no_results}>No results found</h6>
                    )}
                    {results.map(movie => (
                        <div key={movie.id} className={styles.search_result_item}>
                            <Link href={{
                                pathname: '/movie/' + movie.id,
                                query: { data: JSON.stringify(movie) }
                            }}
                                  className={styles.search_result_item_link}>
                                {movie.original_title}
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;











