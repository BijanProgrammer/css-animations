import React from 'react';

import styles from './index.module.scss';

const ButtonExpand = () => {
	return (
		<button className={styles['button']}>
			{title}
		</button>
	);
};

export const title = 'Button Expand';
export default ButtonExpand;
