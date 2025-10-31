import React from 'react';

import Fade from '@components/fade/Fade.tsx';

import I from '../types.ts';

const renderOver: I['renderOver'] = function () {
    const { isOver } = this.state;

    return (
        <Fade className="v2upload__over _FULL _COL _COL_CENTER" isShow={!!isOver}>
            <p className="v2upload__overText">Отпусти кнопку мышки</p>
        </Fade>
    );
};

export default renderOver;
