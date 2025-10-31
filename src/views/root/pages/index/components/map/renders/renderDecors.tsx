import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderDecors: I['renderDecors'] = function () {
    return (
        <Lazy name="2">
            <div className="indexMap__decor _1 left_direction">
                <div className="indexMap__decor_arrow"></div>
                <div className="indexMap__decor_arrow"></div>
                <div className="indexMap__decor_arrow"></div>
            </div>
            <div className="indexMap__decor _2" data-section="games">
                <div className="indexMap__decor_poster"></div>
                <div className="indexMap__decor_lights"></div>
                <div className="indexMap__decor_lights"></div>
                <div className="indexMap__decor_lights"></div>
                <div className="indexMap__decor_title">игры лосьвилля</div>
            </div>
            <div className="indexMap__decor _4" data-section="actions">
                <div className="indexMap__decor_poster"></div>
                <div className="indexMap__decor_lights"></div>
                <div className="indexMap__decor_lights"></div>
                <div className="indexMap__decor_lights"></div>
                <div className="indexMap__decor_title">Участвуй в Акциях партнеров</div>
            </div>

            <div className="indexMap__decor _3 right_direction">
                <div className="indexMap__decor_arrow"></div>
                <div className="indexMap__decor_arrow"></div>
                <div className="indexMap__decor_arrow"></div>
            </div>
            <div className="indexMap__decor _5 left_direction">
                <div className="indexMap__decor_arrow"></div>
                <div className="indexMap__decor_arrow"></div>
                <div className="indexMap__decor_arrow"></div>
            </div>
        </Lazy>
    );
};

export default renderDecors;
