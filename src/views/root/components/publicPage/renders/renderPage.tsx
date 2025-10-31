import React from 'react';

import TopBar from '@components/topBar/TopBar.tsx';
import handlerPopup from '@functions/handlerPopup.ts';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ name, render }) {
    const { isFixTopBar, isShowMenu } = this.state;

    return (
        <div ref={this.parent} className={`publicPage _FULL _${name}`}>
            {name === 'index' && (
                <div className="body__actionInfo">
                    <div className="body__actionInfoInner">
                        Прием заявок на участие в специальном выпуске «Пряток» в Лосьвилле продлен
                        до 07.11.2025.{' '}
                        <span
                            onClick={() => {
                                handlerPopup('manPopup', { isShow: true });
                            }}
                        >
                            Участвуй!
                        </span>
                    </div>
                </div>
            )}
            <div className={`publicPage__topBar ${isFixTopBar || isShowMenu ? '_fix' : ''}`}>
                <TopBar isFix={!!isFixTopBar} cb={(s) => this.setState({ isShowMenu: s })} />
            </div>
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
