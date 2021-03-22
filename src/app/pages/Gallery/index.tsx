import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import NotFound from '../NotFound';

import animationRoutes from './animations';

import styles from './index.module.scss';

import {toTitleCase} from '../../utils/string-manipulation';

const Gallery = ({match}) => {
    return (
        <div className={styles['host']}>
            <nav className={styles['sidebar']}>
                <ul>
                    {
                        animationRoutes.map(route => (
                            <li key={route.key}>
                                <Link className={styles['header__logo__link']}
                                      to={`${match.path}/${route.key}`}>
                                    {toTitleCase(route.key)}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            
            <div className={styles['gallery']}>
                <Switch>
                    {
                        animationRoutes.map(route => (
                            <Route key={route.key}
                                   path={`${match.path}/${route.key}`}>
                                <h2 className={styles['gallery__title']}>
                                    Gallery |
                                    <span
                                        className={styles['gallery__title__key']}>{route.key}</span>
                                    Animations
                                </h2>
                                
                                <ol className={styles['gallery__table']}>
                                    {
                                        route.animations.map((animation, i) => (
                                            <li key={i}
                                                className={styles['gallery__table__cell']}>
                                                {animation}
                                            </li>
                                        ))
                                    }
                                </ol>
                            </Route>
                        ))
                    }
                    
                    <Route exact path={`${match.path}/`}>
                        Welcome to Gallery!
                    </Route>
                    
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
    );
};

export default Gallery;
