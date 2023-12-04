import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous action, e.g., API call or data loading
        setTimeout(() => {
            setLoading(false);
        }, 2500); // Change the time as needed
    }, []);

    return isLoading ? (
        <div className={styles.preloaderContainer}>
            <div className={styles.loader}></div>
        </div>
    ) : 
    (
        <h1> hello</h1>
    );
};

export default Preloader;
