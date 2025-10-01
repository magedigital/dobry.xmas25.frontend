import React from 'react';

import Icon from '@components/icon/Icon.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { items } = this.state;
    const { merch } = this.props;

    return (
        <div
            className={`merch__content _FULL _COL _COL_H_CENTER ${merch.custom === '1' ? '_custom' : ''}`}
        >
            <div className={`merch__slider _FULL_W ${items.length > 1 ? '_active' : ''}`}>
                {merch.custom === '1' && (
                    <>
                        <div className="merch__sliderSupport">
                            Есть <br />
                            варианты, <br />
                            листай;{')'}
                        </div>
                        {(['prev', 'next'] as const).map((key) => (
                            <div
                                className={`merch__sliderButton _CLICK _COL _COL_CENTER _${key}`}
                                key={key}
                            >
                                <i className="merch__sliderButtonIcon">
                                    <Icon
                                        name={
                                            key === 'prev' ? 'arrow-prev-short' : 'arrow-next-short'
                                        }
                                    />
                                </i>
                            </div>
                        ))}
                    </>
                )}
                <div className="merch__sliderInner _FULL_W">
                    <div className="merch__sliderItems">
                        {merch.custom === '1' ? (
                            <>
                                {items.map((item, key) => (
                                    <div className="merch__sliderItem" key={key}>
                                        <div className="merch__sliderItemName _COL _COL_CENTER">
                                            <div
                                                className="merch__sliderItemNameInner"
                                                dangerouslySetInnerHTML={{ __html: item }}
                                            />
                                        </div>
                                        <img
                                            src={merch.thumb}
                                            alt=""
                                            className="merch__sliderItemImage _FULL"
                                        />
                                    </div>
                                ))}
                            </>
                        ) : (
                            <>
                                <div className="merch__sliderItem">
                                    <img
                                        src={merch.thumb}
                                        alt=""
                                        className="merch__sliderItemImage _FULL"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="merch__title">{merch.title}</div>
            <div className="merch__count">{merch.price}</div>
        </div>
    );
};

export default renderContent;
