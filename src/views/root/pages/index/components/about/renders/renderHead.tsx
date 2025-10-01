import React from 'react';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="indexAbout__head _COL _COL_H_CENTER">
            {this.renderHeadDecors()}
            <h2 className="indexAbout__headTitle">Добро пожаловать на&nbsp;Добрый® Music Fest</h2>
            <p className="indexAbout__headDescription">
                C 01 апреля 2025 по 31 июля 2025 <br className="_DESKTOP" />
                передвигайся по карте фестиваля, регистрируй коды и&nbsp;чеки с&nbsp;продукцией
                Добрый® и&nbsp;выигрывай топовые призы!
            </p>
        </div>
    );
};

export default renderHead;
