'use client';

import React, { useState, useEffect } from 'react';
import styles from './ThemeToggleClient.module.css';

const ThemeToggleClient = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') === 'dark';
        setIsDarkMode(savedTheme);
        document.body.classList.toggle('dark-mode', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.body.classList.toggle('dark-mode', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <div className={styles.theme_toggle_container} onClick={toggleTheme}>
            <div className={styles.theme_toggle_background}>
                <div
                    className={`${styles.theme_toggle_slider} ${isDarkMode ? styles.slider_dark : styles.slider_light}`}
                ></div>
            </div>
            <span
                className={`${styles.theme_toggle_label} ${isDarkMode ? styles.label_dark : styles.label_light}`}
            >
                {isDarkMode ? 'Dark' : 'Light'}
            </span>
        </div>
    );
};

export default ThemeToggleClient;




