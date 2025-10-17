import React from 'react';

import Button from '@components/button/Button.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { setStep } = this.props;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                <div className="popup__button">
                    <Button
                        className="_purple"
                        onClick={() => {
                            setStep('start');
                        }}
                    >
                        Ещё код
                    </Button>
                </div>
                <div className="popup__button">
                    <Button
                        className="_white"
                        onClick={() => {
                            changePage({ pageName: 'profile' });
                        }}
                    >
                        Закрыть окно
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
