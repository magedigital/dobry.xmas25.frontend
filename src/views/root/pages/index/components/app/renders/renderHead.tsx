import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="indexApp__head _FULL _COL _COL_H_CENTER">
            <h4 className="indexApp__headTitle">Установи мобильное приложение</h4>
            <p className="indexApp__headDescription">и будь в курсе всех новых акций</p>
        </div>
    );
};

export default renderHead;
