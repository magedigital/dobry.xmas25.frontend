import InnerPageI from '@components/innerPage/types.ts';

import cards from './static/cards';

type PropsT = {};

type StateT = {
    loadingKey?: string;
};

interface RulesI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    cards: typeof cards;

    renderContent(this: RulesI): React.ReactNode;
    renderHead(this: RulesI): React.ReactNode;
    renderCards(this: RulesI): React.ReactNode;
}

export default RulesI;
