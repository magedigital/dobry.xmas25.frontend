import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="page__head _COL _COL_H_CENTER">
            <h3 className="page__title">Как участвовать</h3>
            <p className="page__description">C 01 апреля по 31 июля 2025</p>
        </div>
    );
};

export default renderHead;
