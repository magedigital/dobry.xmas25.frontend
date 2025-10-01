import InnerPageI from '@components/innerPage/types.ts';
import { StoreT } from '@global/types';

import cards from './static/cards';

type PropsT = {
    storePages: StoreT['pages'];
};

type StateT = {
    loadingKey?: string;
};

interface AnketMapI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    fivepost?: any;

    parent: React.RefObject<HTMLDivElement | null>;
    cards: typeof cards;

    widgetLoad(this: AnketMapI): Promise<void>;
    widgetInit(this: AnketMapI): Promise<void>;

    renderContent(this: AnketMapI): React.ReactNode;
    renderHead(this: AnketMapI): React.ReactNode;
}

export default AnketMapI;
