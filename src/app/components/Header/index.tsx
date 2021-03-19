import React from 'react';
import {Link} from 'react-router-dom';

import GitHubIcon from '@material-ui/icons/GitHub';

import styles from './index.module.scss';

const Header = () => {
	return (
		<header className={styles['header']}>
			<div className={styles['header__logo']}>
				<Link className={styles['header__logo__link']} to="/">CSS Animations</Link>
			</div>
			
			<div className={styles['header__github']}>
				<a href="https://github.com/BijanProgrammer/css-animations" target="_blank" rel="noreferrer"
				   title="GitHub Page">
					<GitHubIcon className={styles['header__github__icon']}/>
				</a>
			</div>
		</header>
	);
};

export default Header;
