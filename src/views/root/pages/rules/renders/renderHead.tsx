import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="page__head _COL _COL_H_CENTER">
            <h3 className="page__title">Как участвовать</h3>
            <p className="page__description">01 ноября 2025 по 17 января 2026</p>
        </div>
    );
};

export default renderHead;
