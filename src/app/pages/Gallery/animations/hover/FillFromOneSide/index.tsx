import React from 'react';

import Button from '../../../../../components/Button';

import styles from './index.module.scss';

const FillFromOneSide = ({title = 'Fill From One Side'}) => {
    return <Button className={styles['button']} name={title}/>;
};

export default FillFromOneSide;
