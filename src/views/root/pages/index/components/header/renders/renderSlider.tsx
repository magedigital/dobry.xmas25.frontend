import React from 'react';

import I from '../types.ts';

const renderSlider: I['renderSlider'] = function () {
    const { content } = this.props;

    return (
        <div className="indexHeader__slider">
            <div className="indexHeader__sliderInner">
                <div className="indexHeader__sliderItems">
                    {content?.components.anounce.carousel.thumbs.map((item, i) => (
                        <div className="indexHeader__sliderItem" key={i}>
                            <div className="indexHeader__sliderItemInner _FULL">
                                <img
                                    src={item}
                                    alt=""
                                    className="indexHeader__sliderItemImage _FULL"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default renderSlider;
