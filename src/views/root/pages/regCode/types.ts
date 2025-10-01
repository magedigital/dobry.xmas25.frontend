import InnerPageI from '@components/innerPage/types';

type PropsT = {};

type StateT = {
    currentStep: 'start' | 'result';
    renderKey?: string;
};

interface RegCodeI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    setStep(step: StateT['currentStep']): Promise<void>;
    setRenderKey(this: RegCodeI): Promise<void>;

    renderContent(this: RegCodeI): React.ReactNode;
    renderHead(this: RegCodeI): React.ReactNode;
}

export default RegCodeI;
