import React from 'react';

import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    const { prize, user } = this.props;

    //  <a href={prize.url} target="_blank" className="prize__status" rel="noreferrer">
    //                 {prize.statusTitle}
    //             </a>

    return (
        <div className="prize__head _COL _FULL_W">
            {prize.status === 'DOWNLOAD' ? (
                <div className="prize__status">Получить</div>
            ) : prize.status === 'DATA_NEEDED' ? (
                <div
                    className="prize__status _CLICK"
                    onClick={() => {
                        changePage({
                            pageName: user.status === 'ACT_REQUIRED' ? 'akt-inner' : 'full-anket',
                            ids: { 1: prize.id },
                        });
                    }}
                >
                    {prize.statusTitle}
                </div>
            ) : (
                <div className="prize__status">{prize.statusTitle}</div>
            )}

            {prize.count && (
                <div className="prize__count _COL _COL_H_CENTER">
                    <div className="prize__countInner _COL _COL_CENTER">{prize.count}</div>
                    <div className="prize__countSupport">шт</div>
                </div>
            )}
        </div>
    );
};

export default renderHead;
