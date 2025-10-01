import { PyterkaContentT } from '../../types';
import rules from './static/rules';

type PropsT = {
    content?: PyterkaContentT;
};

type StateT = {};

interface PrizesI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    rules: typeof rules;

    renderMain(this: PrizesI): React.ReactNode;
    renderRules(this: PrizesI): React.ReactNode;
    renderInfo(this: PrizesI): React.ReactNode;
    renderPrizes(this: PrizesI, data: { name: 'weekly' | 'vip' }): React.ReactNode;
}

export default PrizesI;
