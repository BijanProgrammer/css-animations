import React from 'react';

import styles from './index.module.scss';

const ConcentricCircles = ({count = 10}) => {
    let Circles: React.ReactNode = '';
    for (let i = 0; i < count; i++) Circles = <div className={styles['circle']}>{Circles}</div>;

    return <div className={styles['wrapper']}>{Circles}</div>;
};

export default ConcentricCircles;
