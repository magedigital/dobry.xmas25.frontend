import React from 'react';

import I from '../types.ts';

const renderBack: I['renderBack'] = function () {
    return (
        <div className="indexHeader__back">
            <div className="indexHeader__backStart">
                <div className="indexHeader__backStartShadow"></div>
            </div>
            <div className="indexHeader__backEnd">
                <div className="indexHeader__backEndInner">
                    <div className="indexHeader__backEndShadow"></div>
                </div>
            </div>
        </div>
    );
};

export default renderBack;
