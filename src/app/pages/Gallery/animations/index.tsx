import IAnimationRoute from '../../../models/IAnimationRoute';
import hover from './hover';

const animationRoutes: IAnimationRoute[] = [
    {
        key: 'hover',
        animations: hover.animations
    },
    {
        key: 'This is a TEST',
        animations: []
    },
    {
        key: 'and This is another TEST',
        animations: []
    },
    {
        key: 'ALso another TEST!',
        animations: []
    },
    {
        key: 'YET another TEST!!!',
        animations: []
    }
];

export default animationRoutes;
