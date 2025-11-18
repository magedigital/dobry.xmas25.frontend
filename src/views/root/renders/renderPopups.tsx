import React from 'react';

import CollectionPopup from '@components/collectionPopup/CollectionPopup.tsx';
import DiksiPopup from '@components/diksiPopup/DiksiPopup.tsx';
import DobroPopup from '@components/dobroPopup/DobroPopup.tsx';
import Fade from '@components/fade/Fade.tsx';
import LentaPopup from '@components/lentaPopup/LentaPopup.tsx';
import LosvillPopup from '@components/losvillPopup/LosvillPopup.tsx';
import MagnitPopup from '@components/magnitPopup/MagnitPopup.tsx';
import ManPopup from '@components/manPopup/ManPopup.tsx';

import I from '../types.ts';

const renderPopups: I['renderPopups'] = function () {
    const {
        losvillPopup,
        manPopup,
        collectionPopup,
        dobroPopup,
        lentaPopup,
        magnitPopup,
        diksiPopup,
    } = this.props;

    return (
        <>
            <Fade className="body__popup" isShow={losvillPopup.isShow}>
                <LosvillPopup />
            </Fade>
            <Fade className="body__popup" isShow={manPopup.isShow}>
                <ManPopup />
            </Fade>
            <Fade className="body__popup" isShow={collectionPopup.isShow}>
                <CollectionPopup />
            </Fade>
            <Fade className="body__popup" isShow={dobroPopup.isShow}>
                <DobroPopup />
            </Fade>
            <Fade className="body__popup" isShow={lentaPopup.isShow}>
                <LentaPopup />
            </Fade>
            <Fade className="body__popup" isShow={magnitPopup.isShow}>
                <MagnitPopup />
            </Fade>
            <Fade className="body__popup" isShow={diksiPopup.isShow}>
                <DiksiPopup />
            </Fade>
        </>
    );
};

export default renderPopups;
