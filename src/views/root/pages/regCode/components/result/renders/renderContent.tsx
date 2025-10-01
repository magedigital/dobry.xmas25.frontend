import React from 'react';

import getEndText from '@functions/getEndText.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { result } = this.props;

    return (
        <div className="popup__height _COL _COL_V_CENTER">
            <div className="popup__success _FULL_W _COL _COL_H_CENTER">
                <div className="popup__successTitle">Код принят!</div>
                <div className="popup__successText">
                    Тебе начислен {result} {getEndText(result, ['балл', 'балла', 'баллов'])}
                </div>
            </div>
        </div>
    );
};

export default renderContent;
