import React from 'react';

import Button from '../../../../../components/Button';

import styles from './index.module.scss';

const Expand = ({title = 'Expand'}) => {
    return <Button className={styles['button']} name={title}/>;
};

export default Expand;
