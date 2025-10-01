import React from 'react';

import Button from '@components/button/Button.tsx';
import Fade from '@components/fade/Fade.tsx';
import Icon from '@components/icon/Icon.tsx';
import Link from '@components/link/Link.tsx';
import LoaderBlock from '@components/loaderBlock/LoaderBlock.tsx';
import changePage from '@functions/changePage.ts';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderMain: I['renderMain'] = function () {
    const { loadingKey, isCopy, data } = this.state;
    const { user } = this.props;

    return (
        <div className={`profile__main ${data ? '_ready' : ''}`}>
            <div className="profile__mainBlocks">
                <div className="profile__mainBlock _info _COL">
                    <div className="profile__mainName">
                        {user?.personal.firstName} {user?.personal.lastName}
                        <div className="profile__mainCopy">
                            <Fade
                                className="profile__mainCopySuccess _FULL _ROW _ROW_CENTER"
                                isShow={!!isCopy}
                            >
                                Скопировано
                            </Fade>
                            ID {user?.userId}
                            <i
                                className="profile__mainCopyIcon _CLICK"
                                onClick={this.copyHandler.bind(this)}
                            >
                                <Icon name="copy" />
                            </i>
                        </div>
                    </div>
                    <div className="profile__mainLinks _ROW">
                        <Link
                            className="profile__mainLink _pink"
                            pageName={
                                user?.status === 'EXTRA_ANKET_REQUIRED' ? 'full-anket' : 'anket'
                            }
                        >
                            Изменить данные
                        </Link>
                        <div
                            className={`profile__mainLink _purple _CLICK ${loadingKey === 'logout' ? '_loading' : ''}`}
                            onClick={this.requestLogout.bind(this)}
                        >
                            Выход
                            <LoaderBlock
                                className="profile__mainLinkLoader"
                                isShow={loadingKey === 'logout'}
                            />
                        </div>
                    </div>
                </div>
                <div className="profile__mainBlock _COL _score">
                    <div className="profile__mainScore">
                        У тебя <span className="profile__mainScoreCount">{data?.balance || 0}</span>{' '}
                        {data?.balanceTitle}
                    </div>
                    <Link className="profile__mainLink _blue" pageName="balls">
                        История
                    </Link>
                </div>
            </div>
            <div className="profile__mainButtons">
                <div className="profile__mainButtonsInner">
                    <div className="profile__mainButton">
                        <Button
                            className="_purple"
                            onClick={() => {
                                changePage({ pageName: 'regCode' });

                                sendGoal('regCodeBtn,profileRegCodeBtn');
                            }}
                        >
                            ЗАРЕГИСТРИРОВАТЬ КОД
                        </Button>
                    </div>
                    <div className="profile__mainButton">
                        <Button
                            className="_pink"
                            onClick={() => {
                                changePage({ pageName: 'cheque' });

                                sendGoal('regCheckBtn,profileRegCheckBtn');
                            }}
                        >
                            ЗАРЕГИСТРИРОВАТЬ ЧЕК
                        </Button>
                    </div>
                </div>
                <div className="profile__mainButtonsInner _invite">
                    <div className="profile__mainButton ">
                        <Button
                            className="_blue"
                            onClick={() => {
                                changePage({ pageName: 'invite' });

                                sendGoal('inviteFriendBtn');
                            }}
                        >
                            ПРИГЛАСИ ДРУГА - ПОЛУЧИ БАЛЛ
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderMain;
