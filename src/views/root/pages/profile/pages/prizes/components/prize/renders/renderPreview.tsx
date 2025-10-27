import React from 'react';

import changePage from '@functions/changePage.ts';

import I from '../types.ts';

const renderPreview: I['renderPreview'] = function () {
    const { prize } = this.props;

    return (
        <div className="prize__preview _FULL_W _COL _COL_H_CENTER">
            <div className="prize__previewInner">
                <img src={prize.thumb} alt="" className="prize__previewImage" />
            </div>
            {prize.promoCode && (
                <div
                    className="prize__previewButton _CLICK _main"
                    onClick={() => {
                        this.promoHandler(true);
                    }}
                >
                    Открыть промокод
                </div>
            )}
            {prize.status === 'NEED_CODE' && (
                <div
                    className="prize__previewButton _CLICK _code"
                    onClick={() => {
                        changePage({ pageName: 'regCode' });
                    }}
                >
                    Зерегистрируй код{prize.expired ? ` до ${prize.expired}` : ''}
                </div>
            )}
        </div>
    );
};

export default renderPreview;
