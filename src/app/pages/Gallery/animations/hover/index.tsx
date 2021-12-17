import React from 'react';

import Expand from './Expand';
import FillFromOneSide from './FillFromOneSide';
import Fill from './Fill';
import NuclearFusion from './NuclearFusion';
import FillFromOppositeSides from './FillFromOppositeSides';
import {CssAnimation} from '../../../../models/css-animation';

export const animations: CssAnimation[] = [
    { title : 'Expand',   element: <Expand />},
    { title : 'Fill',   element: <Fill />},
    { title : 'FillFromOneSide',   element: <FillFromOneSide />},
    { title : 'FillFromOppositeSides',   element: <FillFromOppositeSides />},
    { title : 'NuclearFusion',   element: <NuclearFusion />},
];
