import React from 'react';
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom';

import animationRoutes from './animations';

import styles from './index.module.scss';

import {pascalCaseToTitleCase, wordsToTitleCase} from '../../utils/string.utils';

const Gallery = ({match}) => {
    return (
        <div className={styles['host']}>
            <nav className={styles['sidebar']}>
                <ul>
                    {animationRoutes.map((route) => (
                        <li key={route.key}>
                            <NavLink activeClassName={styles['--active']} to={`${match.path}/${route.key}`}>
                                {wordsToTitleCase(route.key)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles['gallery']}>
                <Switch>
                    {animationRoutes.map((route) => (
                        <Route key={route.key} path={`${match.path}/${route.key}`}>
                            <h2 className={styles['gallery__title']}>
                                <Link className={styles['gallery__title__link']} to={match.path}>
                                    Gallery
                                </Link>{' '}
                                |<span className={styles['gallery__title__key']}>{route.key}</span>
                                Animations
                            </h2>

                            <ol className={styles['gallery__table']}>
                                {route.animations.map((animation, i) => (
                                    <li key={i} className={styles['gallery__table__cell']}>
                                        <span className={styles['gallery__table__cell__title']}>
                                            {pascalCaseToTitleCase(animation.title)}
                                        </span>
                                        {animation.element}
                                    </li>
                                ))}
                            </ol>
                        </Route>
                    ))}

                    <Route exact path={match.path}>
                        <h2 className={styles['gallery__title']}>
                            Welcome to <span className={styles['gallery__title__key']}>Gallery</span>!
                        </h2>
                    </Route>

                    <Route>
                        <Redirect to={match.path} />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Gallery;
