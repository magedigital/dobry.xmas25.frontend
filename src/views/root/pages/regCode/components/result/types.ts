import RegCodeI from '../../types';

type PropsT = {
    setStep: RegCodeI['setStep'];
    result: number;
};

type StateT = {
    loadingKey?: string;
};

interface ResultI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderContent(this: ResultI): React.ReactNode;
    renderFoot(this: ResultI): React.ReactNode;
}

export default ResultI;
