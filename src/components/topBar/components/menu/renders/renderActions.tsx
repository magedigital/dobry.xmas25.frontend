import React from 'react';

import Button from '@components/button/Button.tsx';
import changePage from '@functions/changePage.ts';
import handlerPopup from '@functions/handlerPopup.ts';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderActions: I['renderActions'] = function () {
    const { handler } = this.props;

    return (
        <div className="menu__actions _FULL _COL">
            <div className="menu__action">
                <Button
                    className="_menuReg _largeSize"
                    onClick={() => {
                        changePage({ pageName: 'regCode' });
                        sendGoal('menuCodeRef');
                    }}
                >
                    Регистрация кода
                </Button>
            </div>
            <div className="menu__action">
                <Button
                    className="_menuProfile _largeSize"
                    onClick={() => {
                        changePage({ pageName: 'profile' });
                        sendGoal('menuProfile');
                    }}
                >
                    Личный кабинет
                </Button>
            </div>
            <div className="menu__action">
                <Button
                    className="_menuCollection _largeSize"
                    onClick={() => {
                        handlerPopup('collectionPopup', { isShow: true });
                        sendGoal('menuElks');

                        handler(false);
                    }}
                >
                    Cобери коллекцию лосей
                </Button>
            </div>
        </div>
    );
};

export default renderActions;
