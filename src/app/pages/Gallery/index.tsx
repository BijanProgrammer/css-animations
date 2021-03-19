import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NotFound from '../NotFound';

import animationRoutes from './animations';

import styles from './index.module.scss';

const Gallery = () => {
	return (
		<div className={styles['gallery']}>
			<Router>
				<Switch>
					{
						animationRoutes.map(route => (
							<Route key={route.key} path={`/gallery/${route.key}`}>
								<div className={styles['gallery__table']}>
									{
										route.animations.map((animation, i) => (
											<div key={i} className={styles['gallery__table__cell']}>
												{animation}
											</div>
										))
									}
								</div>
							</Route>
						))
					}
					
					<Route component={NotFound}/>
				</Switch>
			</Router>
		</div>
	);
};

export default Gallery;
