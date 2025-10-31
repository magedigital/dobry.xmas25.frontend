import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderClose: I['renderClose'] = function () {
    return (
        <div className="v2popup__close _CLICK _COL _COL_CENTER" onClick={this.close.bind(this)}>
            <div className="v2popup__closeIcon">
                <Icon name="close" />
            </div>
        </div>
    );
};

export default renderClose;
