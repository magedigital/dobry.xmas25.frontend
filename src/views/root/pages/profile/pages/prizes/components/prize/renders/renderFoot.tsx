import React from 'react';

import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { prize } = this.props;

    return (
        <div className="prize__foot _COL _COL_H_CENTER">
            <p
                className="prize__name"
                dangerouslySetInnerHTML={{ __html: setSpacesInText(prize.title) }}
            ></p>
        </div>
    );
};

export default renderFoot;
