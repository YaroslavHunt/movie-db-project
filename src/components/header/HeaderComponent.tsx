import React from 'react';
import styles from './HeaderComponent.module.css';
import Link from "next/link";
import AllGenresServer from "@/app/(server)/genres/AllGenresServer";

const HeaderComponent = () => {
    return (
        <div className={styles.HeaderComponent}>
            <ul>
                <li>
                    <Link href={'/'}>home</Link>
                </li>
                <li>
                    <Link href={'/movies'}>movies</Link>
                </li>
                <AllGenresServer/>
            </ul>
        </div>
    );
};

export default HeaderComponent;