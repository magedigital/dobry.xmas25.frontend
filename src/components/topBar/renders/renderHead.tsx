import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import Fade from '@components/fade/Fade.tsx';
import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import Media from '@components/media/Media.tsx';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { isShowMenu } = this.state;
    const { storePages } = this.props;

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
                        <Link
                            className="topBar__button _ROW _ROW_CENTER _CLICK _purple"
                            pageName="regCode"
                            callback={() => {
                                sendGoal('regCodeBtn,headerRegCodeBtn');
                            }}
                        >
                            <div className="topBar__buttonContent">Регистрация кода</div>
                            <div className="topBar__buttonContent _hide">Регистрация кода</div>
                        </Link>
                        <Link
                            className="topBar__button _ROW _ROW_CENTER _CLICK _pink"
                            pageName="auth-login"
                            callback={() => {
                                sendGoal('profileBtn,headerProfileBtn');
                            }}
                        >
                            <div className="topBar__buttonContent">Личный кабинет</div>
                            <div className="topBar__buttonContent _hide">Личный кабинет</div>
                        </Link>
                        <Link
                            className="topBar__button _ROW _ROW_CENTER _CLICK _red _logo"
                            pageName="5ka"
                            callback={() => {
                                sendGoal('5kaBtn');
                            }}
                        >
                            <div className="topBar__buttonContent">акция в пятерочке</div>
                            <div className="topBar__buttonContent _hide">акция в пятерочке</div>
                        </Link>
                    </div>
                </Media>
                <Media current="mobile">
                    <Fade
                        className="topBar__close _CLICK"
                        isShow={!storePages.index.isShow && !isShowMenu}
                    >
                        <CloseBtn />
                    </Fade>
                </Media>
            </div>
        </div>
    );
};

export default renderHead;
