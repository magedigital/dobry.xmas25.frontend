import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="popup__head _COL _COL_H_CENTER">
            <div className="popup__title">ПРигласи друга</div>
            <Media current="desktop">
                <div className="popup__close">
                    <CloseBtn />
                </div>
            </Media>
        </div>
    );
};

export default renderHead;
