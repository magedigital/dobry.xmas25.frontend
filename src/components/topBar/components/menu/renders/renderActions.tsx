import React from 'react';

import Button from '@components/button/Button.tsx';

import I from '../types.ts';

const renderActions: I['renderActions'] = function () {
    return (
        <div className="menu__actions _FULL _COL">
            <div className="menu__action">
                <Button className="_menuReg _largeSize" onClick={() => undefined}>
                    Регистрация кода
                </Button>
            </div>
            <div className="menu__action">
                <Button className="_menuProfile _largeSize" onClick={() => undefined}>
                    Личный кабинет
                </Button>
            </div>
            <div className="menu__action">
                <Button className="_menuCollection _largeSize" onClick={() => undefined}>
                    Cобери коллекцию лосей
                </Button>
            </div>
        </div>
    );
};

export default renderActions;
