import React from 'react';

import styles from './ThemeToggleServer.module.css';
import ThemeToggleClient from "@/app/(client)/theme/ThemeToggleClient";

const ThemeToggleServer = () => {
    return (
        <div className={styles.theme_toggle_container}>
            <ThemeToggleClient/>
        </div>
    );
};

export default ThemeToggleServer;

