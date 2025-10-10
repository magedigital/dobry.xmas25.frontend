import React from 'react';

import TopBar from '@components/topBar/TopBar.tsx';

import I from '../types.ts';

const renderPage: I['renderPage'] = function ({ render }) {
    const { isFixTopBar } = this.state;

    return (
        <div ref={this.parent} className="publicPage _FULL">
            <div className={`publicPage__topBar ${isFixTopBar ? '_fix' : ''}`}>
                <TopBar isFix={!!isFixTopBar} />
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
