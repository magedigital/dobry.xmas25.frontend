import React from 'react';

import Button from '@components/button/Button.tsx';
import Table from '@components/table/Table.tsx';
import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderContent: I['renderContent'] = function () {
    const { data } = this.state;
    const items = (data?.transactions || []).map((item, key) => ({
        _id: key.toString(),
        date: item.datetime,
        balls: item.sum,
        comment: item.comment,
    }));

    return (
        <div
            className="popup _reg _FULL _COL _NOSCROLL"
            onScroll={() => {
                document.dispatchEvent(new CustomEvent('scrollInnerPage'));
            }}
        >
            <div className="popup__wrapper">
                <div className="popup__inner">
                    <div className="popup__innerBox">
                        {this.renderHead()}
                        <div className="popup__content _COL _COL_H_CENTER">
                            <div className="popup__table _FULL_W">
                                <Table name="balls" items={items} />
                            </div>
                            <div className="popup__button">
                                <Button
                                    onClick={() => {
                                        changePage({ pageName: 'profile' });
                                    }}
                                    className="_white"
                                >
                                    OK
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default renderContent;
