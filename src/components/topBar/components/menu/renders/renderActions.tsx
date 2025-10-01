import React from 'react';

import Link from '@components/link/Link.tsx';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderActions: I['renderActions'] = function () {
    const { handler } = this.props;

    return (
        <div className="menu__actions _FULL _COL">
            <Link
                className="menu__action _ROW _ROW_V_CENTER _FULL _CLICK _code"
                pageName="regCode"
                callback={() => {
                    handler(false);

                    sendGoal('regCodeBtn,headerRegCodeBtn');
                }}
            >
                <div className="menu__actionBack" />
                <div className="menu__actionInner _FULL _ROW">
                    <div className="menu__actionContent">Регистрация кода</div>
                    <div className="menu__actionContent _hide">Регистрация кода</div>
                </div>
            </Link>
            <Link
                className="menu__action _ROW _ROW_V_CENTER _FULL _CLICK _pyt"
                pageName="5ka"
                callback={() => {
                    handler(false);

                    sendGoal('5kaBtn');
                }}
            >
                <div className="menu__actionBack" />
                <div className="menu__actionInner _FULL _ROW">
                    <div className="menu__actionContent">Акция в «Пятёрочке»</div>
                    <div className="menu__actionContent _hide">Акция в «Пятёрочке»</div>
                </div>
            </Link>
            <Link
                className="menu__action _ROW _ROW_V_CENTER _FULL _CLICK _lk"
                pageName="auth-login"
                callback={() => {
                    handler(false);

                    sendGoal('profileBtn,headerProfileBtn');
                }}
            >
                <div className="menu__actionBack" />
                <div className="menu__actionInner _FULL _ROW">
                    <div className="menu__actionContent">Личный кабинет</div>
                    <div className="menu__actionContent _hide">Личный кабинет</div>
                </div>
            </Link>
        </div>
    );
};

export default renderActions;
