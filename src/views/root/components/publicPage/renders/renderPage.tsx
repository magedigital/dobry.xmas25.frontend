import React from 'react';

import TopBar from '@components/topBar/TopBar.tsx';
import checkChatbot from '@functions/checkChatbot.ts';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ name, render }) {
    const { isFixTopBar, isShowMenu } = this.state;

    return (
        <div ref={this.parent} className={`publicPage _FULL _${name}`}>
            {name === 'index' && (
                <div className="body__actionInfo">
                    <div className="body__actionInfoInner">
                        Срок регистрации кодов завершен! Для получения призов заполните данные в
                        Личном кабинете. Вручение призов в срок до 31.03.2026 включительно, см.{' '}
                        <span
                            onClick={() => {
                                window.open('/upload/docs/rules.pdf', '_blank');
                            }}
                        >
                            Правила Акции
                        </span>
                    </div>
                </div>
            )}
            {name === '5ka' && (
                <div className="body__actionInfo">
                    <div className="body__actionInfoInner">
                        Срок регистрации чеков завершен! Для получения призов заполните данные в
                        Личном кабинете. Вручение призов в&nbsp;срок до 28.02.2026 включительно, см.{' '}
                        <span
                            onClick={() => {
                                window.open('/upload/docs/rules-5ka.pdf', '_blank');
                            }}
                        >
                            Правила Акции
                        </span>
                    </div>
                </div>
            )}
            {!checkChatbot() && (
                <>
                    <div
                        className={`publicPage__topBar ${isFixTopBar || isShowMenu ? '_fix' : ''}`}
                    >
                        <TopBar
                            isFix={!!isFixTopBar}
                            cb={(s) => this.setState({ isShowMenu: s })}
                        />
                    </div>
                </>
            )}

            <div
                className="publicPage__inner _FULL _NOSCROLL"
                onScroll={this.scrollHandler.bind(this)}
                ref={this.scrollNode}
            >
                <div className="publicPage__content _FULL_W">{render()}</div>
            </div>
        </div>
    );
};

export default renderPage;
