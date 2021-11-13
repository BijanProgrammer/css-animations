import React from 'react';

import Button from '../../../../../components/Button';

import styles from './index.module.scss';

const NuclearFusion = ({title = 'Nuclear Fusion'}) => {
    return <Button className={styles['button']} name={title} />;
};

export default NuclearFusion;
