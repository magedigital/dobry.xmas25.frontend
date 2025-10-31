import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';

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
