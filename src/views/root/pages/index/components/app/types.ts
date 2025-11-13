import { MainContentT } from '../../types';

type PropsT = {
    content: MainContentT | undefined;
};

type StateT = {};

interface AppI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderHead(this: AppI): React.ReactNode;
    renderContent(this: AppI): React.ReactNode;
}

export default AppI;
