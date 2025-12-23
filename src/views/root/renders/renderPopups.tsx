import React from 'react';

import CollectionPopup from '@components/collectionPopup/CollectionPopup.tsx';
import DiksiPopup from '@components/diksiPopup/DiksiPopup.tsx';
import DobroPopup from '@components/dobroPopup/DobroPopup.tsx';
import Fade from '@components/fade/Fade.tsx';
import IdPopup from '@components/idPopup/IdPopup.tsx';
import KbPopup from '@components/kbPopup/KbPopup.tsx';
import LentaPopup from '@components/lentaPopup/LentaPopup.tsx';
import LosvillPopup from '@components/losvillPopup/LosvillPopup.tsx';
import MagnitPopup from '@components/magnitPopup/MagnitPopup.tsx';
import ManPopup from '@components/manPopup/ManPopup.tsx';
import PerekrestokPopup from '@components/perekrestokPopup/PerekrestokPopup.tsx';

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
        kbPopup,
        perekrestokPopup,
        idPopup,
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
            <Fade className="body__popup" isShow={kbPopup.isShow}>
                <KbPopup />
            </Fade>
            <Fade className="body__popup" isShow={perekrestokPopup.isShow}>
                <PerekrestokPopup />
            </Fade>
            <Fade className="body__popup" isShow={idPopup.isShow}>
                <IdPopup />
            </Fade>
        </>
    );
};

export default renderPopups;
