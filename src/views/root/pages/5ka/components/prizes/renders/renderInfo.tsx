import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderInfo: I['renderInfo'] = function () {
    return (
        <div className="index5kaPrizes__info">
            <div className="index5kaPrizes__infoTop" />
            <div className="index5kaPrizes__infoInner _FULL _COL _COL_CENTER">
                <Lazy name="2">
                    {new Array(8).fill({}).map((item, key) => (
                        <div className={`index5kaPrizes__infoDecor _${key + 1}`} key={key} />
                    ))}
                </Lazy>
                <p className="index5kaPrizes__infoTitle">
                    Получай <b>x2 шанса</b> в&nbsp;розыгрышах за продукты в&nbsp;банках объемом{' '}
                    <b>0,25 л</b>
                </p>
                <div className="index5kaPrizes__infoSupport _COL _COL_CENTER">
                    <span className="index5kaPrizes__infoSupportText">шанса</span>
                </div>
            </div>
        </div>
    );
};

export default renderInfo;
