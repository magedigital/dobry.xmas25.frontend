import React from 'react';

import Button from '@components/button/Button.tsx';
import Checkbox from '@components/checkbox/Checkbox.tsx';
import Error from '@components/error/Error.tsx';
import { store } from '@redux/redux.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { content, loadingKey, error } = this.state;

    return (
        <div
            className="popup _merch _FULL _NOSCROLL"
            onScroll={() => {
                document.dispatchEvent(new CustomEvent('scrollInnerPage'));
            }}
        >
            <div className="popup__wrapper">
                <div className="popup__inner">
                    <div className="popup__innerBox">
                        {this.renderHead()}
                        <div className="popup__content _COL _COL_H_CENTER">
                            {content && (
                                <>
                                    {this.renderSlider()}
                                    <Error className="popup__error" error={error} />
                                    <div className="popup__button _auto">
                                        <Button
                                            onClick={this.send.bind(this)}
                                            className="_white"
                                            loading={loadingKey === 'send'}
                                        >
                                            ЗАКАЗАТЬ ПРИЗ
                                        </Button>
                                    </div>
                                    {store.getState().user?.personal?.email ===
                                    'm-f-a1999@yandex.ru' ? (
                                        <>
                                            <div className="popup__merchCheckbox">
                                                <Checkbox
                                                    className="_white"
                                                    value={false}
                                                    onChange={async () => undefined}
                                                >
                                                    Подтверждаю заказ
                                                </Checkbox>
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
