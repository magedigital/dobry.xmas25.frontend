import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div
            className="popup _fedukPrize _FULL _NOSCROLL"
            onScroll={() => {
                document.dispatchEvent(new CustomEvent('scrollInnerPage'));
            }}
        >
            <div className="popup__inner">
                {this.renderHead()}
                <div className="popup__content _empty _COL _COL_H_CENTER"></div>
            </div>
        </div>
    );
};

export default renderContent;
