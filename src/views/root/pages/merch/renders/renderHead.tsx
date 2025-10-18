import React from 'react';

import CloseBtn from '@components/closeBtn/CloseBtn.tsx';
import Media from '@components/media/Media.tsx';

import I from '../types.ts';

const renderHead: I['renderHead'] = function () {
    return (
        <div className="popup__head _COL _COL_H_CENTER">
            <div className="popup__title">Заказ приза</div>
            <p className="popup__description">
                <Media current="desktop">
                    Выбери приз и нажми {'"'}Заказать{'"'}:
                </Media>
                <Media current="mobile">
                    Выбери приз (свайпай) и нажми <br />
                    {'"'}Заказать{'"'}
                </Media>
            </p>
            <Media current="desktop">
                <div className="popup__close">
                    <CloseBtn />
                </div>
            </Media>
        </div>
    );
};

export default renderHead;
