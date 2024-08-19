import React, {FC} from 'react';
import styles from './HeaderComponent.module.css';
import Link from "next/link";
import AllGenresServer from "@/app/(server)/genres/AllGenresServer";
import {getAllMovies} from "@/services/api.service";
import SearchServer from "@/app/(server)/search/SearchMovie";
import ThemeToggleServer from "@/app/(server)/theme/ThemeToggleServer";
import UserInfoComponent from "@/components/user-info/UserInfoComponent";

const HeaderComponent: FC = async () => {
    const allMovies = await getAllMovies();

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
                <SearchServer initialResults={allMovies} initialQuery=""/>
            </div>

            <div className={styles.header_right}>
                <ThemeToggleServer/>
                <UserInfoComponent/>
            </div>
        </div>
    );
};

export default HeaderComponent;


