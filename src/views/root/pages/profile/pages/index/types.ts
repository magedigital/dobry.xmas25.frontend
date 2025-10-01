import { ProfileContentT, ProfileDataT } from '../../types';

type PropsT = {
    setRenderKey: () => void;
    data?: ProfileDataT;
    content?: ProfileContentT;
};

type StateT = {
    currentCodesCount: number;
    currentRuffleIndex?: number;
    currentMerchIndex?: number;
};

interface IndexI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    codeMoreHandler(this: IndexI): Promise<void>;

    renderCodes(this: IndexI): React.ReactNode;
    renderRaffles(this: IndexI): React.ReactNode;
    renderPrizes(this: IndexI): React.ReactNode;
}

export default IndexI;
