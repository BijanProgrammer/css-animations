import React from 'react';

import Button from '../../../../../components/Button';

import styles from './index.module.scss';

const FillFromOppositeSides = ({title = 'Fill From Opposite Sides'}) => {
    return <Button className={styles['button']} name={title} />;
};

export default FillFromOppositeSides;
