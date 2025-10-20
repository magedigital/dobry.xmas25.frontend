import React from 'react';

import I from '../types.ts';

const renderSpinner: I['renderSpinner'] = function () {
    return (
        <div className="rafflePrize__spinner">
            <div className="rafflePrize__spinnerArrow"></div>
            <div className="rafflePrize__spinnerBack">
                <img
                    src={require('@media/karusel-1.png')}
                    alt=""
                    className="rafflePrize__spinnerBackImage"
                />
            </div>
        </div>
    );
};

export default renderSpinner;
