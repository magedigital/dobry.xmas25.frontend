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
                        Информируем об изменении п.5.9 и п.6 Правил Акции, см.{' '}
                        <span
                            onClick={() => {
                                window.open('/upload/docs/rules-5ka.pdf', '_blank');
                            }}
                        >
                            подробнее
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
