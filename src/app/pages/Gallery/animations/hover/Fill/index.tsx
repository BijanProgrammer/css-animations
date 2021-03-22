import React from 'react';

import Button from '../../../../../components/Button';

import styles from './index.module.scss';

const Fill = ({title = 'Fill'}) => {
    return <Button className={styles['button']} name={title}/>;
};

export default Fill;
