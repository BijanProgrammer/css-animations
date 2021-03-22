import React from 'react';

import Expand from './Expand';
import FillFromOneSide from './FillFromOneSide';
import Fill from './Fill';

const wrapper = {
    animations: [
        <Expand/>,
        <Fill/>,
        <FillFromOneSide/>
    ]
};

export default wrapper;
