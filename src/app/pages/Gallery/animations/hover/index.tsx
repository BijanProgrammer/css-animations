import React from 'react';

import Expand from './Expand';
import FillFromOneSide from './FillFromOneSide';
import Fill from './Fill';
import NuclearFusion from './NuclearFusion';
import FillFromOppositeSides from './FillFromOppositeSides';

const wrapper = {
    animations: [<Expand />, <Fill />, <FillFromOneSide />, <FillFromOppositeSides />, <NuclearFusion />],
};

export default wrapper;
