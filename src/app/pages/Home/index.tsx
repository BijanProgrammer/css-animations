import React from 'react';
import {Link} from 'react-router-dom';

import Fill from '../Gallery/animations/hover/Fill';

import styles from './index.module.scss';

const Home = () => {
    return (
        <div className={styles['home']}>
            <h2>Hello, friend!</h2>
            <Link className={styles['header__logo__link']} to="/gallery">
                <Fill title="View Gallery" />
            </Link>
        </div>
    );
};

export default Home;
