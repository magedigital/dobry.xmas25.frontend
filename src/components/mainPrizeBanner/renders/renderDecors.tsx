import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <Lazy name="2">
            <div className="mainPrizeBanner__decor _1"></div>
            <div className="mainPrizeBanner__decor _2"></div>
            <div className="mainPrizeBanner__decor _3"></div>
            <div className="mainPrizeBanner__decor _4"></div>
            <div className="mainPrizeBanner__decor _5"></div>
            <div className="mainPrizeBanner__decor _6"></div>
        </Lazy>
    );
};

export default renderDecors;
