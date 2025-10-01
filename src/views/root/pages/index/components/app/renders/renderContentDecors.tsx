import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderContentDecors: I['renderContentDecors'] = function () {
    return (
        <Lazy name="3">
            <div className="indexApp__innerContentDecor _1" />
            <div className="indexApp__innerContentDecor _2" />
            <div className="indexApp__innerContentDecor _3" />
            <div className="indexApp__innerContentDecor _4" />
            <div className="indexApp__innerContentDecor _5" />
            <div className="indexApp__innerContentDecor _6" />
        </Lazy>
    );
};

export default renderContentDecors;
