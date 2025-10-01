import React from 'react';

import Button from '@components/button/Button.tsx';
import { dispatcher } from '@redux/redux.ts';

import I from '../types.ts';

const renderCards: I['renderCards'] = function () {
    return (
        <div className="waitIndex__cards">
            <div
                className="waitIndex__card _los _CLICK"
                onClick={() => {
                    dispatcher({ type: 'losvillPopup', data: { isShow: true } });
                }}
            >
                <div className="waitIndex__cardInner _COL _COL_H_CENTER">
                    <h3 className="waitIndex__cardTitle">придумай имена для лосИков</h3>
                    <p className="waitIndex__cardText">и участвуй в розыгрыше коллекции</p>
                    <div className="waitIndex__cardButton _CLICK">
                        <Button className="_banner1" onClick={() => undefined}>
                            участвовать
                        </Button>
                    </div>
                </div>
            </div>
            <div
                className="waitIndex__card _man _CLICK"
                onClick={() => {
                    dispatcher({ type: 'manPopup', data: { isShow: true } });
                }}
            >
                <div className="waitIndex__cardInner _COL _COL_H_CENTER">
                    <h3 className="waitIndex__cardTitle">стань участником</h3>
                    <p className="waitIndex__cardText">
                        Специального выпуска «пряток» с&nbsp;Димой Масленниковым в&nbsp;Лосьвилле
                    </p>
                    <div className="waitIndex__cardButton _CLICK">
                        <Button className="_banner2" onClick={() => undefined}>
                            участвовать
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderCards;
