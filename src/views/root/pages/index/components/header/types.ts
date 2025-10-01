type PropsT = {};

type StateT = {};

interface HeaderI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    renderBack(this: HeaderI): React.ReactNode;
}

export default HeaderI;
