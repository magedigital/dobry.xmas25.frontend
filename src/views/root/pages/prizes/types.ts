import InnerPageI from '@components/innerPage/types.ts';
import { StoreT } from '@global/types';

import { MainContentT } from '../index/types';
import pages from './static/pages';

type PropsT = {
    storePages: StoreT['pages'];
};

type StateT = {
    loadingKey?: string;
    pagesRenderKey?: string;
    content?: MainContentT;
};

interface PrizesI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    pages: typeof pages;

    setPagesRenderKey(this: PrizesI): Promise<void>;
    scrollToTab(this: PrizesI, force?: boolean): void;

    getContent(this: PrizesI): Promise<void>;

    renderContent(this: PrizesI): React.ReactNode;
    renderHead(this: PrizesI): React.ReactNode;
    renderPages(this: PrizesI): React.ReactNode;
}

export default PrizesI;
