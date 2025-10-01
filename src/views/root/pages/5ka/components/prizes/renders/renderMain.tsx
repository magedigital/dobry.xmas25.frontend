import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';

import I from '../types.ts';

const renderMain: I['renderMain'] = function () {
    return (
        <div className="index5kaPrizes__main _FULL_W _COL _COL_H_CENTER">
            <Lazy name="1">
                {new Array(8).fill({}).map((item, key) => (
                    <div className={`index5kaPrizes__mainDecor _${key + 1}`} key={key} />
                ))}
            </Lazy>

            <div className="index5kaPrizes__mainInner">
                <Lazy name="2">
                    {new Array(11)
                        .fill({})
                        .map((item, key) =>
                            key === 4 ? (
                                <></>
                            ) : (
                                <div
                                    className={`index5kaPrizes__mainInnerDecor _${key + 2}`}
                                    key={key}
                                />
                            ),
                        )}
                </Lazy>

                <div className="index5kaPrizes__mainInnerBox _FULL_W _COL _COL_H_CENTER">
                    <div className="index5kaPrizes__mainInnerDecor _1" />
                    <div className="index5kaPrizes__mainInnerDecor _6" />
                    <div className="index5kaPrizes__mainBox _FULL_W _COL _COL_H_CENTER">
                        <h3 className="index5kaPrizes__mainTitle">Главные призы</h3>
                        <div className="index5kaPrizes__mainPrize">
                            <div className="index5kaPrizes__mainPrizeCount _COL _COL_CENTER">
                                15
                                <span>шт</span>
                            </div>
                        </div>
                        <p className="index5kaPrizes__mainDescription">
                            Поездка на двоих на музыкальный фестиваль этого лета
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderMain;
