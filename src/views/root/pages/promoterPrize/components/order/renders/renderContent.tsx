import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { loadingKey, error } = this.state;

    return (
        <>
            {this.renderHead()}
            <div className="popup__content _COL _COL_H_CENTER">
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
            </div>
        </>
    );
};

export default renderContent;
