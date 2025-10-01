import React from 'react';

import Fade from '@components/fade/Fade.tsx';
import LosvillPopup from '@components/losvillPopup/LosvillPopup.tsx';
import ManPopup from '@components/manPopup/ManPopup.tsx';

import I from '../types.ts';

const renderPopups: I['renderPopups'] = function () {
    const { losvillPopup, manPopup } = this.props;

    return (
        <>
            <Fade className="body__popup" isShow={losvillPopup.isShow}>
                <LosvillPopup />
            </Fade>
            <Fade className="body__popup" isShow={manPopup.isShow}>
                <ManPopup />
            </Fade>
        </>
    );
};

export default renderPopups;
