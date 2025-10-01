import EditBlockI from '@components/editBlock/types';

import RegI from '../../types';

type PropsT = {
    setStep: RegI['setStep'];
    setRenderKey: () => void;
};

type StateT = {
    loadingKey?: string;
};

interface StartI extends EditBlockI<StateT> {
    props: PropsT;

    parent: React.RefObject<HTMLDivElement | null>;

    sendForm(this: StartI): Promise<void>;

    renderForm(this: StartI): React.ReactNode;
    renderFoot(this: StartI): React.ReactNode;
}

export default StartI;
