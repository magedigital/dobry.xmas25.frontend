import React from 'react';

import I from '../types.ts';

const renderTopBar: I['renderTopBar'] = function () {
    return (
        <div className="waitIndex__topBar _SECTION">
            <div className="waitIndex__topBarInner _INNER">
                <div className="waitIndex__topBarLogo"></div>
                <div className="waitIndex__topBarInfo">
                    <p className="waitIndex__topBarInfoSupport">старт акции</p>
                    <p className="waitIndex__topBarInfoValue">1 ноября</p>
                </div>
            </div>
        </div>
    );
};

export default renderTopBar;
