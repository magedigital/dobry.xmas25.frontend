import React from 'react';

import Button from '@components/button/Button.tsx';
import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import Fade from '@components/fade/Fade.tsx';
import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import Media from '@components/media/Media.tsx';
import changePage from '@functions/changePage.ts';
import handlerPopup from '@functions/handlerPopup.ts';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { isShowMenu, isShowIndex } = this.state;

    return (
        <div className="topBar__head _SECTION">
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
                <Link
                    className="topBar__logo"
                    pageName="index"
                    callback={() => {
                        this.menuHandler(false);
                    }}
                >
                    <Icon name="logo" />
                </Link>
                <Media current="desktop">
                    <div className="topBar__buttons _ROW">
                        <div className="topBar__button">
                            <Button
                                className="_topBarReg _mediumSize"
                                onClick={() => {
                                    changePage({ pageName: 'regCode' });
                                    sendGoal('regCodeBtn,headerRegCodeBtn', true);
                                }}
                            >
                                Регистрация кода
                            </Button>
                        </div>
                        <div className="topBar__button">
                            <Button
                                className="_topBarProfile _mediumSize"
                                onClick={() => {
                                    changePage({ pageName: 'auth-login' });
                                    sendGoal('profileBtn,headerProfileBtn');
                                }}
                            >
                                Личный кабинет
                            </Button>
                        </div>
                        <a
                            href="https://t.me/dobrycola_promo_bot"
                            target="_blank"
                            rel="noreferrer"
                            className="topBar__button"
                            onClick={() => {
                                sendGoal('tgBtn');
                            }}
                        >
                            <Button className="_topBarBot _mediumSize" onClick={() => undefined}>
                                <i className="_tg">
                                    <Icon name="tg" />
                                </i>
                                чат-бот
                            </Button>
                        </a>
                        <div className="topBar__button">
                            <Button
                                className="_topBarCollection _mediumSize"
                                onClick={() => {
                                    handlerPopup('collectionPopup', { isShow: true });
                                    sendGoal('elksBtn');
                                }}
                            >
                                собери коллекцию лосей
                            </Button>
                        </div>
                    </div>
                </Media>
                <Media current="mobile">
                    <Fade className="topBar__close _CLICK" isShow={!isShowIndex && !isShowMenu}>
                        <CloseBtn />
                    </Fade>
                    {isShowIndex && (
                        <div
                            className="topBar__auth"
                            onClick={() => {
                                changePage({ pageName: 'profile' });
                            }}
                        >
                            <div className="topBar__authInner"></div>
                        </div>
                    )}
                </Media>
            </div>
        </div>
    );
};

export default renderHead;
