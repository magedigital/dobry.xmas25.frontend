import UserT from '@global/models/User';

import { ProfileDataT } from '../../types';

type PropsT = {
    data?: ProfileDataT;
    user: UserT;
};

type StateT = {};

interface PrizesI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderPrizes(this: PrizesI): React.ReactNode;
}

export default PrizesI;
