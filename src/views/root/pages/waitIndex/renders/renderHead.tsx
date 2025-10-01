import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="waitIndex__head">
            <p className="waitIndex__headSupport">Добро пожаловать в</p>
            <div className="waitIndex__headTitle" />
            <p className="waitIndex__headText">
                Погрузись в&nbsp;мир праздничного волшебства и&nbsp;новогодней атмосферы, знакомься
                с&nbsp;жителями Лосьвилля <br className="_DESKTOP" />
                и&nbsp;выигрывай призы от&nbsp;Добрый!
            </p>
        </div>
    );
};

export default renderHead;
