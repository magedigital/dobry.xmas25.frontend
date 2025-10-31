import React from 'react';

import I from '../types.ts';

const fakePrize = {
    thumb: '',
    title: '',
};

const renderSlider: I['renderSlider'] = function () {
    const { curIndex, prize, items = [] } = this.state;

    return (
        <div className={`rafflePrize__slider ${items.length ? '_ready' : ''}`}>
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
                    {new Array(30).fill({}).map((item, i) => {
                        const index = i % items.length;
                        const isOdd = i % 2 === 1;
                        const isResult = i === curIndex && prize;
                        const thisPrize =
                            (isResult ? { thumb: prize.image, title: prize.name } : items[index]) ||
                            fakePrize;

                        return (
                            <div
                                className={`rafflePrize__sliderItem _COL _COL_H_CENTER ${isOdd ? '_odd' : ''}`}
                                key={i}
                            >
                                <div className="rafflePrize__sliderItemHead">
                                    <img
                                        src={thisPrize.thumb}
                                        alt=""
                                        className="rafflePrize__sliderItemImage"
                                    />
                                </div>
                                <p
                                    className="rafflePrize__sliderItemName"
                                    dangerouslySetInnerHTML={{ __html: thisPrize.title }}
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
