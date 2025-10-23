import React from 'react';

import I from '../types.ts';

const prizes = {
    1: {
        thumb: 'karusel-prize--01.png',
        name: '+1 балл',
    },
    2: {
        thumb: 'karusel-prize--02.png',
        name: '25 рублей <br/>на телефон',
    },
    3: {
        thumb: 'karusel-prize--03.png',
        name: 'Промокод <br/>от партнера',
    },
};

const renderSlider: I['renderSlider'] = function () {
    return (
        <div className="rafflePrize__slider">
            <div className="rafflePrize__sliderLights _left">
                <div className="rafflePrize__sliderLight _1"></div>
                <div className="rafflePrize__sliderLight _2"></div>
                <div className="rafflePrize__sliderLight _3"></div>
            </div>
            <div className="rafflePrize__sliderLights _right">
                <div className="rafflePrize__sliderLight _3"></div>
                <div className="rafflePrize__sliderLight _2"></div>
                <div className="rafflePrize__sliderLight _1"></div>
            </div>
            <div className="rafflePrize__sliderLights _left _result">
                <div className="rafflePrize__sliderLight _1"></div>
                <div className="rafflePrize__sliderLight _2"></div>
                <div className="rafflePrize__sliderLight _3"></div>
            </div>
            <div className="rafflePrize__sliderLights _right _result">
                <div className="rafflePrize__sliderLight _3"></div>
                <div className="rafflePrize__sliderLight _2"></div>
                <div className="rafflePrize__sliderLight _1"></div>
            </div>
            <div className="rafflePrize__sliderInner">
                <div className="rafflePrize__sliderItems">
                    {new Array(40).fill({}).map((t, i) => {
                        const index = ((i % 3) + 1) as 1 | 2 | 3;
                        const isOdd = i % 2 === 1;
                        const prize = prizes[index];

                        return (
                            <div
                                className={`rafflePrize__sliderItem _COL _COL_H_CENTER ${isOdd ? '_odd' : ''}`}
                                key={i}
                            >
                                <div className="rafflePrize__sliderItemHead">
                                    <img
                                        src={require(`@media/inners/${prize.thumb}`)}
                                        alt=""
                                        className="rafflePrize__sliderItemImage"
                                    />
                                </div>
                                <p
                                    className="rafflePrize__sliderItemName"
                                    dangerouslySetInnerHTML={{ __html: prize.name }}
                                ></p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default renderSlider;
