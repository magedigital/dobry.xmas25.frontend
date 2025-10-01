import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';
import List from '@components/list/List.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { isCopy } = this.state;
    const { user } = this.props;
    const link = this.getLink();

    return (
        <div
            className="popup _reg _FULL _COL _NOSCROLL"
            onScroll={() => {
                document.dispatchEvent(new CustomEvent('scrollInnerPage'));
            }}
        >
            <div className="popup__inner">
                {this.renderHead()}
                <div className="popup__content _COL _COL_H_CENTER">
                    <div className="popup__invite _COL _COL_H_CENTER">
                        <p className="popup__inviteText _main">
                            Пригласи друга для участия в&nbsp;акции!
                        </p>
                        <p className="popup__inviteText">
                            Вы оба получите дополнительные баллы, после того, как друг
                            зарегистрирует первый код. Количество друзей не ограничено.
                        </p>
                        <div className="popup__inviteInfo _COL _COL_H_CENTER">
                            <p className="popup__inviteText">
                                Ссылка для приглашения:
                                <br />
                                <a href={link} target="_blank" rel="noreferrer">
                                    {link}
                                </a>
                            </p>
                            <p className="popup__inviteText _code">
                                Промокод для друга: <b>{user?.userId}</b>
                            </p>
                        </div>
                        <Error
                            className="popup__error _info"
                            error={isCopy ? 'Скопировано в буфер обмена' : undefined}
                        />
                    </div>
                    <List
                        renderKey={`${!!isCopy}`}
                        items={!isCopy ? [{ _id: 'copy' }] : [{ _id: 'close' }]}
                        parentClass="popup__dynamicButtons"
                        itemStyleProps={[]}
                        parentStyleProps={['width']}
                        parentRealStyleProps={['width']}
                        renderItem={({ item }) => (
                            <div className="popup__button _auto">
                                <Button
                                    onClick={() => {
                                        if (item._id === 'close') {
                                            changePage({ pageName: 'profile' });
                                        } else {
                                            this.copyHandler();
                                        }
                                    }}
                                    className={item._id === 'close' ? '_purple' : '_pink'}
                                >
                                    {item._id === 'close' ? 'закрыть' : 'КОПИРОВАТЬ ссылку'}
                                </Button>
                            </div>
                        )}
                        resizeWidth={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default renderContent;
