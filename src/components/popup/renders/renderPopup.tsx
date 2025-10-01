import React from 'react';

import I from '../types.ts';

const renderPopup: I['renderPopup'] = function ({ children, onClick, className = '' }) {
    return (
        <div
            ref={this.parent}
            className={`popup _FULL _COL _${this.popupName} ${className}`}
            onClick={onClick}
        >
            <div className="popup__inner">
                {this.renderClose()}
                <div className="popup__innerBox">{children}</div>
            </div>
        </div>
    );
};

export default renderPopup;
