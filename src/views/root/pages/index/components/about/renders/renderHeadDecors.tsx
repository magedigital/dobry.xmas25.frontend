import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderHeadDecors: I['renderHeadDecors'] = function () {
    return (
        <Lazy name="1">
            <div className="indexAbout__headDecor _1"></div>
            <div className="indexAbout__headDecor _2"></div>
            <div className="indexAbout__headDecor _3"></div>
            <div className="indexAbout__headDecor _4"></div>
            <div className="indexAbout__headDecor _5"></div>
        </Lazy>
    );
};

export default renderHeadDecors;
