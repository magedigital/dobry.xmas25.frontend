import React from 'react';

import Fade from '@components/fade/Fade.tsx';

import I from '../types.ts';

const render5kaAlert: I['render5kaAlert'] = function () {
    const { storePages } = this.props;
    const is5ka = storePages['5ka'].isShow;

    if (1) {
        return;
    }

    return (
        <Fade className="topBar__alert _COL _COL_CENTER" isShow={!!is5ka}>
            <div className="topBar__alertInner">
                Регистрация чеков завершена, выдача призов производится в срок до 30.06.2025
                включительно. См.{' '}
                <a
                    className="topBar__alertLink _CLICK"
                    href="/upload/docs/rules-5ka.pdf"
                    target="_blank"
                >
                    Правила Акции
                </a>
            </div>
        </Fade>
    );
};

export default render5kaAlert;
