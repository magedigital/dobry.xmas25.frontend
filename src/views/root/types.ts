import { StoreT } from '@global/types.ts';

import pages from './static/pages.tsx';

type PropsT = {
    rootInit: StoreT['rootInit'];
    acceptCookies: StoreT['acceptCookies'];
    user: StoreT['user'];
    losvillPopup: StoreT['losvillPopup'];
    manPopup: StoreT['manPopup'];
    collectionPopup: StoreT['collectionPopup'];
    dobroPopup: StoreT['dobroPopup'];
    lentaPopup: StoreT['lentaPopup'];
    magnitPopup: StoreT['magnitPopup'];
    diksiPopup: StoreT['diksiPopup'];
    kbPopup: StoreT['kbPopup'];
    perekrestokPopup: StoreT['perekrestokPopup'];
    idPopup: StoreT['idPopup'];
};

type StateT = {};

interface RootI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    pages: typeof pages;

    renderPopups(this: RootI): React.ReactNode;
    renderTopBar(this: RootI): React.ReactNode;
}

export default RootI;
