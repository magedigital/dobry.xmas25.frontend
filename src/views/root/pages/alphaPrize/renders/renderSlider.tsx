import React from 'react';

import Checkbox from '@components/checkbox/Checkbox.tsx';
import setAsyncState from '@functions/setAsyncState.ts';

import Merch from '../components/merch/Merch.tsx';

import I from '../types.ts';

const renderSlider: I['renderSlider'] = function () {
    const { content, isConfirm } = this.state;

    console.log(content);

    const merch = content?.components.buy.merch.prizes.find((p) => p.code === 'ALPHA_ELK');

    if (!merch) {
        return;
    }

    return (
        <div className="popup__merch _FULL_W _COL _COL_H_CENTER">
            <div className="popup__merchInner _FULL_W">
                <div className="popup__merchItems">
                    <div className="popup__merchItem _COL _COL_H_CENTER">
                        <div className="popup__merchItemInner">
                            <Merch
                                disabled={false}
                                merch={merch}
                                festNaming={content!.components.buy.merch.festNaming}
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
