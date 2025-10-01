import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <Lazy name="1">
            <div className="indexAbout__decor _1"></div>
            <div className="indexAbout__decor _2"></div>
            <div className="indexAbout__decor _3"></div>
            <div className="indexAbout__decor _4"></div>
            <div className="indexAbout__decor _5"></div>
            <div className="indexAbout__decor _6"></div>
            <div className="indexAbout__decor _7"></div>
            <div className="indexAbout__decor _8"></div>
            <div className="indexAbout__decor _9"></div>
        </Lazy>
    );
};

export default renderDecors;
