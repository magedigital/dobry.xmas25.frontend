import InnerPageI from '@components/innerPage/types.ts';

import { MainContentT } from '../index/types';
import cards from './static/cards';

type PropsT = {};

type StateT = {
    loadingKey?: string;
    content?: MainContentT;
};

interface RulesI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    cards: typeof cards;

    getContent(this: RulesI): Promise<void>;

    renderContent(this: RulesI): React.ReactNode;
    renderHead(this: RulesI): React.ReactNode;
    renderCards(this: RulesI): React.ReactNode;
}

export default RulesI;
