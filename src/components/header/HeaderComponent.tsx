import React, { FC } from 'react';
import styles from './HeaderComponent.module.css';
import Link from "next/link";
import AllGenresServer from "@/app/(server)/genres/AllGenresServer";
import { Interfaces } from "@/interfaces/interfaces";
import { getAllMovies } from "@/services/api.service";
import SearchServer from "@/app/(server)/search/SearchMovie";
import ThemeToggleServer from "@/app/(server)/theme/ThemeToggleServer";
import UserInfoComponent from "@/components/user-info/UserInfoComponent";

const HeaderComponent: FC<Interfaces> = async (results) => {
    const { allMovies } = await getAllMovies(1, results);

    return (
        <div className={styles.header_component}>
            <div className={styles.header_left}>
                <button className={styles.header_button}>
                    <Link href={'/'} className={styles.header_button_link_home}>Home</Link>
                </button>
                <button className={styles.header_button}>
                    <Link href={'/movies'} className={styles.header_button_link_movies}>Movies</Link>
                </button>
                <AllGenresServer/>
            </div>

            <div className={styles.header_center}>
                <SearchServer results={allMovies}/>
            </div>

            <div className={styles.header_right}>
                <ThemeToggleServer/>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;


