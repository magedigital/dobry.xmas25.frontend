import React from 'react';

import Lazy from '@components/lazy/Lazy.tsx';
import Link from '@components/link/Link.tsx';
import changePage from '@functions/changePage.ts';
import sendGoal from '@functions/sendGoal.ts';

import I from '../types.ts';

const renderMapNewsBlock: I['renderMapNewsBlock'] = function () {
    return (
        <>
            <div className="indexAbout__mapNews _COL _COL_H_CENTER _FULL_W">
                <Lazy name="2">
                    {new Array(7).fill({}).map((item, key) => (
                        <div className={`indexAbout__mapNewsDecor _${key + 1}`} key={key}>
                            <div className="indexAbout__mapNewsDecorInner _FULL" />
                        </div>
                    ))}
                </Lazy>

                <div className="indexAbout__mapNewsBottles"></div>
                <div className="indexAbout__mapNewsCircle"></div>
                <h3 className="indexAbout__mapNewsTitle">Попробуй новинки от Добрый®,</h3>
                <p className="indexAbout__mapNewsDescription">
                    {/* <div className={`indexAbout__mapNewsAlert ${newsAlertShow ? '_show' : ''}`}>
                        <p>
                            Заходи в игровые шатры и набирай баллы, попадай в&nbsp;ТОП игроков и
                            получи специального приза от&nbsp;FEDUK.
                        </p>
                        <p>Для участия в розыгрыше необходимо зарегистрировать чек с новинкой.</p>
                    </div> */}
                    регистрируй чеки с&nbsp;новинками <br />и участвуй в розыгрыше <br />{' '}
                    <span
                        className="_CLICK"
                        onClick={() => {
                            changePage({ pageName: 'fedukPrize' });
                        }}
                    >
                        специального приза <br className="_MOBILE" />
                        от&nbsp;FEDUK
                    </span>{' '}
                    <div
                        className="indexAbout__mapNewsDescriptionInfo _CLICK"
                        onClick={() => {
                            changePage({ pageName: 'fedukPrize' });
                        }}
                    >
                        i
                    </div>
                </p>
            </div>
            <Link
                className="indexAbout__mapNavItem _cheque"
                pageName="cheque"
                callback={() => {
                    sendGoal('regCheckBtn');
                }}
            >
                <div className="indexAbout__mapNavItemHead">
                    <div className="indexAbout__mapNewsBottles _navItem">
                        {/* <img
                            alt=""
                            className="indexAbout__mapNewsBottle _1"
                        />
                        <img
                            alt=""
                            className="indexAbout__mapNewsBottle _2"
                        /> */}
                    </div>
                </div>
                <div className="indexAbout__mapNavItemContent">
                    Регистрация Чека <br />
                    с&nbsp;новинками{' '}
                </div>
            </Link>
        </>
    );
};

export default renderMapNewsBlock;
