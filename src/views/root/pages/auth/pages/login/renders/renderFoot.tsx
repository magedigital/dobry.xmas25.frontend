import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderFoot: I['renderFoot'] = function () {
    const { loadingKey, error } = this.state;

    return (
        <div className="popup__foot _FULL_W _COL _COL_H_CENTER">
            <Error className="popup__error" error={error} />
            <div className="popup__buttons _FULL_W _ROW _ROW_H_CENTER">
                <div className="popup__button">
                    <Button
                        className="_purple"
                        onClick={() => {
                            changePage({ pageName: 'auth-reg' });
                        }}
                    >
                        Регистрация
                    </Button>
                </div>
                <div className="popup__button">
                    <Button
                        className="_white"
                        onClick={this.requestLogin.bind(this)}
                        loading={loadingKey === 'send'}
                    >
                        Войти
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default renderFoot;
