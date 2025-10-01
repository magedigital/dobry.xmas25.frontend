import InnerPageI from '@components/innerPage/types';

import { ProfileDataT } from '../profile/types';

type PropsT = {};

type StateT = {
    data?: ProfileDataT;
};

interface BallsI extends InnerPageI<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    getContent(this: BallsI): Promise<void>;

    renderContent(this: BallsI): React.ReactNode;
    renderHead(this: BallsI): React.ReactNode;
}

export default BallsI;
