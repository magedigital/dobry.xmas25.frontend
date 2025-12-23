type PropsT = {};

type StateT = {
    currentStep: 'start' | 'form' | 'success';
    userId?: string;
};

interface PromoterPrizeI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderBlock(this: PromoterPrizeI, data: { id: StateT['currentStep'] }): React.ReactNode;
}

export default PromoterPrizeI;
