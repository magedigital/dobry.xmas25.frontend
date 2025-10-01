import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderBackLine: I['renderBackLine'] = function () {
    return (
        <Lazy name="3">
            <div className="indexApp__backLine">
                {/* <img
                    alt=""
                    className="indexApp__backLineItem"
                />
                <img
                    alt=""
                    className="indexApp__backLineItem"
                /> */}
            </div>
        </Lazy>
    );
};

export default renderBackLine;
