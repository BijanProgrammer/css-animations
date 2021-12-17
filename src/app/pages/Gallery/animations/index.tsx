import {CssAnimationRoute} from '../../../models/css-animation-route';
import {animations as hoverAnimations} from './hover';
import {animations as loadingAnimations} from './loading';

const animationRoutes: CssAnimationRoute[] = [
    {
        key: 'hover',
        animations: hoverAnimations,
    },
    {
        key: 'loading',
        animations: loadingAnimations,
    },
    {
        key: 'coming soon!',
        animations: [],
    },
];

export default animationRoutes;
