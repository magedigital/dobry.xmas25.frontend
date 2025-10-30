import React from 'react';

import setSpacesInText from '@functions/setSpacesInText.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { items, count } = this.state;
    const { merch, disabled, customCallback } = this.props;

    return (
        <div
            className={`merch__content _FULL _COL _COL_H_CENTER ${merch.custom === '1' ? '_custom' : ''}`}
        >
            {merch.code === 'DOBRO' ? (
                <>
                    <div className="merch__dobro">
                        <img src={merch.thumb} alt="" className="merch__dobroImage" />
                        <p
                            className="merch__dobroSupport"
                            dangerouslySetInnerHTML={{ __html: setSpacesInText(merch.subtitle) }}
                        ></p>
                        <div className="merch__dobroField">
                            <input
                                className="merch__dobroInput"
                                type="text"
                                value={count || ''}
                                disabled={disabled}
                                onChange={(e) => {
                                    const rCount = e.target.value.replace(/\D/gi, '');

                                    this.setState({ count: rCount });

                                    customCallback(rCount);
                                }}
                            />
                        </div>
                    </div>

                    <div
                        className="merch__dobroText"
                        dangerouslySetInnerHTML={{ __html: setSpacesInText(merch.description) }}
                    ></div>
                </>
            ) : (
                <>
                    <div className={`merch__slider _FULL_W ${items.length > 1 ? '_active' : ''}`}>
                        <div className="merch__sliderInner _FULL_W">
                            <div className="merch__sliderItems">
                                <div className="merch__sliderItem">
                                    <img
                                        src={merch.thumb}
                                        alt=""
                                        className="merch__sliderItemImage _FULL"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="merch__title">{merch.title}</div>
                    <div className="merch__count">{merch.price}</div>
                </>
            )}
        </div>
    );
};

export default renderContent;
