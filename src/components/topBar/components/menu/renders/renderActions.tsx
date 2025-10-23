import React from 'react';

import Button from '@components/button/Button.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderActions: I['renderActions'] = function () {
    return (
        <div className="menu__actions _FULL _COL">
            <div className="menu__action">
                <Button
                    className="_menuReg _largeSize"
                    onClick={() => {
                        changePage({ pageName: 'regCode' });
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
                    }}
                >
                    Личный кабинет
                </Button>
            </div>
            <div className="menu__action">
                <Button
                    className="_menuCollection _largeSize"
                    onClick={() => {
                        changePage({ pageName: 'raffle-prize' });
                    }}
                >
                    Cобери коллекцию лосей
                </Button>
            </div>
        </div>
    );
};

export default renderActions;
