import React, {FC} from 'react';
import styles from './HeaderComponent.module.css';
import Link from "next/link";
import AllGenresServer from "@/app/(server)/genres/AllGenresServer";
import {Interfaces} from "@/interfaces/interfaces";
import {getAllMovies} from "@/services/api.service";
import SearchServer from "@/app/(server)/search/SearchMovie";

const HeaderComponent: FC<Interfaces> = async (results) => {
    const {allMovies} = await getAllMovies(1, results);

    return (
        <div className={styles.header_component}>
            <button className={styles.header_button}><Link href={'/'} className={styles.header_button_link}>home</Link></button>
            <button className={styles.header_button}><Link href={'/movies'} className={styles.header_button_link}>movies</Link></button>
            <AllGenresServer/>
            <SearchServer results={allMovies}/>
        </div>
    );
};

export default HeaderComponent;