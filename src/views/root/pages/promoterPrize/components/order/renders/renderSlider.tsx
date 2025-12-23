import React from 'react';

import Checkbox from '@components/checkbox/Checkbox.tsx';
import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const renderSlider: I['renderSlider'] = function () {
    const { isConfirm } = this.state;

    return (
        <div className="popup__merch _FULL_W _COL _COL_H_CENTER">
            <Media current="desktop">
                {(['prev', 'next'] as const).map((key) => (
                    <div className={`popup__merchButton _CLICK _COL _COL_CENTER _${key}`} key={key}>
                        <i className="popup__merchButtonIcon">
                            <Icon name={key === 'prev' ? 'arrow-prev-short' : 'arrow-next-short'} />
                        </i>
                    </div>
                ))}
            </Media>
            <div className="popup__merchInner _FULL_W">
                <div className="popup__merchItems _vis">
                    {(Object.keys(this.prizes) as (keyof typeof this.prizes)[]).map((key) => {
                        const prize = this.prizes[key];

                        return (
                            <div className="popup__merchItem _COL _COL_H_CENTER" key={key}>
                                <div className="popup__merchItemInner">
                                    <div className={`merch _FULL`}>
                                        <div className="merch__inner _FULL">
                                            <div
                                                className={`merch__content _FULL _COL _COL_H_CENTER`}
                                            >
                                                <div className={`merch__slider _FULL_W`}>
                                                    <div className="merch__sliderInner _FULL_W">
                                                        <div className="merch__sliderItems">
                                                            <div className="merch__sliderItem">
                                                                <img
                                                                    src={require(
                                                                        `@media/${prize.thumb}`,
                                                                    )}
                                                                    alt=""
                                                                    className="merch__sliderItemImage _FULL"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="merch__title"
                                                    dangerouslySetInnerHTML={{
                                                        __html: prize.title,
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="popup__merchCheckbox">
                <Checkbox
                    className="_white"
                    value={!!isConfirm}
                    onChange={async () => {
                        await setAsyncState.call(this, { isConfirm: !isConfirm });
                    }}
                >
                    Подтверждаю заказ
                </Checkbox>
            </div>
        </div>
    );
};

export default renderSlider;
