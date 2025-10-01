import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div className="container" id="container">
            <div className="game" id="game"></div>
        </div>
    );
};

export default renderContent;
