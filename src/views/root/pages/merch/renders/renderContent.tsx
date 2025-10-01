import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { content, merchInfoActive, loadingKey, error } = this.state;

    return (
        <div
            className="popup _merch _FULL _COL _NOSCROLL"
            onScroll={() => {
                document.dispatchEvent(new CustomEvent('scrollInnerPage'));
            }}
            onTouchStart={() => {
                this.merchInfoHandler(false);
            }}
        >
            <div className="popup__inner">
                <div className={`popup__merchInfo ${merchInfoActive ? '_active' : ''}`}>
                    Введи свое имя, и увидишь фестивальный нейминг для своей футболки. Если будут
                    возможны варианты, то внутри рамки появятся стрелки для выбора
                </div>
                {this.renderHead()}
                <div className="popup__content _COL _COL_H_CENTER">
                    {content && (
                        <>
                            {this.renderSlider()}
                            <Error className="popup__error" error={error} />
                            <div className="popup__button _auto">
                                <Button
                                    onClick={this.send.bind(this)}
                                    className="_purple"
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
    );
};

export default renderContent;
