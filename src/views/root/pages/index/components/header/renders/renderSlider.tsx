import React from 'react';

import I from '../types.ts';

const renderSlider: I['renderSlider'] = function () {
    return (
        <div className="indexHeader__slider">
            <div className="indexHeader__sliderInner">
                <div className="indexHeader__sliderItems">
                    {new Array(8)
                        .fill({})
                        .map((k, i) => i + 1)
                        .map((item) => (
                            <div className="indexHeader__sliderItem" key={item}>
                                <img
                                    src={require(`@media/toy-${item}.png`)}
                                    alt=""
                                    className="indexHeader__sliderItemImage"
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default renderSlider;
