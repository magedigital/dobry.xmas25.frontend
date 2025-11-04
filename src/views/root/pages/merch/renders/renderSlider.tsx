import React from 'react';

import Checkbox from '@components/checkbox/Checkbox.tsx';
import Icon from '@components/icon/Icon.tsx';
import Media from '@components/media/Media.tsx';
import setAsyncState from '@functions/setAsyncState.ts';

import Merch from '../components/merch/Merch.tsx';

import I from '../types.ts';

const renderSlider: I['renderSlider'] = function () {
    const { content, isConfirm, items = [] } = this.state;

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
                <div className="popup__merchItems">
                    {content!.components.buy.merch.prizes.map((merch, key) => (
                        <div
                            className="popup__merchItemsItem popup__merchItem _COL _COL_H_CENTER"
                            key={key}
                        >
                            <div className="popup__merchItemInner"></div>
                        </div>
                    ))}
                </div>

                <div className="popup__merchReactItems">
                    {items.map((merch, key) => (
                        <div className="popup__merchItem _COL _COL_H_CENTER" key={key}>
                            <div className="popup__merchItemInner">
                                <Merch
                                    merch={merch}
                                    festNaming={content!.components.buy.merch.festNaming}
                                    disabled={!merch.isCurrent}
                                    infoHandler={this.merchInfoHandler.bind(this)}
                                    customCallback={async (currentCustomValue) => {
                                        await setAsyncState.call(this, { currentCustomValue });
                                    }}
                                    setLoading={async (merchLoading, error) => {
                                        await setAsyncState.call(this, {
                                            loadingKey: merchLoading ? 'merch' : undefined,
                                            error,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    ))}
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
