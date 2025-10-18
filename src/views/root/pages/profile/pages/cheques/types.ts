import { ProfileDataT } from '../../types';

type PropsT = {
    setRenderKey: () => void;
    data?: ProfileDataT;
};

type StateT = {
    currentCodesCount: number;
};

interface ChequesI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    codeMoreHandler(this: ChequesI): Promise<void>;

    renderOffer(this: ChequesI): React.ReactNode;
}

export default ChequesI;
