import React from 'react';

import Button from '@components/button/Button.tsx';
import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import Media from '@components/media/Media.tsx';
import changePage from '@functions/changePage.ts';
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
                            <Link className="topBar__5kaLink _faq" pageName="faq-5ka">
                                Вопрос-ответ
                            </Link>
                        </Media>
                    </div>

                    <div className="topBar__buttons _ROW">
                        <div className="topBar__button">
                            <Button
                                className="_topBarReg _mediumSize"
                                onClick={() => {
                                    changePage({ pageName: 'cheque' });
                                }}
                            >
                                Загрузить чек
                            </Button>
                        </div>
                        <Media current="desktop">
                            <div className="topBar__button">
                                <Button
                                    className="_topBar5kaProfile _mediumSize"
                                    onClick={() => {
                                        changePage({ pageName: 'auth-login' });
                                    }}
                                >
                                    Личный кабинет
                                </Button>
                            </div>
                        </Media>
                        <Media current="mobile">
                            <div
                                className="topBar__auth"
                                onClick={() => {
                                    changePage({ pageName: 'profile' });
                                }}
                            >
                                <div className="topBar__authInner"></div>
                            </div>
                        </Media>
                    </div>
                </div>
            </div>
        </>
    );
};

export default render5kaHead;
