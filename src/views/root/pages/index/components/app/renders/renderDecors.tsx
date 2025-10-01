import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <Lazy name="2">
            <div className="indexApp__decor _1" />
            <div className="indexApp__decor _2" />
        </Lazy>
    );
};

export default renderDecors;
