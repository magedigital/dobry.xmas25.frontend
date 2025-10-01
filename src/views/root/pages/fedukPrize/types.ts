import InnerPageI from '@components/innerPage/types';

type PropsT = {};

type StateT = {};

interface FedukPrizeI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderContent(this: FedukPrizeI): React.ReactNode;
    renderHead(this: FedukPrizeI): React.ReactNode;
}

export default FedukPrizeI;
