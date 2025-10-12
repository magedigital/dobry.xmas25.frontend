import React from 'react';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <>
            <div className="indexMap__decor _1" />
            <div className="indexMap__decor _2" data-section="games">
                игры лосьвилля
            </div>
            <div className="indexMap__decor _3" />
            <div className="indexMap__decor _4" data-section="actions">
                Участвуй в Акциях партнеров
            </div>
            <div className="indexMap__decor _5" />
        </>
    );
};

export default renderDecors;
