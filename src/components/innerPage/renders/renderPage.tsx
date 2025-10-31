import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import Media from '@components/media/Media.tsx';
import TopBar from '@components/topBar/TopBar.tsx';
import checkChatbot from '@functions/checkChatbot.ts';

import I from '../types.ts';

const renderPage: I['renderPage'] = function (children, withClose = true, isPopup) {
    const { showClose, isTopBarFix } = this.state;

    return (
        <div ref={this.parent} className="innerPage _FULL">
            {!checkChatbot() && (
                <>
                    <div className="innerPage__topBar">
                        <TopBar
                            cb={() => undefined}
                            className={['_inner', ...(!isPopup ? ['_back'] : [])].join(' ')}
                            isFix={!!isTopBarFix}
                        />
                    </div>
                    {withClose && (
                        <Media current="desktop">
                            <div className={`innerPage__close ${showClose ? '_show' : ''}`}>
                                <CloseBtn />
                            </div>
                        </Media>
                    )}
                </>
            )}

            {children}
        </div>
    );
};

export default renderPage;
