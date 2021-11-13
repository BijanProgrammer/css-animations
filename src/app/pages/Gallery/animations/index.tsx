import IAnimationRoute from '../../../models/IAnimationRoute';
import hover from './hover';

const animationRoutes: IAnimationRoute[] = [
    {
        key: 'hover',
        animations: hover.animations,
    },
    {
        key: 'coming soon!',
        animations: [],
    },
];

export default animationRoutes;
