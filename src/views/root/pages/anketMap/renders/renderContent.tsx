import React from 'react';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    return (
        <div className="page__content _FULL_W _COL _COL_H_CENTER">
            {this.renderHead()}
            <div className="page__map">
                <div className="page__mapInner">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
