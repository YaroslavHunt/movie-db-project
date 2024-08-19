import React, { FC } from 'react';
import styles from './PaginationComponent.module.css';
import Link from 'next/link';
import {PaginationProps} from "@/interfaces/interfaces";

const GenresPaginationComponent: FC<PaginationProps> = ({ currentPage, totalPages, genre }) => {
    const previousPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className={styles.pagination}>
            {previousPage && (
                <Link href={{
                    pathname: '/genre/[id]' + previousPage,
                    query: {page: previousPage, data: JSON.stringify(genre)}
                }} className={styles.toggle_button_link}>
                    <button>&#8249;</button>
                </Link>
            )}
            <span><a>{currentPage}</a></span>
            {nextPage && (
                <Link href={{
                    pathname: '/genre/[id]' + nextPage,
                    query: {page: nextPage, data: JSON.stringify(genre)}
                }} className={styles.toggle_button_link}>
                    <button>&#8250;</button>
                </Link>
            )}
        </div>
    );
};

export default GenresPaginationComponent;
