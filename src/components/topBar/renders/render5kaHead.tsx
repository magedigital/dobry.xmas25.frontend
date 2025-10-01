import React from 'react';

import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import Media from '@components/media/Media.tsx';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const render5kaHead: I['render5kaHead'] = function () {
    return (
        <>
            <div className="topBar__head _5ka _SECTION">
                <div className="topBar__headInner _INNER">
                    <div
                        className="topBar__stateButton _CLICK"
                        onClick={() => {
                            this.menuHandler();
                        }}
                    >
                        <div className="topBar__stateButtonItem _FULL _ROW _ROW_CENTER" />
                        <div className="topBar__stateButtonItem _FULL _ROW _ROW_CENTER" />
                        <div className="topBar__stateButtonItem _FULL _ROW _ROW_CENTER" />
                    </div>
                    <div className="topBar__5kaLinks _ROW">
                        <Link
                            className="topBar__5kaLink _back"
                            pageName="index"
                            callback={() => {
                                sendGoal('5kaToHomeBtn');
                            }}
                        >
                            <div className="topBar__5kaLinkArrow">
                                <Icon name="arrow-back" />
                            </div>
                            на главную
                        </Link>
                        <Media current="desktop">
                            <Link className="topBar__5kaLink" pageName="faq-5ka">
                                Вопрос-ответ
                            </Link>
                        </Media>
                    </div>

                    <div className="topBar__buttons _ROW">
                        {/* <Link
                            className="topBar__button _ROW _ROW_CENTER _CLICK _purple"
                            pageName="cheque"
                        >
                            <div className="topBar__buttonContent">Зарегистрировать чек</div>
                            <div className="topBar__buttonContent _hide">Зарегистрировать чек</div>
                        </Link> */}
                        <Media current="desktop">
                            <Link
                                className="topBar__button _ROW _ROW_CENTER _CLICK _pink"
                                pageName="auth-login"
                            >
                                <div className="topBar__buttonContent">Личный кабинет</div>
                                <div className="topBar__buttonContent _hide">Личный кабинет</div>
                            </Link>
                        </Media>
                    </div>
                </div>
            </div>
        </>
    );
};

export default render5kaHead;
