type PropsT = {};

type StateT = {};

interface AppI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderHead(this: AppI): React.ReactNode;
    renderContent(this: AppI): React.ReactNode;
    renderContentDecors(this: AppI): React.ReactNode;
    renderBackLine(this: AppI): React.ReactNode;
    renderDecors(this: AppI): React.ReactNode;
}

export default AppI;
