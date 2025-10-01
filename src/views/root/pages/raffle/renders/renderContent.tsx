import React from 'react';

import Button from '@components/button/Button.tsx';
import Error from '@components/error/Error.tsx';
import List from '@components/list/List.tsx';
import changePage from '@functions/changePage.ts';
import setAsyncState from '@functions/setAsyncState.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { error, inProcess, isComplete, isError } = this.state;

    return (
        <div
            className="popup _merch _FULL _COL _NOSCROLL"
            onScroll={() => {
                document.dispatchEvent(new CustomEvent('scrollInnerPage'));
            }}
        >
            <div className="popup__inner">
                {this.renderHead()}
                <div className="popup__content _COL _COL_H_CENTER">
                    <div className="popup__subTitle">
                        Участие в розыгрыше - <span>1</span> балл
                    </div>
                    {this.renderRaffle()}
                    <Error className="popup__error" error={error} />
                    <List
                        renderKey={`${!!isComplete}${!!inProcess}${!!isError}`}
                        items={
                            !inProcess
                                ? [{ _id: 'start' }]
                                : isComplete
                                  ? isError
                                      ? [{ _id: 'error' }]
                                      : [{ _id: 'complete' }]
                                  : []
                        }
                        parentClass="popup__dynamicButtons"
                        itemStyleProps={[]}
                        parentStyleProps={['width']}
                        parentRealStyleProps={['width']}
                        renderItem={({ item }) => (
                            <div className="popup__button _auto">
                                <Button
                                    onClick={async () => {
                                        if (item._id === 'error') {
                                            await setAsyncState.call(this, {
                                                inProcess: false,
                                                isError: false,
                                                isComplete: false,
                                            });
                                        } else {
                                            changePage({ pageName: 'profile' });

                                            if (window.Telegram) {
                                                window.Telegram.WebApp?.close();
                                            }
                                        }
                                    }}
                                    className={item._id === 'start' ? '_pink' : '_purple'}
                                >
                                    {item._id === 'start'
                                        ? 'Сыграть позже'
                                        : item._id === 'error'
                                          ? 'Попробуй ещё'
                                          : 'Спасибо!'}
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
